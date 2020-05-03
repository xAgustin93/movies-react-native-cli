import React, {useState, useMemo} from 'react';
import {StatusBar, YellowBox} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as DarkThemePaper,
  DefaultTheme as DefaultThemePaper,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import Navigation from './src/routes/Navigation';
import PreferencesContext from './src/context/PreferencesContext';

YellowBox.ignoreWarnings(['Calling `getNode()`']);

export default function App() {
  const [theme, setTheme] = useState('dark');

  DarkTheme.colors.background = '#192734';
  DarkTheme.colors.card = '#15212b';

  DarkThemePaper.colors.primary = '#1ea1f2';
  DefaultThemePaper.colors.primary = '#1ea1f2';
  DarkThemePaper.colors.accent = '#1ea1f2';

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const preferences = useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={theme === 'dark' ? DarkThemePaper : DefaultThemePaper}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer
          theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
