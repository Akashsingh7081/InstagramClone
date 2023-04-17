import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Box, Text, Pressable, HStack} from 'native-base';
import CreateActionSheet from '../../navigations/ProfileNavigation';
import MenuActionSheet from '../../navigations/ProfileMenuNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';
import ProfileNameNavigation from '../../navigations/ProfileNameNavigation';
import FollowAndFollowersTabNav from '../../navigations/FollowAndFollowersTabNav';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export const ProfileBody = ({
  post,
  followers,
  following,
}) => {
  const navigation = useNavigation();

  const userData = useSelector(state => state.userReducer.user);
  const Current = useSelector(state => state.userReducer.user.UploadedPostKey.length);

  return (
    <>
      <Box>
     
          <Box>
            <StatusBar
              backgroundColor="White"
              barStyle="dark-content"
              animated={true}></StatusBar>
            <HStack justifyContent="space-between" px={1} alignItems="center">
              <ProfileNameNavigation 
               userAccountName={userData.userProfile}
              />
              <HStack alignItems="center" justifyContent="space-between">
                <CreateActionSheet />

                <MenuActionSheet />
              </HStack>
            </HStack>
          </Box>
       
        <HStack alignItems="center" justifyContent="space-around" >
          <Box alignItems="center" mt={6}>
          
            <FastImage  
              source={{uri: userData.img}}
              style={{
                resizeMode: 'cover',
                width: 70,
                height: 70,
                borderRadius: 100,
              }}
              alt="Profile"
            />
            <Text py={2} fontWeight="bold">
              {userData.userName}
            </Text>
          </Box>
          <Box alignItems="center">
            <Text fontWeight="bold" fontSize="18">
              {Current}
            </Text>
            <Text>Posts</Text>
          </Box>
          <Pressable
            onPress={() => navigation.navigate('FollowAndFollowersTabNav')}>
            <Box alignItems="center">
              <Text fontWeight="bold" fontSize="18">
                {followers}
              </Text>
              <Text>Followers</Text>
            </Box>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('FollowAndFollowersTabNav')}>
            <Box alignItems="center">
              <Text fontWeight="bold" fontSize="18">
                {following}
              </Text>
              <Text>Following</Text>
            </Box>
          </Pressable>
        </HStack>
      </Box>
      
    </>
  );
};

export const ProfileButtons = ({id, name, accountName, profileImage}) => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(follow);
  return (
    <>
      {id === 0 ? (
        <HStack
          width="100%"
          alignItems="center"
          py={2}
          px={3}>
          <Pressable
            onPress={() =>
              navigation.navigate('EditProfile', {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            width="85%">
            <Box
              backgroundColor="#f1f5f9"
              width="100%"
              height="35"
              borderRadius={10}
              borderColor="#DEDEDE"
              borderWidth={1}
              justifyContent="center"
              alignItems="center">
              <Text
                fontWeight="bold"
                fontSize="14"
                letterSpacing={1}
                opacity={0.8}>
                Edit profile
              </Text>
            </Box>
          </Pressable>
          <Pressable width="40%">
            <Box
              backgroundColor="#f1f5f9"
              width="30%"
              height="35"
              borderRadius={10}
              borderColor="#DEDEDE"
              borderWidth={1}
              justifyContent="center"
              alignItems="center"
              ml={3}>
              <MaterialCommunityIcons name="account-plus-outline" size={20} />
            </Box>
          </Pressable>
        </HStack>
      ) : (
        <HStack width="100%" justifyContent="space-evenly" alignItems="center">
          <Pressable onPress={() => setFollow(!follow)} width="42%">
            <Box
              width="100%"
              height={35}
              borderRadius={10}
              backgroundColor={follow ? null : '#3493D9'}
              borderWidth={follow ? 1 : 0}
              borderColor="#DEDEDE"
              justifyContent="center"
              alignItems="center">
              <Text color={follow ? 'black' : 'white'}>
                {follow ? 'Following' : 'Follow'}
              </Text>
            </Box>
          </Pressable>
          <Box
            width="42%"
            height={35}
            borderWidth={1}
            borderColor="#DEDEDE"
            justifyContent="center"
            alignItems="center"
            borderRadius={10}>
            <Text>Message</Text>
          </Box>
          <Box
            width="10%"
            height={35}
            borderWidth={1}
            borderColor="#DEDEDE"
            justifyContent="center"
            alignItems="center"
            borderRadius={10}>
            <Feather name="chevron-down" size={20} color="black" />
          </Box>
        </HStack>
      )}
    </>
  );
};
