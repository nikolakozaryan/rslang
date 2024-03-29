import { PropsWithChildren, FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import classes from '../Footer/Footer.module.scss';

type RouteComponentProps = PropsWithChildren<{
  navigationHide?: boolean;
}>;

const RouteComponent: FC<RouteComponentProps> = (props) => (
  <>
    <Header navigationHide={props.navigationHide} />
    {props.children}
    <Footer className={classes.footer} />
  </>
);

export default RouteComponent;
