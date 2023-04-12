import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [currentTheme, setCurrentTheme] = useState('');

  const updateTheme = () => {
    currentTheme ? setCurrentTheme('') : setCurrentTheme('dark')

  }
  return (
    <div className="App" data-theme={currentTheme}>
      <Header handleTheme={updateTheme} currentTheme={currentTheme}/>
    </div>
  );
}

export default App;
