import { useState, FormEvent } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { useSelector } from 'store';
import { useModal } from 'hooks';

import { SearchIcon, ArrowDownIcon } from 'public/static/svg';
import * as S from './searchSection.styles';

const DynamicRegionModal = dynamic(() => import('../regionModal'), { ssr: false });

const SearchSection = () => {
  const [name, setName] = useState<string>('');

  const {
    region: { abbreviation: region },
    scrollPosition,
  } = useSelector((state) => state.common);
  const { push } = useRouter();
  let { t } = useTranslation('home');
  const { openModal, closeModal, ModalPortal } = useModal();

  const onChange = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setName(value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!name) return;
      push({ pathname: `/summoners/${name}`, query: { region } });
    } catch (e) {
      console.log(e);
    }
  };

  const onClickRegionBtn = () => openModal();

  return (
    <section>
      <div css={S.divisionTextContainer}>
        <S.DivisionText isOpacityOn={scrollPosition >= 130}>{t('searchSection.division')}</S.DivisionText>
      </div>
      <S.DivisionFigure isOpacityOn={scrollPosition >= 200}>
        <div css={S.divisionLine} />
        <div css={S.divisionCircle}>
          <ArrowDownIcon />
        </div>
      </S.DivisionFigure>
      <S.SectionTitle isOpacityOn={scrollPosition >= 242}>{t('searchSection.sectionTitle')}</S.SectionTitle>
      <S.Title isOpacityOn={scrollPosition >= 365}>
        <span>{t('searchSection.title.1')}</span>
        <strong>{t('searchSection.title.2')}</strong>
      </S.Title>
      <S.Desc isOpacityOn={scrollPosition >= 475}>
        {t('searchSection.desc.1')} <br />
        {t('searchSection.desc.2')}
      </S.Desc>
      <S.Form onSubmit={onSubmit} isOpacityOn={scrollPosition >= 600}>
        <button type='button' css={S.regionBtnContainer} onClick={onClickRegionBtn}>
          <small>Region</small>
          <span>{region}</span>
          <ArrowDownIcon css={S.arrowDownIcon} />
        </button>
        <div css={S.searchWrapper}>
          <label css={S.searchLabel} htmlFor='searchSummoner'>
            Search
          </label>
          <input
            id='searchSummoner'
            css={S.searchInput}
            placeholder={t('searchSection.placeholder')}
            value={name}
            onChange={onChange}
          />
          <button type='submit' aria-label='search-submit-button'>
            <SearchIcon css={S.searchIcon} />
          </button>
        </div>
      </S.Form>
      <ModalPortal>
        <DynamicRegionModal closeModal={closeModal} />
      </ModalPortal>
    </section>
  );
};

export default SearchSection;
