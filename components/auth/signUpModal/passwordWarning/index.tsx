import { CloseIcon, CheckIcon } from 'public/static/svg';
import * as S from './passwordWarning.styles';

interface IProps {
  text: string;
  isValid: boolean;
}

const PasswordWarning = ({ text, isValid }: IProps) => {
  return (
    <S.Container isValid={isValid}>
      {isValid ? <CheckIcon /> : <CloseIcon />}
      {text}
    </S.Container>
  );
};
export default PasswordWarning;
