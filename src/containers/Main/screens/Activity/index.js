import React, {useState} from 'react';
import {
  Box,
  HStack,
  ScrollView,
  Text,
  VStack,
  Pressable,
  Image,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {followersList} from '../../../../config/fakeData';
import {useNavigation} from '@react-navigation/native';

Ionicons.loadFont();
AntDesign.loadFont();
const Activity = () => {
  const navigation = useNavigation();

  return (
    <Box safeAreaTop>
      <Box width="100%" height="100%" backgroundColor="white">
        <Text fontSize="20" fontWeight="bold" padding="2">
          Activity
        </Text>
        <ScrollView m="2" showsVerticalScrollIndicator={false}>
          <Pressable>
            <HStack alignItems="center" p={2} pl="2">
              <Ionicons name="ios-person-add-outline" size={28}></Ionicons>
              <VStack pl="3">
                <Text>Follow requests</Text>
                <Text opacity=".2">Approve or ignore requests</Text>
              </VStack>
            </HStack>
          </Pressable>

          <Text fontWeight="bold" opacity={0.6} mt="7">
            This Week
          </Text>
          <HStack py={2}>
            {followersList.slice(0, 3).map((data, index) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.push('FollowersList', {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: data.follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                  key={index}>
                  <Text>{data.name},</Text>
                </Pressable>
              );
            })}
            <Text> Started following you</Text>
          </HStack>

          <Text fontWeight="bold" opacity={0.6} mt="7">
            This Month
          </Text>

          {followersList.slice(3, 6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
           
            return (
              <Box key={index} width="100%">
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  py="4"
                  width="100%">
                  <Pressable
                    onPress={() =>
                      navigation.push('FollowersList', {
                        name: data.name,
                        profileImage: data.profileImage,
                        follow: follow,
                        post: data.posts,
                        followers: data.followers,
                        following: data.following,
                      })
                    }
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    maxWidth="64%">
                    <Image
                      alt="profileImage"
                      source={data.profileImage}
                      width={10}
                      height={10}
                      borderRadius="100"
                      mr="2"
                    />
                    <Text fontSize="13">
                      <Text fontWeight="bold" fontSize="14">{data.name}</Text>, who you might
                      know, is on instagram
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setFollow(!follow)}
                    width={follow ? '90' : '68'}
                    pr={1}
                    >
                    
                    <Box
                      w="100%"
                      h="28"
                      borderRadius="5"
                      backgroundColor={follow ? null : '#3493D9'}
                      borderWidth={follow ? 1 : 0}
                      borderColor={follow ? '#DEDEDE' : null}
                      justifyContent="center"
                      alignItems="center">
                      <Text color={follow ? 'black' : 'white'}>
                        {follow ? 'Following' : 'Follow'}
                      </Text>
                    </Box>
                  </Pressable>
                </HStack>
              </Box>
            );
          })}

          <Text fontWeight="bold" py={4}>
            Suggestions for you
          </Text>

          {followersList.slice(6, 12).map((data, index) => {
             const [follow, setFollow] = useState(data.follow);
             const [close, setClose] = useState(false);
            
            return (
              <Box key={index}>
                {close ? null : (
                  <HStack py="3" width="100%" justifyContent="space-between">
                    <Box>
                      <Pressable
                        onPress={() =>
                          navigation.push('FollowersList', {
                            name: data.name,
                            profileImage: data.profileImage,
                            follow: follow,
                            post: data.posts,
                            followers: data.followers,
                            following: data.following,
                          })
                        }
                        flexDirection="row"
                        alignItems="center"
                        maxWidth="64%">
                        <Image
                          alt="profileImage"
                          source={data.profileImage}
                          width={10}
                          height={10}
                          borderRadius="100"
                          mr="2"
                        />
                        <Box width="100%">
                          <Text fontSize="14" fontWeight="bold">
                            {data.name}
                          </Text>
                          <Text fontSize="12" opacity="0.5">
                            {data.accountName}
                          </Text>
                          <Text fontSize="12" opacity="0.5">
                            Sugggested for you
                          </Text>
                        </Box>
                      </Pressable>
                    </Box>
                    <HStack alignItems="center">
                      {follow ? (
                        <Pressable
                          onPress={() => setFollow(!follow)}
                          width={follow ? 90 : 68}>
                          <Box
                            w="100%"
                            h="28"
                            borderRadius="5"
                            backgroundColor={follow ? null : '#3493D9'}
                            borderWidth={follow ? 1 : 0}
                            borderColor={follow ? '#DEDEDE' : null}
                            justifyContent="center"
                            alignItems="center">
                            <Text color={follow ? 'black' : 'white'}>
                              {follow ? 'following' : 'follow'}
                            </Text>
                          </Box>
                        </Pressable>
                      ) : (
                        <>
                          <Pressable
                            onPress={() => setFollow(!follow)}
                            width={follow ? 90 : 68}>
                            <Box
                              w="100%"
                              h="28"
                              borderRadius="5"
                              backgroundColor={follow ? null : '#3493D9'}
                              borderWidth={follow ? 1 : 0}
                              borderColor={follow ? '#DEDEDE' : null}
                              justifyContent="center"
                              alignItems="center">
                              <Text color={follow ? 'black' : 'white'}>
                                {follow ? 'following' : 'follow'}
                              </Text>
                            </Box>
                          </Pressable>
                          <Pressable onPress={() => setClose(true)} px="4">
                            <AntDesign
                              name="close"
                              size={14}
                              color="black"
                              opacity={0.8}
                            />
                          </Pressable>
                        </>
                      )}
                    </HStack>
                  </HStack>
                )}
              </Box>
            );
          })}

          <Box p="3">
            <Text color="#3493D9">See all Suggetions</Text>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Activity;
