import React, { useEffect, useState } from 'react';
import './Popup.css';
import { dummyRaceData } from '../dummyData/dummyRaceData';
import Circuit from './components/circuit/Circuit';

const Popup = () => {
  const [raceData, setRaceData] = useState({});
  useEffect(()=>{
    setRaceData(dummyRaceData)
    if(dummyRaceData?.response[0]?.fastest_lap?.driver?.id)
    {

    }
  },[])
  return (
    <div className="App">
      <div className="flex-container">
        <img
          src="https://logos-world.net/wp-content/uploads/2023/12/F1-Logo.png"
          alt="f1-logo"
          width={'60px'}
        />
        <h1 style={{ marginLeft: '5px' }}>Next Race</h1>
      </div>
      <hr></hr>
      <Circuit raceData={dummyRaceData?.response[0]} />
    </div>
  );
};

export default Popup;
