import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../../containers/Main/screens/HomeScreen/index';
import SearchScreen from '../../containers/Main/screens/Search/index';
import ProfileScreen from '../../containers/Main/screens/Profile/index';
import ReelsScreen from '../../containers/Main/screens/Reels/index';
import ActivityScreen from '../../containers/Main/screens/Activity/index';
import Ionic from 'react-native-vector-icons/Ionicons';
import HomeStackNave from '../HomeStackNav';

Ionic.loadFont();
 
const Screens = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
           height: 68,
          paddingTop: 1,
        },

        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            size = focused ? size + 8 : size + 2;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'ios-search-outline';
          } else if (route.name === 'Reels') {
            iconName = focused
              ? 'caret-forward-circle'
              : 'caret-forward-circle-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
          }

          return <Ionic name={iconName} size={size} color={colour} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNave} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Screens;
