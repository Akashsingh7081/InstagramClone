import React, {useState} from 'react';
import {Box, HStack, Text, Pressable, ScrollView, Image} from 'native-base';
import {followersList} from '../../config/fakeData';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ProfileBody, ProfileButtons} from '../ProfileBody';
import FastImage from 'react-native-fast-image'

Ionic.loadFont();
Feather.loadFont();
AntDesign.loadFont();

const FollowersList = ({route, navigation}) => {
  const {name, profileImage, follow, post, followers, following} = route.params;
  const [isFollow, setIsFollow] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <Box safeArea>
      <Box w="100%" h="100%" backgroundColor="white" p={2}>
        <HStack alignItems="center">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" size={20} color="black" />
          </Pressable>
          <HStack justifyContent="space-between" alignItems="center" w="92%">
            <Text fontSize={15} ml="10" fontWeight="bold">
              {name}
            </Text>
            <Feather name="more-vertical" size={20} color="black" />
          </HStack>
        </HStack >
        <Box mt={4}>
          <ProfileBody
            name={name}
            profileImage={profileImage}
            post={post}
            followers={followers}
            following={following}
          />
        </Box>
        <ProfileButtons id={1} />

        <Box pt="5" pb={3} fontSize="15" fontWeight="bold">
          Suggested for you
        </Box>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pt="3">
          {name === FollowersList.name
            ? null
            : followersList.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
                return (
                  <Box key={index}>
                    {data.name === name || close ? null : (
                      <Box
                        w="150"
                        h="220"
                        m="1"
                        justifyContent="center"
                        alignItems="center"
                        borderWidth="0.5"
                        borderColor="#DEDEDE"
                        borderRadius="2"
                        position="relative">
                        <Pressable
                          onPress={() => setClose(true)}
                          position="absolute"
                          top="2"
                          right="2"
                          opacity="0.3">
                            
                          <AntDesign
                            name="close"
                            size={20}
                            color="black"
                            
                          />
                        </Pressable>
                        <FastImage
                        alt='profileImage'
                          source={data.profileImage}
                          style={{ width:60,
                          height:60,
                          borderRadius: 100,
                          marginTop: 30}}
                        />
                        <Text fontWeight="500" fontSize="16" pt={2}>
                          {data.name}
                        </Text>
                        <Text fontSize="12">{data.accountName}</Text>
                        <Pressable
                          onPress={() => setIsFollow(!isFollow)}
                          width="80%"
                          py="9">
                          <Box
                            w="100%"
                            height="30"
                            borderRadius="5"
                            backgroundColor={isFollow ? null : '#3493D9'}
                            borderWidth={isFollow ? 1 : 0}
                            borderColor="#DEDEDE"
                            justifyContent="center"
                            alignItems="center">
                            <Text color={isFollow ? 'black' : 'white'}>
                              {isFollow ? 'Following' : 'Follow'}
                            </Text>
                          </Box>
                        </Pressable>
                      </Box>
                    )}
                  </Box>
                );
              })}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default FollowersList;
