export interface IInputList {
  placeholder: string;
  type?: string;
  icon: JSX.Element;
  name?: string;
  value: string;
  dataset: string;
  errorMsg: string;
  isValid?: boolean;
  onFocus?: () => void;
}
