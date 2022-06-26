import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { useSelector } from 'store';

import { ArrowDownIcon } from 'public/static/svg';
import * as S from './headerUserProfile.styles';

const HeaderUserProfile = () => {
  const [isUserMenuOpen, setIsUserMenuOPen] = useState(false);

  const router = useRouter();
  const { abbreviation: region } = useSelector((state) => state.common.region);

  const ref = useRef(null);
  useClickAway(ref, () => {
    if (isUserMenuOpen) setIsUserMenuOPen(false);
  });

  const { data } = useSession();

  const onClickUserProfileBtn = () => setIsUserMenuOPen(!isUserMenuOpen);

  const onClickSearchMyRecord = () => {
    router.push({ pathname: `/summoners/${data?.user?.name}`, query: { region } });
    setIsUserMenuOPen(!isUserMenuOpen);
  };

  const onClickLogout = () => signOut();

  return (
    <div ref={ref} css={S.userProfileContainer}>
      <button type='button' css={S.userProfile} onClick={onClickUserProfileBtn}>
        {`${data?.user?.name} 님`}
        <ArrowDownIcon />
      </button>
      {isUserMenuOpen && (
        <ul css={S.userMenuBtnContainer}>
          <li>
            <button type='button' onClick={onClickSearchMyRecord}>
              내 기록 보기
            </button>
          </li>
          <li>
            <button type='button' onClick={onClickLogout}>
              로그아웃
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
export default HeaderUserProfile;
