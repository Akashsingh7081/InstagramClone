import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Box, Text,Pressable,HStack} from 'native-base';
import HomeScreen from '../../containers/Main/screens/HomeScreen/index';
import Chat from '../../components/MessagesScreen';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

Feather.loadFont();
Ionicons.loadFont();

const HomeStackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Chat}
        name="Chat"
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "black",
          headerRight: () => (
            <HStack
            justifyContent="space-between">
             
                <Pressable pt={1}>
                  <Feather name="video" size= {24}></Feather>
                </Pressable>
              
              <Pressable pl="25"  >
                  <Ionicons name="ios-add-sharp" size={30}></Ionicons>
                </Pressable>
              
            </HStack>
          ),
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
        
      />
    </Stack.Navigator>
  );
};
export default HomeStackNav;
