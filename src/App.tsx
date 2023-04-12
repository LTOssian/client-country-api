import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const queryClient = new QueryClient()

function App() {
  const [currentTheme, setCurrentTheme] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" data-theme={currentTheme}>
        <Header onClick={setCurrentTheme} currentTheme={currentTheme}/>
        <Main currentTheme={currentTheme}/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
