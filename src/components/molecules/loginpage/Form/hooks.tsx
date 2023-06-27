import { useCallback, useReducer, useContext, useState } from "react";
import { useHttpClient } from "../../../../lib/hooks/http-hook";
import { AuthContext } from "../../../../lib/context/auth-context";

import {
  reducer,
  validateInput,
  isFormInvalid,
  isElementInArray,
} from "./utils";

import { InitialFormState, Actions, MandatoryInputIds } from "./types";

const initialState: InitialFormState = {
  mandatoryInputs: {
    email: {
      id: "email",
      value: "",
      touched: false,
      hasError: false,
      error: "",
    },
    password: {
      id: "password",
      value: "",
      touched: false,
      hasError: false,
      error: "",
    },
  },
  submitted: false,
};

export function useRegisterForm() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const auth = useContext(AuthContext);

  const { isLoading, sendRequest } = useHttpClient();

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const currentInput = e.currentTarget;
      const value = currentInput.value;
      const id = currentInput.id as MandatoryInputIds;

      const { hasError, error } = validateInput(id, value);

      dispatch({
        type: Actions.TEXT_INPUT_BLUR,
        payload: {
          id,
          value,
          hasError,
          error,
          touched: true,
        },
      });
    },
    [formState, dispatch]
  );

  const handleUntouchedFields = useCallback(() => {
    const mandatoryInputsCopy = { ...formState.mandatoryInputs };
    const mandatoryInputsValues = Object.values(mandatoryInputsCopy);

    const invalidInputs = mandatoryInputsValues.filter(
      ({ touched }) => !touched
    );

    const isAnyInputInvalid = invalidInputs.length > 0;

    if (isAnyInputInvalid) {
      const textInputIds = ["email", "password"];

      for (const { id, touched } of invalidInputs) {
        const isTextInput = isElementInArray(id, textInputIds);
        const isTextInputEmpty = !touched;
        const error = "Please fill this field";

        if (isTextInput && isTextInputEmpty) {
          dispatch({
            type: Actions.TEXT_INPUT_ERROR,
            payload: { error, hasError: true, id },
          });
        }
      }
      return;
    }
    return;
  }, [formState]);

  const handleSubmit = useCallback(
    async (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      const mandatoryInputs = { ...formState.mandatoryInputs };

      const isInvalid = isFormInvalid(mandatoryInputs);

      if (isInvalid) {
        handleUntouchedFields();
        return;
      }

      const mandatoryInputsValues = Object.values(mandatoryInputs);

      const mandatoryInputsData = mandatoryInputsValues.reduce((acc, input) => {
        const inputData = { [input.id]: input.value };
        return Object.assign(acc, inputData);
      }, {});

      const dataToSubmit = {
        ...mandatoryInputsData,
      } as { email: string; password: string };

      try {
        const responseData = await sendRequest(
          "http://localhost:8000/api/users/login",
          "POST",
          JSON.stringify({
            email: dataToSubmit.email,
            password: dataToSubmit.password,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    },
    [formState]
  );

  return {
    formState,
    handleInputBlur,

    handleSubmit,
    isLoading,
  };
}
