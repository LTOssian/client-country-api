import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [currentTheme, setCurrentTheme] = useState('');

  return (
    <div className="App" data-theme={currentTheme}>
      <Header onClick={setCurrentTheme} currentTheme={currentTheme}/>
      <Main />
    </div>
  );
}

export default App;
