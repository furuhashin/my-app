import React, { Component } from 'react';
import './App.css';

const Greeting = (props) => {
  return (
    <div>
      <div>ご挨拶</div>
      {props.children};
    </div>
  );
};
export default Greeting;
