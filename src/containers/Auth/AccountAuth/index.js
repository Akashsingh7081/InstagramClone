import React, {useState,useEffect} from 'react';
import {Box, HStack, Text, VStack, Pressable, Image, Divider} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {followersList} from '../../../config/fakeData';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

// Ionicons.loadFont();
// AntDesign.loadFont();
// MaterialCommunityIcons.loadFont();



const Auth1 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Box safeAreaTop>
      <Box alignItems="center" justifyContent="space-between" mt="5">
        <Text fontSize="45" fontWeight="bold" fontStyle="italic">
          Instagram
        </Text>
      </Box>

      <Box m={3}>
        {followersList.slice(8, 10).map((data, index) => {
          return (
            <Box key={index} pt={2}>
              <HStack py="1" width="100%" justifyContent="space-between">
                <Box>
                  <Pressable
                    onPress={() => navigation.push('TypeOfAuth')}
                    flexDirection="row"
                    alignItems="center"
                    maxWidth="80%">
                    <Image
                      alt="profileImage"
                      //   source={data.profileImage}
                      width={10}
                      height={10}
                      borderRadius="100"
                      mr="2"
                      backgroundColor="gray.200"
                    />
                    <Box width="100%">
                      <Text fontSize="14" fontWeight="bold">
                        {data.accountName}
                      </Text>
                    </Box>
                  </Pressable>
                </Box>
                <HStack alignItems="center" pr="2">
                  <Box
                    h="28"
                    borderRadius="5"
                    backgroundColor="gray.200"
                    borderWidth="1"
                    borderColor="#DEDEDE"
                    justifyContent="center"
                    alignItems="center"
                    mr={1}
                    w="60">
                    <Text color="black">Log in</Text>
                  </Box>

                  <Pressable>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={20}
                      color="black"
                      opacity={0.8}
                    />
                  </Pressable>
                </HStack>
              </HStack>
            </Box>
          );
        })}


        <HStack alignItems="center" textAlign="center" h="100%" >
        <Pressable w="50%" onPress={() => navigation.push('EmailAndSocialAuthScr')}>
          <Box borderRightWidth="2" borderColor="#DEDEDE" alignItems="center" h="60"borderTopWidth="2" justifyContent="center">
            <Text color="blue.400" fontWeight="bold">Switch Accounts</Text>
          </Box>
          </Pressable>
          <Pressable w="50%" onPress={() => navigation.push('TypeOfAuth')}>
          <Box borderColor="#DEDEDE" alignItems="center" h="60" textAlign="center" borderTopWidth="2" justifyContent="center">
            <Text color="blue.400" fontWeight="bold" textAlign="center" >Sign up</Text>
          </Box>
          </Pressable>
          
        </HStack>
      </Box>
    </Box>
  );
};

export default Auth1;
