//import liraries
import React, {useState} from 'react';
import SearchInput from '../../../../components/SearchInput';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {followersList} from '../../../../config/fakeData';
import {useNavigation} from '@react-navigation/native';


MaterialCommunityIcons.loadFont();
Ionicons.loadFont();

const Followers = () => {
  
    const navigation = useNavigation();
   const [follow, setFollow] = useState(false);
    const [close, setClose] = useState(false);
  
    return (

    <Box w="100%" h="100%" mt="7">
    <SearchInput />
    <Box m="3">
      <Text fontWeight="bold">All followers</Text>
    </Box>
    <Box m="2">

    {followersList.slice(6, 12).map((data, index) => {
        
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
                       
                        width= "98">
                        <Box
                          w="100%"
                          h="28"
                          borderRadius="5"
                          backgroundColor=  '#3493D9'
                          justifyContent="center"
                          alignItems="center">
                          <Text color='black' >
                            Following
                          </Text>
                        </Box>
                      </Pressable>
                      <Pressable  px="4">
                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={24}
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
      </Box>
      </Box>
    
  );
};

export default Followers;
