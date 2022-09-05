import React from 'react';
import Word from '../../../../../../../../components/API/DictionaryAPI/Word';
import classes from './Variant.module.scss';

interface IVariant {
  variantData: Word;
}

const Variant = ({ variantData }: IVariant) => (
  <div id={variantData.id} className={`variant ${classes.variant}`}>
    {variantData.wordTranslate}
  </div>
);

export default Variant;
