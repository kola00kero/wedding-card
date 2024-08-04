import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JsonData from "./data.json";

import Title from "./component/Title";
import Gretting from "./component/Gretting";
import Gallery from "./component/Gallery";
import Location from "./component/Location";
import CongratulatoryMoney from "./component/CongratulatoryMoney";

import Share from "./component/Share";


import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title data={JsonData} />
    <Gretting data={JsonData} />
    <Gallery />
    <Location />
    <CongratulatoryMoney data={JsonData} />
    <Share data={JsonData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
