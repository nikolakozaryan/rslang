import React, { PropsWithChildren } from 'react';
import classes from './Footer.module.scss';
import Link from './Link/Link';

type FooterProps = PropsWithChildren<{
    className: string;
}>;

const DEVELOPERS = [
    {
        name: 'Nikolay Kozyrev',
        gitHub: 'https://github.com/nikolakozaryan',
    },
    {
        name: 'Yakov Grigorev',
        gitHub: 'https://github.com/YaGrig',
    },
    {
        name: 'Kirill Naydovich',
        gitHub: 'https://github.com/OnlyR10',
    },
];

const Footer: React.FC<FooterProps> = ({ className }) => (
    <div className={`${classes.footer} ${className}`}>
        <div className={classes.linksContainer}>
            <a href="https://rs.school/" target="_blank" className={classes.logoRss}></a>
            <div className={classes.githubContainer}>
                <a href="https://github.com/" target="_blank" className={classes.iconGithub}></a>
                {DEVELOPERS.map((developer) => (
                    <Link developer={developer} key={developer.gitHub}></Link>
                ))}
            </div>
            <a href="https://rs.school/js/" target="_blank" className={classes.linkToRss}>
                Course «JavaScript/Front-end»
            </a>
        </div>
        <p className={classes.developmentDate}>© 2022 RSLang</p>
    </div>
);

export default Footer;
