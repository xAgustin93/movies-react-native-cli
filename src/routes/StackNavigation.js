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

  const buttonLeft = (screen) => {
    switch (screen) {
      case 'movie':
      case 'search':
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

  const buttonRight = () => {
    return (
      <IconButton
        icon="magnify"
        color={theme === 'dark' ? '#fff' : '#000'}
        onPress={() => navigation.navigate('search')}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homee"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{
          title: '',
          headerTransparent: true,
          headerLeft: () => buttonLeft('movie'),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{
          title: 'Películas Populares',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{
          title: 'Nuevas Películas',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          title: '',
          headerTransparent: true,
          headerLeft: () => buttonLeft('search'),
          headerRight: () => buttonRight(),
        }}
      />
    </Stack.Navigator>
  );
}
