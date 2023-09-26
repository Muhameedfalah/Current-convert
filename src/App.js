import React from "react";
import "./App.css";
import { DataController } from "./components/DataController";
import Lottie from 'react-lottie'; // יש לוודא שהוא מותקן בפרוייקט

import animationData from './images/animation_lmhtrmpt.json'; 

const API_ACCESS_KEY = "196a4349a2b94c1d4af24a8de1e5ec44";
export const API_URL = `https://manage.exchangeratesapi.io/dashboard?access_key=${API_ACCESS_KEY}`;

function App() {
  return (
    <div className="app">
      <div className="content-container">
        <DataController url={API_URL} />
      </div>
      <div className="lottie-container">
        <Lottie options={{ animationData }} width={500} height={500} />
      </div>
    </div>
  );
}

export default App;
