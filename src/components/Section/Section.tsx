import React from 'react';
import classes from './Section.module.scss';
import ISection from './SectionInterface';

const Section = (props: ISection) => 
    <div className={classes.section}>
        <h2 className={classes.header}>{props.header}</h2>
        <div className={classes.content}>{props.children}</div>;
    </div>

export default Section;