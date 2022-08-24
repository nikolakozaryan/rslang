import React from 'react';
import classes from './Section.module.scss';
import ISection from './SectionInterface';

const Section = (props: ISection) => 
    <div className={classes.section}>
        <span className={classes.header}>{props.header}</span>
        <div className={classes.content}>{props.children}</div>;
    </div>

export default Section;