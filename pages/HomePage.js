import React, { useState, useContext, useCallback } from 'react';
import UserProfile from '../components/UserProfile/UserProfile';
import {ThemeContext} from '../contexts'
import CONSTANTS from './constants';
const { THEMES } = CONSTANTS;

const HomePage = () => {
  const [value, setValue] = useState(0);
  const [theme, themeState] = useContext(ThemeContext);

  const handlerTheme = useCallback(() => {
    themeState(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, [theme]);

  const handlerInput = useCallback(({ target: { value } }) => {
    setValue(Number(value));
  }, []);

  const handlerLog = useCallback(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <h2>Home Page</h2>
      <h3>Value: {value}</h3>
      <input type="number" value={value} onChange={handlerInput}></input>
      <button onClick={handlerTheme}>switch theme</button>
      <button onClick={handlerLog}>log value</button>
      <UserProfile />
    </div>
  );
};

export default HomePage;
