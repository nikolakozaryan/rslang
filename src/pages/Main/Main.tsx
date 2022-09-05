import Welcome from './Welcome/Welcome';
import Advantages from './Advantages/Advantages';
import TeamSection from './Team/TeamSection';
import classes from './Main.module.scss';

const Main = (): JSX.Element => (
  <main className={classes.main}>
    <Welcome />
    <Advantages />
    <TeamSection />
  </main>
);

export default Main;
