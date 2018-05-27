import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Greeting from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Greeting>
    <Hello>
      坂本龍馬
    </Hello>
    <Hello>
      宮本武蔵
    </Hello>
  </Greeting>,
document.getElementById('root'));
registerServiceWorker();
