import React, { useState, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomePage from './HomePage';
import { UserContext, ThemeContext, AppContext } from './context';
import NavMenu from './components/NavMenu';
import CONSTANTS from '/constants';
import reducer from './appReducer';
const { THEMES, ACTIONS } = CONSTANTS;

function App() {
  const [user, setUser] = useState({
    id: 1,
    name: 'Elon Musk',
  });
  const [theme, setTheme] = useState('light');

  const handlerClick = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const openMenu = () => dispatch({ type: ACTIONS.MENU_OPEN });

  const closeMenu = () => dispatch({ type: ACTIONS.MENU_CLOSE });

  return (
    <>
      <AppContext.Provider value={{ state, closeMenu }}>
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={user}>
            <BrowserRouter>
              <MenuOpenIcon onClick={openMenu} />
              <NavMenu />
              <button onClick={handlerClick}>switch theme</button>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </AppContext.Provider>
    </>
  );
}
