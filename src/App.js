import React from 'react';
import './App.css';
import Header from './heafooer/header'
// import HomeTop from './centerHome/hometop';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes/index';
import history from './services/history';

function App() {
  return (
   <div className = 'header'>
     <Header /><br/>
     <BrowserRouter history ={history}>
       <Routes />
     </BrowserRouter>
   </div>
  );
}

export default App;
