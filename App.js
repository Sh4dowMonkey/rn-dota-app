import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';

import HeroList from './src/screens/HeroList';
import HeroStats from './src/screens/HeroStats';
import colors from './src/config/colors';

const headerOptions = {
  headerStyle: {
    backgroundColor: colors.headerBackground,
  },
  headerTintColor: colors.text,
};

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HeroList">
        <Stack.Screen
          name="HeroList"
          component={HeroList}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="HeroStats"
          component={HeroStats}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
