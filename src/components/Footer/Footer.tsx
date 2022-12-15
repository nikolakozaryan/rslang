import React, { PropsWithChildren } from 'react';
import classes from './Footer.module.scss';
import DEVELOPERS from '../../common/constants/developersConst';
import Link from './Link/Link';

type FooterProps = PropsWithChildren<{
  className: string;
}>;

const Footer: React.FC<FooterProps> = ({ className }) => (
  <div className={`${classes.footer} ${className}`}>
    <div className={classes.wrapper}>
      <div className={classes.linksContainer}>
        <a href="https://rs.school/" target="_blank" className={classes.logoRss}></a>
        <div className={classes.githubContainer}>
          <a href="https://github.com/" target="_blank" className={classes.iconGithub}></a>
          {DEVELOPERS.map((developer) => (
            <Link {...developer} key={developer.gitHub} />
          ))}
        </div>
        <a href="https://rs.school/js/" target="_blank" className={classes.linkToRss}>
          Курс «JavaScript/Front-end»
        </a>
      </div>
      <p className={classes.developmentDate}>© 2022 RSLang</p>
    </div>
  </div>
);

export default Footer;
