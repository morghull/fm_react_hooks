import {createContext} from 'react';
import {ThemeContext} from './ThemeContext';
import {LandContext} from './LandContext';
import {UserContext} from './UserContext';

export const ThemeContext = createContext();
export const LandContext = createContext();
export const UserContext = createContext();


export {default as ThemeContext} from './ThemeContext';
export {default as LandContext} from './LandContext';
export {default as UserContext} from './UserContext';