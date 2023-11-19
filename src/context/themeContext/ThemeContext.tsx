import React, {createContext, useEffect, useReducer} from 'react';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './ThemeReducer';
import {AppState, Appearance, useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
    // (Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme
  ); //TODO: leer el tema global

  useEffect(() => {
    if (colorScheme === 'light') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }, [colorScheme]);

  // if doesn't work on android

  // useEffect(() => {
  //   AppState.addEventListener('change', status => {
  //     if (status === 'active') {
  //       Appearance.getColorScheme() === 'light'
  //         ? setLightTheme()
  //         : setDarkTheme();
  //     }
  //   });
  // }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarktheme');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
