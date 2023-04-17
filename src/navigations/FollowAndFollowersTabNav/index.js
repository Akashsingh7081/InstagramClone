import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Followers from '../../containers/Main/screens/Followers';
import Following from '../../containers/Main/screens/Following';
import {Box, Text, SafeAreaProvider} from 'native-base';
import Search from '../../components/SearchInput';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function TabNavigationFun() {
  return (
    <Tab.Navigator
      style={{backgroundColor: '#FFFFFF',}}
      tabBarOptions={{
        inactiveTintColor: 'grey',
        labelStyle: {fontWeight: 'bold'},
        Headers: true
      }}>
      <Tab.Screen name="Followers" component={Followers} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
}

function FollowAndFollowersTabNav() {
  return (
    <TabNavigationFun />
  );
}
export default FollowAndFollowersTabNav;
