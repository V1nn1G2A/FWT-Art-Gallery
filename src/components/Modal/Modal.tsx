import React, { useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import styles from './modal.module.scss';

import Authorization from '../Authorization/Authorization';
import Registration from '../Registration/Registration';

import useOutsideClick from '../../hooks/useOutsideClick';
import useNoScroll from '../../hooks/useNoScroll';

interface ModalProps {
  theme?: 'light' | 'dark';
}

const Modal: React.FC<ModalProps> = ({ theme }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const navigate = useNavigate();
  const ref = useOutsideClick(() => setModalIsOpen(false));
  useNoScroll(modalIsOpen);

  return (
    <div
      className={`${styles.modal} ${styles[`modal--${theme}`]} ${modalIsOpen ? '' : styles['modal--reverse']}`}
      onAnimationEnd={() => !modalIsOpen && navigate(-1)}
    >
      <div
        ref={ref}
        className={`${styles.modal_content} ${styles[`modal_content--${theme}`]}`}
      >
        <Routes>
          <Route
            path="/login"
            element={
              <Authorization
                theme={theme}
                onClose={() => setModalIsOpen(false)}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Registration
                theme={theme}
                onClose={() => setModalIsOpen(false)}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Modal;
