import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './artistPageButtons.module.scss';

import ButtonText from '../../ui-components/ButtonText/ButtonText';
import CardArrow from '../../assets/icons/CardArrow';

interface IArtistPageButtonsProps {
  theme?: 'light' | 'dark';
}

const ArtistPageButtons: React.FC<IArtistPageButtonsProps> = ({ theme }) => {
  const navigate = useNavigate();
  const [labelBack, setLabelBack] = useState('');

  const checkResize = () => {
    if (window.innerWidth > 392) {
      setLabelBack('Back');
    } else {
      setLabelBack('');
    }
  };

  useEffect(() => {
    checkResize();
    window.addEventListener('resize', checkResize);

    return () => {
      window.removeEventListener('resize', checkResize);
    };
  }, []);

  return (
    <div className={styles.artistPage_buttons}>
      <ButtonText
        label={labelBack}
        variant="icon"
        theme={theme}
        icon={<CardArrow />}
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default ArtistPageButtons;
