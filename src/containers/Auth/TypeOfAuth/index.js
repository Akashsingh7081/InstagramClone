import React, {useState} from 'react';
import {Box, HStack, Text, VStack, Pressable, Menu} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {followersList} from '../../config/fakeData';
import {useNavigation} from '@react-navigation/native';

Ionicons.loadFont();
AntDesign.loadFont();
FontAwesome.loadFont();
Feather.loadFont();

function MenubarForPlusSaquareIcon() {
  return (
    <Box>
      <Menu
        w="150"
        bg="gray.500"
        trigger={triggerProps => {
          return (
            <Pressable {...triggerProps}>
              <HStack>
                <Text color="white">English (India)</Text>
                <Box mt="1">
                  <Feather name="chevron-down" size={15} color="white"/>
                </Box>
              </HStack>
            </Pressable>
          );
        }}>
        <VStack>
          <Menu.Item>
            <Text>English(U.K)</Text>
          </Menu.Item>

          <Menu.Item>
            <Text>African(Africa)</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Dutch(German)</Text>
          </Menu.Item>
          <Menu.Item>
            <Text>Spanish(Spain)</Text>
          </Menu.Item>
        </VStack>
      </Menu>
    </Box>
  );
}

const Auth1 = () => {
  const navigation = useNavigation();
  return (
    <Box safeAreaTop bg="black" h="100%" w="100%">
      <Box alignItems="center" justifyContent="center">
        <MenubarForPlusSaquareIcon />
      </Box>
      <VStack justifyContent="center" alignItems="center" mt="80%">
        <Pressable w="95%" onPress={() => navigation.push('PhoneAuth')}>
          <Box
            alignItems="center"
            bg="info.400"
            w="95%"
            h="10"
            justifyContent="center"
            borderRadius="8"
            ml="2">
            <Text color="white" fontSize="13" fontWeight="bold">
              Create new account
            </Text>
          </Box>
        </Pressable>

        <Pressable w="95%" onPress={() => navigation.push('EmailAndSocialAuthScr')}>
          <Box
            alignItems="center"
            w="95%"
            h="10"
            mt={1}
            justifyContent="center"
            borderRadius="8"
            ml="2">
            <Text color="white" fontSize="13" fontWeight="bold">
              Log in
            </Text>
          </Box>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default Auth1;
