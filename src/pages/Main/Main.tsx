import Welcome from './Welcome/Welcome';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import classes from './Main.module.scss';

const Main = (): JSX.Element => (
    <>
        <main>
            <Welcome />
        </main>
        <Footer className={classes.footer} />
    </>
);

export default Main;
