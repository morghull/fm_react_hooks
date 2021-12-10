import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { UserContext } from './contexts';
import { ThemeContext } from './contexts';
import NavMenu from './components/NavMenu';

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'Elon Musk',
  });
  const [theme, setTheme] = useState('light');

  const handlerClick = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <NavMenu />
            <button onClick={handlerClick}>switch theme</button>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
