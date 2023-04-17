import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStack from '../AppStack';
import Status from '../../components/Status';
import AuthStack from '../AuthStack';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {fetchUserData} from '../../store/actions/user';
import Spinner from '../../components/Spinner';

Feather.loadFont();
Ionicons.loadFont();

const HomeStackNav = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(state => state.userReducer.user);
  const loading = useSelector(state => state.userReducer.loading);
  
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(fetchUserData(user.phoneNumber));
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {loading ? <Spinner /> : userLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default HomeStackNav;
