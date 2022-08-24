import Welcome from './Welcome/Welcome';
import Advantages from './Advantages/Advantages';
import Footer from '../../components/Footer/Footer';
import classes from './Main.module.scss';
import TeamSection from './Team/TeamSection';

const Main = (): JSX.Element => (
    <>
        <main>
            <Welcome />
            <Advantages />
            <TeamSection/>
        </main>
    </>
);

export default Main;
