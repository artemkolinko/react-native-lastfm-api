import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Artist from '../screens/artist';
import Header from '../components/header';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
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
      name="Home"
      component={Home}
      style={{ backgroundColor: '#fff' }}
      options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title="Top 50" />,
        };
      }}
    />
    <Screen
      name="Artist"
      component={Artist}
      options={{
        title: 'Artist',
      }}
    />
  </Navigator>
);

export default HomeStack;
