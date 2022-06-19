import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'store/auth';
import { useSelector } from 'store';
import useTranslation from 'next-translate/useTranslation';

import Input from './input';
import { IProps } from './_shared';

import { CloseIcon } from 'public/static/svg';
import * as S from './authModal.styles';

const AuthModal: FC<IProps> = ({
  onSubmitForm,
  closeModal,
  inputList,
  onChangeInputs,
  children,
  submitBtnText,
  switchModalText,
  textToCheckSwitchModal,
}) => {
  const dispatch = useDispatch();
  const currentAuthMode = useSelector((state) => state.auth.authMode);
  const { t } = useTranslation('common');

  const onClickSwitchAuthMode = () =>
    dispatch(authActions.setAuthMode(currentAuthMode === 'login' ? 'signup' : 'login'));

  return (
    <form css={S.wrapper} onSubmit={onSubmitForm}>
      <h5 css={S.title}>{t(currentAuthMode)}</h5>
      <button css={S.closeIconBtn} onClick={closeModal}>
        <CloseIcon />
      </button>
      {inputList.map((input) => {
        const { placeholder, type, icon, name, value, dataset, errorMsg, isValid, onFocus } = input;
        return (
          <div css={S.inputWrapper} key={dataset}>
            <Input
              placeholder={placeholder}
              type={type}
              icon={icon}
              name={name}
              value={value}
              dataset={dataset}
              onChange={onChangeInputs}
              useValidation
              isvalid={isValid}
              errorMsg={errorMsg}
              onFocus={onFocus}
            />
          </div>
        );
      })}
      {children}
      <button type='submit' css={S.submitBtn}>
        {submitBtnText}
      </button>
      <p css={S.checkAccount}>
        {textToCheckSwitchModal}
        <span role='presentation' onClick={onClickSwitchAuthMode}>
          {switchModalText}
        </span>
      </p>
    </form>
  );
};

export default AuthModal;
