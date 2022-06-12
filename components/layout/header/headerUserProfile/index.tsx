import Link from 'next/link';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useClickAway } from 'react-use';

import { useSelector } from 'store';
import { userActions } from 'store/user';
import { logoutAPI } from 'lib/api';

import { MenuIcon } from 'public/static/svg';
import * as S from './headerUserProfile.styles';

const HeaderUserProfile = () => {
  const [isUserMenuOpen, setIsUserMenuOPen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    if (isUserMenuOpen) setIsUserMenuOPen(false);
  });

  const profileImage = useSelector((state) => state.user.profileImage);
  const dispatch = useDispatch();

  const onClickUserProfileBtn = () => setIsUserMenuOPen(!isUserMenuOpen);

  const onClickLogout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div ref={ref} css={S.userProfileContainer}>
      <button type='button' css={S.userProfile} onClick={onClickUserProfileBtn}>
        <MenuIcon />
        <img src={profileImage} alt='profileImage' />
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
