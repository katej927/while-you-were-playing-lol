import { SyntheticEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { FACEBOOK_URL, TWITTER_URL } from './_shared';

import { CopyLinkIcon, KakaoTalkIcon, TwitterIcon, FacebookIcon, GithubIcon } from 'public/static/svg';
import * as S from './footer.styles';

const ICONS = [
  { icon: <CopyLinkIcon />, type: 'copyLink' },
  { icon: <TwitterIcon />, type: 'twitter' },
  { icon: <KakaoTalkIcon />, type: 'kakaotalk' },
  { icon: <FacebookIcon />, type: 'facebook' },
  { icon: <GithubIcon />, type: 'github' },
];

const Footer = () => {
  const {
    query: { name },
    push,
    asPath,
  } = useRouter();
  const { t } = useTranslation('common');

  useEffect(() => {
    window.Kakao.init(String(process.env.KAKAO_API_KEY));
  }, []);

  const onClickIconBtn = ({
    currentTarget: {
      dataset: { type },
    },
  }: SyntheticEvent<HTMLButtonElement>) => {
    const CURRENT_URL = encodeURI(window.location.href);

    if (type === 'copyLink') navigator.clipboard.writeText(window.location.href);
    if (type === 'facebook') window.open(FACEBOOK_URL + CURRENT_URL);
    if (type === 'twitter') window.open(TWITTER_URL + '당롤동 ' + '&url=' + CURRENT_URL);
    if (type === 'kakaotalk') {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: name ? `${t('titleOfApp')} | ${name}` : `${t('titleOfApp')}`,
          description: t('descOfApp'),
          imageUrl: window.location.href + '/static/image/WPL.png',
          link: {
            webUrl: CURRENT_URL,
            mobileWebUrl: CURRENT_URL,
          },
        },
        buttons: [
          {
            title: t('btnTitleOfKakaoTalk'),
            link: {
              webUrl: CURRENT_URL,
              mobileWebUrl: CURRENT_URL,
            },
          },
        ],
      });
    }

    if (type === 'gihub') push('https://github.com/katej927');
  };

  console.log('asPath', asPath, 't', t('descOfApp'));

  return (
    <footer css={S.Container}>
      <ul css={S.contentContainer}>
        {ICONS.map(({ icon, type }, idx) => (
          <li key={type}>
            <S.IconBtn type='button' onClick={onClickIconBtn} data-type={type} idx={idx}>
              {icon}
            </S.IconBtn>
          </li>
        ))}
      </ul>
      {/* <Link href={TWITTER_URL + '당롤동 ' + '&url=' + encodeURI(window.location.href)} passHref>
        <a>페북</a>
      </Link>
      <Link href={'https://github.com/katej927'} passHref>
        <a>test</a>
      </Link> */}
    </footer>
  );
};

export default Footer;
