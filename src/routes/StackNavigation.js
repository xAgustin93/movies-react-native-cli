import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import usePreferences from '../hooks/usePreferences';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import Popular from '../screens/Popular';
import News from '../screens/News';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;
  const {theme} = usePreferences();

  const buttonMenu = (screen) => {
    switch (screen) {
      case 'movie':
        return (
          <IconButton
            icon="arrow-left"
            color={theme === 'dark' ? '#fff' : '#000'}
            onPress={() => navigation.goBack()}
          />
        );

      default:
        return (
          <IconButton
            icon="menu"
            color={theme === 'dark' ? '#fff' : '#000'}
            onPress={() => navigation.toggleDrawer()}
          />
        );
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homee"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => buttonMenu(),
        }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{
          headerLeft: () => buttonMenu('movie'),
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{
          title: 'Películas Populares',
          headerLeft: () => buttonMenu(),
        }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{
          title: 'Nuevas Películas',
          headerLeft: () => buttonMenu(),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: 'Buscador de Películas',
          headerLeft: () => buttonMenu(),
        }}
      />
    </Stack.Navigator>
  );
}
