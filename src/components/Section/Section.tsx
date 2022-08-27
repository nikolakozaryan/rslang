import React from 'react';
import classes from './Section.module.scss';
import ISection from './SectionInterface';

const Section = (props: ISection) => (
    <div className={classes.section}>
        <h2 className={classes.header}>
            {props.header} {props.advantages && <span style={{ color: '#FFA733' }}>RSlang</span>}
        </h2>
        <div className={classes.content}>{props.children}</div>
    </div>
);

export default Section;
