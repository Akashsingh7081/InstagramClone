import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthScreen from '../AuthStack';
import MainScreen from '../ScreenNavigation';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EditProfile from '../../components/EditProfile';
import FollowersList from '../../components/FollowersList';
import SearchBoxNavigator from '../../navigations/SearchBoxNavigator';
import ChatScreens from '../../components/ChatScreens';
import {ProfileBody} from '../../components/ProfileBody';
import FollowAndFollowersTabNav from '../FollowAndFollowersTabNav';
import SaveComp from '../../components/SaveComp';
import Status from '../../components/Status';
import PostItems from '../../components/PostItems';
import UploadPost from '../UploadPost';
import { useSelector } from 'react-redux';

Feather.loadFont();
Ionicons.loadFont();

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  // const name = useSelector
  const userName = useSelector(state => state.userReducer.user.userName);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={MainScreen}
        name="MainScreen"
        options={{headerShown: false}}
      />

      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Status" component={Status} />
      <Stack.Screen name="PostItems" component={PostItems} />
      <Stack.Screen name="FollowersList" component={FollowersList} />
      <Stack.Screen name="SearchBoxNavigator" component={SearchBoxNavigator} />
      <Stack.Screen name="ChatScreens" component={ChatScreens} />
      <Stack.Screen name="ProfileBody" component={ProfileBody} />
      <Stack.Screen name="UploadPost" component={UploadPost} />
      <Stack.Screen
        name="FollowAndFollowersTabNav"
        component={FollowAndFollowersTabNav}
        options={{headerShown: true, headerBackTitleVisible: false,title: userName}}
      />
      <Stack.Screen
        name="SaveComp"
        component={SaveComp}
      />
    </Stack.Navigator>
  );
};
export default AppStack;

