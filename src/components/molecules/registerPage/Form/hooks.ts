import { useCallback, useReducer, useState } from "react";

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

const submitReviewUrl =
  "https://stamped.io/api/reviews3?apiKey=pubkey-r3fzGI070JGc0pQx2ruzTCnu760u78&storeUrl=gravv-ca.myshopify.com";

export function useRegisterForm() {
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
      console.log(isInvalid);
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
      } as Record<string, string>;

      const formData = new FormData();
      formData.append("email", dataToSubmit.email);
      formData.append("username", dataToSubmit.username);
      formData.append("password", dataToSubmit.password);
      formData.append("confirmPassword", dataToSubmit.confirmPassword);

      try {
        const response = await fetch(submitReviewUrl, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        console.log(result);
        dispatch({ type: Actions.SUBMIT, payload: { submitted: true } });
      } catch (err) {
        console.error(err);
      }
    },
    [formState]
  );

  return {
    formState,
    handleInputBlur,

    handleSubmit,
  };
}
