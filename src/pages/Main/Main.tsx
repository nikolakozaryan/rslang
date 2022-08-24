import Welcome from './Welcome/Welcome';
import Advantages from './Advantages/Advantages';
import Footer from '../../components/Footer/Footer';
import classes from './Main.module.scss';

const Main = (): JSX.Element => (
    <>
        <main>
            <Welcome />
            <Advantages />
        </main>
        <Footer className={classes.footer} />
    </>
);

export default Main;
