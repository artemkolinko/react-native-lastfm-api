import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import SearchStack from './searchStack';

const { Navigator, Screen } = createDrawerNavigator();

//  initialRouteName="Home"
const AppNavigator = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Top 50" component={HomeStack} />
      <Screen name="Search track" component={SearchStack} />
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
