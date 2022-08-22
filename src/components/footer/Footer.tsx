import React, { PropsWithChildren } from 'react';
import classes from './Footer.module.scss';

const Footer: React.FC<PropsWithChildren> = () => (
    <div className={classes.footer}>
        <div className={classes.linksContainer}>
            <a href="https://rs.school/" target="_blank" className={classes.logoRss}></a>
            <div className={classes.githubContainer}>
                <a href="https://github.com/" target="_blank" className={classes.iconGithub}></a>
                <a href="https://github.com/nikolakozaryan" target="_blank" className={classes.linkToDeveloper}>
                    Nikolay Kozyrev
                </a>
                <a href="https://github.com/OnlyR10" target="_blank" className={classes.linkToDeveloper}>
                    Yakov Grigorev
                </a>
                <a href="https://github.com/YaGrig" target="_blank" className={classes.linkToDeveloper}>
                    Kirill Naydovich
                </a>
            </div>
            <a href="https://rs.school/js/" target="_blank" className={classes.linkToRss}>
                Course «JavaScript/Front-end»
            </a>
        </div>
        <p className={classes.developmentDate}>© 2022 RSLang</p>
    </div>
);

export default Footer;
