import { FC, PropsWithChildren } from 'react';
import classes from './Entrance.module.scss';
import RouteComponent from '../../components/RouteComponent/RouteComponent';

const Entrance: FC<PropsWithChildren> = ({ children }) => (
  <RouteComponent navigationHide={true}>
    <div className={classes.container}>
      <div className={classes.illustration}></div>
      {children}
    </div>
  </RouteComponent>
);

export default Entrance;
