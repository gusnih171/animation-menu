import React from 'react';
import './App.css';
import Scroll from './Scroll.jsx';
import Arrow from './Arrow.jsx';
import Trademark from './Trademark.jsx';
import Burger from './Burger.jsx';
const App = () => {
  return (
    <div>
      <Scroll/>
      <Burger />
      <Arrow/>
      <Trademark/>
      </div>
  );
};

export default App;
