import React from 'react';
import {
  Box,
  Text,
  Pressable,
  HStack,
  ScrollView,
  Menu,
  Divider,
  VStack,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Stories from '../../../../components/Stories';
import Post from '../../../../components/PostScreen';
FontAwesome.loadFont();
Feather.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

function MenubarForInstagramText() {
  return (
    <Box w="30%">
      <Menu
        w="136"
        trigger={triggerProps => {
          return (
            <Pressable {...triggerProps}>
              <Text fontSize="24">Instagram</Text>
            </Pressable>
          );
        }}>
          <VStack>
          <Menu.Item>
            <HStack>
              <Text mr="5">Following</Text>

              <MaterialIcons name="person-outline" size={23}/>
            </HStack>
          </Menu.Item>
          <Menu.Item>
            <HStack>
              <Text mr="5">Favourite</Text>

              <MaterialIcons name="star-outline" size={23}/>
            </HStack>
          </Menu.Item>
          </VStack>
      </Menu>
    </Box>
  );
}

function MenubarForPlusSaquareIcon() {
  return (
    <Box w="100%">
      <Menu
        w="130"
        ml="16"
        trigger={triggerProps => {
          return (
            <Pressable {...triggerProps}>
              <FontAwesome name="plus-square-o" size={24} />
            </Pressable>
          );
        }}>
        <VStack>
          <Menu.Item>
            <HStack>
              <Text mr="10">Post</Text>

              <MaterialIcons name="grid-on" size={23}/>
            </HStack>
          </Menu.Item>

          <Menu.Item>
            <HStack>
              <Text mr="8">Story</Text>

              <MaterialCommunityIcons name="plus-circle-outline"  size={23}/>
            </HStack>
          </Menu.Item>
          <Menu.Item>
            <HStack>
              <Text mr="10">Reel</Text>

              <Feather name="play-circle" size={23} />
            </HStack>
          </Menu.Item>
          <Menu.Item>
            <HStack>
              <Text mr="10">Live</Text>

              <MaterialCommunityIcons name="access-point" size={23}/>
            </HStack>
          </Menu.Item>
        </VStack>
      </Menu>
    </Box>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <Box backgroundColor="white" w="100%" safeArea>
      <HStack px={3} alignItems="center" justifyContent="space-between" pb="1">
        <MenubarForInstagramText />
        <HStack space={4}>
          <Box>
            <MenubarForPlusSaquareIcon />
          </Box>
          <Pressable onPress={() => navigation.navigate('Chat')}>
            <Feather name="message-circle" size={24}></Feather>
          </Pressable>
        </HStack>
      </HStack>

      {/* <ScrollView  showsVerticalScrollIndicator={false}> */}
        {/* <Stories /> */}
        <Post />
      {/* </ScrollView> */}
    </Box>
  );
};

export default HomeScreen;
