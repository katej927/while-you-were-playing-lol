import { useDispatch } from 'react-redux';
import { authActions } from 'store';
import { useSelector } from 'store';
import useTranslation from 'next-translate/useTranslation';

import Input from './input';
import { IProps } from './_shared';

import { CloseIcon } from 'public/static/svg';
import * as S from './authModal.styles';

const AuthModal = ({ onSubmitForm, closeModal, inputList, onChangeInputs, children }: IProps) => {
  const currentAuthMode = useSelector((state) => state.auth.authMode);
  const dispatch = useDispatch();

  const { t } = useTranslation('common');
  const translateCurrentMode = `authentication.${currentAuthMode === 'login' ? 'login' : 'signUp'}`;

  const onClickSwitchAuthMode = () =>
    dispatch(authActions.setAuthMode(currentAuthMode === 'login' ? 'signup' : 'login'));

  return (
    <form css={S.wrapper} onSubmit={onSubmitForm}>
      <h5 css={S.title}>{t(currentAuthMode)}</h5>
      <button css={S.closeIconBtn} onClick={closeModal}>
        <CloseIcon />
      </button>
      {inputList.map(({ type, icon, name, value, dataset, isValid, onFocus }) => (
        <div css={S.inputWrapper} key={dataset}>
          <Input
            placeholder={t(`authentication.common.placeholder.${dataset}`, {
              returnObjects: true,
            })}
            type={type}
            icon={icon}
            name={name}
            value={value}
            dataset={dataset}
            onChange={onChangeInputs}
            isCheckValidation
            isvalid={isValid}
            errorMsg={t(`authentication.common.errorMsg.${dataset}`, {
              returnObjects: true,
            })}
            onFocus={onFocus}
          />
        </div>
      ))}
      {children}
      <button type='submit' css={S.submitBtn}>
        {t(`${translateCurrentMode}.submit`, {
          returnObjects: true,
        })}
      </button>
      <p css={S.checkAccount}>
        {t(`${translateCurrentMode}.hasAccount.ask`, {
          returnObjects: true,
        })}
        <span role='presentation' onClick={onClickSwitchAuthMode}>
          {t(`${translateCurrentMode}.hasAccount.btn`, {
            returnObjects: true,
          })}
        </span>
      </p>
    </form>
  );
};

export default AuthModal;
