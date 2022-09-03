import Welcome from './Welcome/Welcome';
import Advantages from './Advantages/Advantages';
import TeamSection from './Team/TeamSection';
import Audio from '../Games/Audio/Audio';

const Main = (): JSX.Element => (
  <main>
    <Welcome />
    <Advantages />
    <TeamSection />
    <Audio />
  </main>
);

export default Main;
