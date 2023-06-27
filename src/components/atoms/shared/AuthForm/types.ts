export interface AuthFormProps {
  label?: string;
  pleaceholder?: string;
  remindPasswordLabel?: string;
  id: string;
  type: string;
  value: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isError: boolean;
  error: string;
  errorAtleastOneNumber?: string;
  errorAtleastOneLetterInCapitalCase?: string;
  errorAlteastOneSpecialCharacter?: string;
  isLogin?: boolean;
}
