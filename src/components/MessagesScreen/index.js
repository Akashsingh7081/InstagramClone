import React, {useState} from 'react';
import {
  Box,
  HStack,
  ScrollView,
  Text,
  Pressable,
  Image,
  Input,
  Icon,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {followersList} from '../../config/fakeData';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchBox from '../SearchBox';
import ImagePicker from 'react-native-image-crop-picker';

Ionicons.loadFont();
AntDesign.loadFont();
Feather.loadFont();

const clickPicture = () => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    // console.log(image);
  });
};

const Chat = () => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <Box width="100%" height="100%" backgroundColor="white">
      <Box mt={3}>
        <SearchBox />
      </Box>
      <ScrollView m="2" showsVerticalScrollIndicator={false}>
        <HStack justifyContent="space-between">
          <Text fontWeight="bold" py={4}>
            Messages
          </Text>
          <Text fontWeight="500" color="blue.500" py={4}>
            Requests
          </Text>
        </HStack>

        {followersList.slice(6, 12).map((data, index) => {
          // const [follow, setFollow] = useState(data.follow);
          // const [close, setClose] = useState(false);
          return (
            <Box key={index}>
              {close ? null : (
                <HStack py="3" width="100%" justifyContent="space-between">
                  <Box>
                    <Pressable
                      onPress={() =>
                        navigation.push('ChatScreens', {
                          name: data.name,
                          accountName: data.accountName,
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
                        width={12}
                        height={12}
                        borderRadius="30"
                        mr="2"
                      />
                      <Box width="100%" pl={3}>
                        <Text fontSize="14" fontWeight="bold" opacity={0.7}>
                          {data.name}
                        </Text>

                        <Text fontSize="12" opacity="0.5">
                          shared a post
                        </Text>
                      </Box>
                    </Pressable>
                  </Box>
                  <HStack alignItems="center">
                    <Pressable px="2" onPress={clickPicture}>
                      <Ionicons name="camera-outline" size={24} opacity={0.8} />
                    </Pressable>
                  </HStack>
                </HStack>
              )}
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default Chat;
