import React from 'react';
import Ministries from './Ministries';
import './ministries.css';
import Header from '../components/Header';

function Ministries_main() {
  return (
    <div className="App">
            <title>Ministries</title>
      <Header/>
      <Ministries />
    </div>
  );
}

export default Ministries_main;
