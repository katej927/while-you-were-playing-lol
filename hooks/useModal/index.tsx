import { useRef, useEffect, useState, ReactNode, useCallback } from 'react';
import { createPortal } from 'react-dom';

import * as S from './useModal.styles';

const useModal = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => setModalOpened(true);

  const closeModal = () => {
    setModalOpened(false);
  };

  interface IProps {
    children: ReactNode;
  }

  const ModalPortal = useCallback(
    ({ children }: IProps) => {
      const ref = useRef<Element | null>();
      const [mounted, SetMounted] = useState(false);

      useEffect(() => {
        SetMounted(true);
        if (document) {
          const dom = document.querySelector('#root-modal');
          ref.current = dom;
        }
      }, []);

      if (ref.current && mounted && modalOpened) {
        return createPortal(
          <div css={S.wrapper}>
            <div css={S.background} role='presentation' onClick={closeModal} />
            {children}
          </div>,
          ref.current
        );
      }

      return null;
    },
    [modalOpened]
  );

  return { openModal, closeModal, ModalPortal };
};

export default useModal;
