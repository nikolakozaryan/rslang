import React from 'react';
import classes from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ loading, ...props }) => (
  <button {...props} className={`${classes.button} ${props.className}`}>
    {loading ? (
      <div className={classes.loaderContainer}>
        <div className={classes.threeQuartersLoader}> </div>
      </div>
    ) : (
      props.children
    )}
  </button>
);

export default Button;
