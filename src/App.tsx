import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CountryDetails from './components/CountryDetails/CountryDetails';

const queryClient = new QueryClient();

function App() {
  const persistentTheme = localStorage.getItem('PERSISTENT_THEME') as string;
  const [currentTheme, setCurrentTheme] = useState(persistentTheme);
  const [cardPage, setCardPage] = useState<null | object>(null);

  useEffect(() => {
    localStorage.setItem("PERSISTENT_THEME", currentTheme);
  }, [currentTheme])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" data-theme={currentTheme}>
        <Header onClick={setCurrentTheme} currentTheme={currentTheme}/>
        {
          Object.keys(cardPage || {}).length
            ? <Main currentTheme={currentTheme} setCardPage={setCardPage}/> 
            : <CountryDetails currentTheme={currentTheme} setCardPage={setCardPage}/>
        }
      </div>
    </QueryClientProvider>
  );
}

export default App;
