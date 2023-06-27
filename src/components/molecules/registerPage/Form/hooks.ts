import { useCallback, useReducer, useContext } from "react";
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
    username: {
      id: "username",
      value: "",
      touched: false,
      hasError: false,
      error: "",
    },
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
      errorAtleastOneNumber: "",
      errorAtleastOneLetterInCapitalCase: "",
      errorAlteastOneSpecialCharacter: "",
    },
  },
  submitted: false,
};

export function useRegisterForm() {
  const auth: any = useContext(AuthContext);

  const { isLoading, sendRequest } = useHttpClient();

  const [formState, dispatch] = useReducer(reducer, initialState);
  const handleInputBlur = useCallback(
    (e: any) => {
      const currentInput = e.currentTarget;
      const value = currentInput.value;
      const id = currentInput.id as MandatoryInputIds;

      const {
        hasError,
        error,
        errorAtleastOneNumber,
        errorAtleastOneLetterInCapitalCase,
        errorAlteastOneSpecialCharacter,
      } = validateInput(id, value);

      dispatch({
        type: Actions.TEXT_INPUT_BLUR,
        payload: {
          id,
          value,
          hasError,
          error,
          errorAtleastOneNumber,
          errorAtleastOneLetterInCapitalCase,
          errorAlteastOneSpecialCharacter,
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
      const textInputIds = ["email", "username", "password", "confirmPassword"];

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

      const dataToSubmit: any = {
        ...mandatoryInputsData,
      };

      try {
        const responseData = await sendRequest(
          "http://localhost:8000/api/users/signup",
          "POST",
          JSON.stringify({
            email: dataToSubmit.email,
            name: dataToSubmit.username,
            password: dataToSubmit.password,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        auth.login(responseData.userId, responseData.token);
      } catch (err: any) {}
    },
    [formState]
  );

  return {
    formState,
    handleInputBlur,
    isLoading,
    handleSubmit,
  };
}
