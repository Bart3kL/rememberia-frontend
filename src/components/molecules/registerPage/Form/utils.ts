import { useEffect } from "react";

import { Reducer, Action, InitialFormState, MandatoryInputs } from "./types";

export const reducer: Reducer<InitialFormState, Action> = (
  state,
  { type, payload }
) => {
  switch (type) {
    case "TEXT_INPUT_BLUR":
      return {
        ...state,
        mandatoryInputs: { ...state.mandatoryInputs, [payload.id]: payload },
      };
    case "SUBMIT":
      return {
        ...state,
        submitted: payload.submitted,
      };
    case "TEXT_INPUT_ERROR":
      return {
        ...state,
        mandatoryInputs: {
          ...state.mandatoryInputs,
          [payload.id]: {
            ...state.mandatoryInputs[payload.id],
            hasError: payload.hasError,
            error: payload.error,
          },
        },
      };
    default:
      return state;
  }
};

export const isEmailValid = (email: string) => {
  const emailRegExp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  return emailRegExp.test(email);
};

export const validateInput = (id: string, value: string) => {
  const isEmpty = value.trim().length === 0;
  let hasError = false,
    error = "";
  let errorAtleastOneNumber = "";
  let errorAtleastOneLetterInCapitalCase = "";
  let errorAlteastOneSpecialCharacter = "";

  switch (id) {
    case "username":
      if (isEmpty) {
        hasError = true;
        error = "Please enter a name";
      } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
        hasError = true;
        error = "Invalid name. Please avoid special characters";
      } else if (value.length < 3) {
        hasError = true;
        error = "Invalid name. Name must containt least 3 characters";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "email":
      if (isEmpty) {
        hasError = true;
        error = "Please enter an email";
      } else if (!isEmailValid(value)) {
        hasError = true;

        error = "Invalid email";
      } else {
        hasError = false;
        error = "";
      }
      break;
    case "password":
      if (isEmpty) {
        hasError = true;
        error = "Please enter a password";
      } else if (value.length < 8) {
        hasError = true;
        error = "Must be atleast 8 characters!";
      } else if (!/\d/.test(value)) {
        hasError = true;
        errorAtleastOneNumber = "Must contain atleast 1 number!";
      } else if (!/[A-Z]/.test(value)) {
        hasError = true;
        errorAtleastOneLetterInCapitalCase =
          "Must contain atleast 1 letter in Capital Case!";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        hasError = true;
        errorAlteastOneSpecialCharacter =
          "Must contain atleast 1 Special Character!";
      } else {
        hasError = false;
        error = "";
      }
      break;

    default:
      console.error("Unknown type of input.");
  }
  return {
    hasError,
    error,
    errorAtleastOneNumber,
    errorAtleastOneLetterInCapitalCase,
    errorAlteastOneSpecialCharacter,
  };
};

export const isFormInvalid = (inputs: MandatoryInputs) => {
  const mandatoryInputValues = Object.values(inputs);
  const isAnyInputInvalid = mandatoryInputValues.some(
    ({ hasError, touched }) => hasError || !touched
  );
  return isAnyInputInvalid;
};

export const isElementInArray = (id: string, array: string[]) =>
  array.indexOf(id) > -1;
