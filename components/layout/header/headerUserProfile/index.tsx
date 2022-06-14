import Link from 'next/link';
import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { signOut } from 'next-auth/react';

import * as S from './headerUserProfile.styles';

const HeaderUserProfile = () => {
  const [isUserMenuOpen, setIsUserMenuOPen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    if (isUserMenuOpen) setIsUserMenuOPen(false);
  });

  const onClickUserProfileBtn = () => setIsUserMenuOPen(!isUserMenuOpen);

  const onClickLogout = () => signOut();

  return (
    <div ref={ref} css={S.userProfileContainer}>
      <button type='button' css={S.userProfile} onClick={onClickUserProfileBtn}>
        메뉴
      </button>
      {isUserMenuOpen && (
        <ul css={S.userMenuBtnContainer}>
          <Link href={`/summoners/${'사탕새'}`}>
            <a role='presentation' onClick={onClickUserProfileBtn}>
              <li>내 기록 보기</li>
            </a>
          </Link>
          <li role='presentation' onClick={onClickLogout}>
            로그아웃
          </li>
        </ul>
      )}
    </div>
  );
};
export default HeaderUserProfile;
