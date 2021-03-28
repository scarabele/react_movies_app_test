import * as React from 'react';
import HomePage from './pages/home/home_page';
import MoviePage from './pages/movie/movie_page';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Movie" component={MoviePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
