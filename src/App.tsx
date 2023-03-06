import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Text} from "./Text";
import {CounterScnd} from "./CounterScnd";

function App() {
  return (
    <div className="App">
        <Counter />
        <Text />
        <CounterScnd />
    </div>
  );
}

export default App;
