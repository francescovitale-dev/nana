// SubHeading.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '../../constants';

const SubHeading = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: '1rem'}}>
      <p className='p__cormorant'>{t(title)}</p>
      <img src={images.spoon} alt="spoon__image" className='spoon__img' />
    </div>
  );
};

export default SubHeading;
