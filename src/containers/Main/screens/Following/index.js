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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {followersList} from '../../../../config/fakeData';
import {useNavigation} from '@react-navigation/native';

Ionicons.loadFont();
AntDesign.loadFont();

const Following = () => {
  const [follow, setFollow] = useState(false);
    return (
        <Box w="100%" h="100%" mt="4">
      <SearchInput />
      <Box m="3">
        <Text fontWeight="bold">All followers</Text>
      </Box>
      <Box m="2">
        {followersList.slice(2, 6).map((data, index) => {
          
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
                    <Text fontWeight="bold" fontSize="14">
                      {data.name}
                    </Text>
                    , who you might know, is on instagram
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setFollow(!follow)}
                  width="68"
                  pr={1}>
                  <Box
                    w="100%"
                    h="28"
                    borderRadius="5"
                    backgroundColor= '#3493D9' 
                    justifyContent="center"
                    alignItems="center">
                    <Text color='black'>
                      Remove
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
          );
        })}
      </Box>
    </Box>
    );
};


export default Following;





