import './App.scss';
import Footer from './Footer/footer.component';

import NavBar from './NavBar/navbar.component';
import Trial from './Trial/trial.component';
import TripCard from './TripCard/tripcard.component';
import TextZone from './textzone/textzone.component';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TripCard/>
      <Trial/>
      <TextZone/>
      <Footer/>
    </div>
  );
}

export default App;
