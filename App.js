import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import HeroList from './src/screens/HeroList';
import HeroStats from './src/screens/HeroStats';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HeroList">
        <Stack.Screen name="HeroList" component={HeroList} />
        <Stack.Screen name="HeroStats" component={HeroStats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
