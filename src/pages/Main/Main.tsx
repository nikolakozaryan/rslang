import Welcome from './Welcome/Welcome';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

const Main = (): JSX.Element => (
    <>
        <main>
            <Welcome />
        </main>
        <Footer className={classes.footer} />
    </>
);

export default Main;
