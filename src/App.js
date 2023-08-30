import './App.scss';

import NavBar from './NavBar/navbar.component';
import Trial from './Trial/trial.component';
import TripCard from './TripCard/tripcard.component';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TripCard/>
      <Trial/>
      <div className='Footer'>
        Yuuuuu
      </div>
    </div>
  );
}

export default App;
