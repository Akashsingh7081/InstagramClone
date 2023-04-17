import {
  Box,
  Text,
  Pressable,
  HStack,
  VStack,
  Button,
  ScrollView,
} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import React, {useState, useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {GiftedChat} from 'react-native-gifted-chat';

const ChatScreen = ({route}) => {
  const {name, profileImage, accountName, follow, post, followers, following} =
    route.params;
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <Box safeAreaTop>
      <Box w="100%" h="100%" bg="pink" pt={2}>
        <HStack alignItems="center">
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-backspace" size={30} color="black" />
          </Pressable>
          <FastImage
            alt="profileImage"
            source={profileImage}
            style={{
              width: 35,
              height: 35,
              borderRadius: 60,
              marginTop: 1,
              marginLeft: 20,
            }}
          />
          <VStack alignItems="flex-start" ml="4">
            <Text fontWeight={600}>{name}</Text>
            <Text>{accountName}</Text>
          </VStack>

          <HStack ml="120">
            <Feather name="phone" size={25} />
            <Pressable ml={6}>
              <AntDesign name="videocamera" size={25} />
            </Pressable>
          </HStack>
        </HStack>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false} pt={3}>
          <VStack alignItems="center">
            <FastImage
              alt="profileImage"
              source={profileImage}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: 14,
              }}
            />
            <Text fontWeight="700" fontSize={18}>
              {name}
            </Text>
            <Text>{accountName}</Text>
            <Text opacity={0.6}>441 followers 12 Post</Text>
            <Text opacity={0.6}>You follow each other on Instagram</Text>
            <Box mt={5}>
              <Button
                size="sm"
                bg="gray.200"
                onPress={() =>
                  navigation.push('FollowersList', {
                    name: name,
                    profileImage: profileImage,
                    accountName: accountName,
                    follow: follow,
                    post: post,
                    followers: followers,
                    following: following,
                  })
                }>
                <Text fontWeight={700}>View Profile</Text>
              </Button>
            </Box>
          </VStack>
        </ScrollView>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatScreen;
