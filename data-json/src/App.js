import React from 'react';
import './App.css';
import PostData from './postdata'

const DATA = require('./data.json')


function App() {
  return (
    <div className="App">
        <PostData data={DATA}/>
    </div>
  );
}

export default App;
