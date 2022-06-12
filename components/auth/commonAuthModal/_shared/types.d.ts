import { IInputList } from '.';

export interface IProps {
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  closeModal: () => void;
  inputList: IInputList[];
  onChangeInputs: ({
    currentTarget: {
      dataset: { id },
      value,
    },
  }: SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => void;
  children?: React.ReactNode;
  submitBtnText: string;
  switchModalText: string;
  textToCheckSwitchModal: string;
}
