import './App.css';
import Profile from './components/profile';
import Activities from './components/activities';
import { useState } from 'react';

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState('weekly');

  return (
    <div className="App">
      <div className="flex flex-col w-full my-20 mx-6 gap-[1.875rem] md:flex-row md:w-auto md:m-0">
        <Profile activeTimeframe={activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
        <Activities activeTimeframe={activeTimeframe}/>
      </div>
    </div>
  );
}

export default App;
