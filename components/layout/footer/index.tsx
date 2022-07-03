import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { useDispatch } from 'react-redux';
import { commonActions } from 'store';

import { FACEBOOK_URL, TWITTER_URL, THIS_REPO_URL, convertShareKakao } from './_shared';

import { CopyLinkIcon, KakaoTalkIcon, TwitterIcon, FacebookIcon, GithubIcon } from 'public/static/svg';
import * as S from './footer.styles';

const Footer = () => {
  const {
    query: { name },
    asPath,
  } = useRouter();
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const CURRENT_URL = `${process.env.NEXT_PUBLIC_API_URL}${asPath}`;

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) kakao.init(String(process.env.NEXT_PUBLIC_KAKAO_API_KEY).trim());
  }

  const onClickiconBtn = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    if (type === 'copyLink') {
      navigator.clipboard.writeText(CURRENT_URL);

      dispatch(
        commonActions.setPopupMsg({
          status: 'success',
          text: 'copied',
          isShow: true,
        })
      );
      setTimeout(() => {
        dispatch(commonActions.setPopupMsg({ isShow: false }));
      }, 5000);
    }

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
    <footer css={S.container}>
      <div css={S.contentContainer}>
        {ICONS.map(({ icon, type, url }) => {
          return url ? (
            <Link key={type} href={url} passHref>
              <a css={S.iconBtn}>{icon}</a>
            </Link>
          ) : (
            <button css={S.iconBtn} type='button' onClick={onClickiconBtn} data-type={type}>
              {icon}
            </button>
          );
        })}
      </div>
      <Link href={'/'}>
        <a css={S.logoBtn}>
          <h2>WPL</h2>
        </a>
      </Link>
      <p css={S.policyExplain}>
        WPL isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially
        involved in producing or managing League of Legends.
        <br /> League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.
      </p>
    </footer>
  );
};

export default Footer;
