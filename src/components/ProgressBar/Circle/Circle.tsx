import React from 'react';
import classes from './Circle.module.scss';
import ICircle from './Interface';

const Circle = ({ color, isProgress }: ICircle) => (
  <circle
    className={isProgress ? `progress ${classes.circle}` : ''}
    stroke={color}
    cx="103"
    cy="103"
    strokeWidth="20"
    r="93"
    fill="transparent"
  />
);

export default Circle;
