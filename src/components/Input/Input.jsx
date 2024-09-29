import React from 'react';
import { FONTS } from '../../Helpers/fonts';
import './Input.css';
import { capitalizeText } from '../../Helpers/text';

export const Input = (props) => {

    const { name, placeholder, value, onChange, label} = props;

  return (
    <div className='box-input'>
        <label style={FONTS.ROBOTO_REGULAR}>{capitalizeText(label)}</label>
        <input className='style-input' type="text" placeholder={capitalizeText(placeholder)} name={name} onChange={onChange} value={value} />
    </div>
  )
}
