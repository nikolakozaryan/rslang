import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import classes from './Button.module.scss';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  loading?: boolean;
};

const Button: FC<ButtonProps> = ({ loading, ...props }) => (
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
