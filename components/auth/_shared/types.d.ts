export interface IInputList {
  type?: string;
  icon: JSX.Element;
  name?: string;
  value: string;
  dataset: string;
  isValid?: boolean;
  onFocus?: () => void;
}
