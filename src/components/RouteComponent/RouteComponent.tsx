import React, { PropsWithChildren } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import classes from '../Footer/Footer.module.scss';

const RouteComponent: React.FC<PropsWithChildren> = (props) => (
    <>
        <Header />
        {props.children}
        <Footer className={classes.footer} />
    </>
);

export default RouteComponent;
