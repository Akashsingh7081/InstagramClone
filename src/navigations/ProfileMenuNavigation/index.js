import React from 'react';
import {Box, Actionsheet, useDisclose, Icon, Pressable,Text} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserData,signout} from '../../store/actions/user';
import Share from 'react-native-share';

FontAwesome.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();
Feather.loadFont();

function MenuActionSheet() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
    
 

  const Logout= async ()=>{
      return auth().signOut().then(()=> dispatch(signout()));
  }

  const {isOpen, onOpen, onClose} = useDisclose();

 const referFriend=async ()=>{
  
    const shareOptions ={
      message: "Test"
    } 
    try{
      onClose()
      await Share.open(shareOptions)
    
    }catch(e){
      console.log("error",e);
    }
 
 }



  return (
    <>
      <Pressable onPress={onOpen}>
        <Feather name="menu" size={25}></Feather>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<Feather name="settings" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                size={6}
              />
            }>
            Settings
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="circle-slice-5" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
            Archive
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="circle-slice-4" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
            Your Activity
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="qrcode-scan" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
            QR code
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
                <Icon
                  as={<MaterialIcons name="bookmark-border" />}
                  color="muted.500"
                  fontWeight="bold"
                  size={6}
                />
            
            }>
              <Pressable onPress={()=>navigation.navigate('SaveComp')}>
                <Text>
                   Saved
                </Text>
               
              </Pressable>
            
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="hexagon-slice-1" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
            Digital collections
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="menu-open" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
           <Pressable onPress={referFriend}>
                <Text>
                  Share
                </Text>
               
              </Pressable>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<Feather name="star" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
            Favourites
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialIcons name="logout" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
               <Pressable onPress={Logout}>
                <Text>
                Logout
                </Text>
               
              </Pressable>
            
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default MenuActionSheet;
