import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';

import { useModal } from 'hooks';
import { SignUpModal } from 'components';
import { BUTTONS_NAME } from './_shared';
import { MainIcon } from '../../public/static/svg';
import * as S from './header.styles';

const Header = () => {
  const { openModal, ModalPortal } = useModal();
  const router = useRouter();
  const { pathname, asPath, query, locales, locale: curlocale } = router;

  const onClickIcon = () => {
    router.push('/');
  };

  const onLanguageClick = (e: SyntheticEvent<EventTarget>) => {
    if (!(e.currentTarget instanceof HTMLButtonElement)) {
      return;
    }
    const { type } = e.currentTarget.dataset;
    router.push({ pathname, query }, asPath, { locale: type });
  };

  const onClickAuthBtn = () => {
    openModal();
  };

  return (
    <nav css={S.wrapper}>
      <div css={S.contentWrapper}>
        <MainIcon onClick={onClickIcon} css={S.mainIcon} />
        <div>
          {locales?.map((locale) => (
            <S.LocalBtn key={locale} isSelected={locale === curlocale} onClick={onLanguageClick} data-type={locale}>
              {locale.toUpperCase()}
            </S.LocalBtn>
          ))}
          {BUTTONS_NAME.map((btnName) => (
            <button key={btnName} css={S.authBtns} type='button' onClick={onClickAuthBtn}>
              {btnName}
            </button>
          ))}
        </div>
      </div>
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </nav>
  );
};

export default Header;
