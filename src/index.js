import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {PlayerInfoProvider} from './Components/PlayerInfo';

import{
  Conditions,
  DungeonMaster,
  Home,
  Player,
  Rules,
  Spells,
  SpellInfo

} from "./Components";

ReactDOM.render(
  <PlayerInfoProvider>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dungeonMaster" element={<DungeonMaster />} />
      <Route path="/player" element={<Player />} />
      <Route path="/rules" element={<Rules />}/>
      <Route path="/spells" element={<Spells />}/>
      <Route path="/conditions" element={<Conditions />}/>
      <Route path="/spellinfo" element={<SpellInfo/>}/>
    </Routes>
    <App />
  </Router>,
  </PlayerInfoProvider>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
