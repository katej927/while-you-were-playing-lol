import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { FACEBOOK_URL, TWITTER_URL, THIS_REPO_URL, convertShareKakao } from './_shared';

import { CopyLinkIcon, KakaoTalkIcon, TwitterIcon, FacebookIcon, GithubIcon } from 'public/static/svg';
import * as S from './footer.styles';

const Footer = () => {
  const {
    query: { name },
    asPath,
  } = useRouter();
  const { t } = useTranslation('common');

  const CURRENT_URL = `${process.env.NEXT_PUBLIC_API_URL}${asPath}`;

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) kakao.init(String(process.env.NEXT_PUBLIC_KAKAO_API_KEY).trim());
  }

  const onClickIconBtn = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    if (type === 'copyLink') navigator.clipboard.writeText(CURRENT_URL);
    if (type === 'kakaotalk') {
      const title = name ? `${t('titleOfApp')} | ${name}` : `${t('titleOfApp')}`;
      window.Kakao.Link.sendDefault(convertShareKakao(title, t('descOfApp'), t('btnTitleOfKakaoTalk'), CURRENT_URL));
    }
  };

  const ICONS = [
    { icon: <CopyLinkIcon />, type: 'copyLink' },
    { icon: <TwitterIcon />, type: 'twitter', url: TWITTER_URL + '당롤동 ' + '&url=' + CURRENT_URL },
    { icon: <KakaoTalkIcon />, type: 'kakaotalk' },
    { icon: <FacebookIcon />, type: 'facebook', url: FACEBOOK_URL + CURRENT_URL },
    { icon: <GithubIcon />, type: 'github', url: THIS_REPO_URL },
  ];

  return (
    <footer css={S.Container}>
      <div css={S.contentContainer}>
        {ICONS.map(({ icon, type, url }, idx) => {
          return url ? (
            <Link key={type} href={url} passHref>
              <a>{icon}</a>
            </Link>
          ) : (
            <S.IconBtn type='button' onClick={onClickIconBtn} data-type={type} idx={idx}>
              {icon}
            </S.IconBtn>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
