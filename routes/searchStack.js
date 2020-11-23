import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screens/search';
import Header from '../components/header';

const { Navigator, Screen } = createStackNavigator();

const searchStack = () => (
  <Navigator
    headerMode="float" // other options: "float", "screen", "none"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#eee',
        height: 80,
      },
      headerTintColor: '#333',
    }}
  >
    <Screen
      name="Search"
      component={Search}
      options={({ navigation }) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="Search track" />
          ),
        };
      }}
    />
  </Navigator>
);

export default searchStack;
