import React,{useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
 
import TypeOfAuth from '../../containers/Auth/TypeOfAuth';
import AccountAuth from '../../containers/Auth/AccountAuth';
import PhoneAuth from '../../containers/Auth/PhoneAuth';
import OtpAuth from '../../containers/Auth/OtpAuth';
import EmailAndSocialAuthScr from '../../containers/Auth/EmailAndSocialAuthScr';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import SplashScreen from 'react-native-splash-screen';

Feather.loadFont();
Ionicons.loadFont();

const HomeStackNav = () => {
  const Stack = createNativeStackNavigator();

  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  
  return (
     
    <Stack.Navigator>
       <Stack.Screen
        component={AccountAuth}
        name="AccountAuth"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={TypeOfAuth}
        name="TypeOfAuth"
        options={{headerShown: false}}
      />
     
      <Stack.Screen
        component={PhoneAuth}
        name="PhoneAuth"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={OtpAuth}
        name="OtpAuth"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={EmailAndSocialAuthScr}
        name="EmailAndSocialAuthScr"
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
    
  );
};
export default HomeStackNav;
