import React from 'react';
import {Dimensions} from 'react-native';
import {Box, HStack, Text} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../../../../components/ReelsComponent';

Feather.loadFont();

const Reels = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <Box
      w={windowWidth}
      height={windowHeight}
      position="relative"
      backgroundColor="black">
      <HStack
        position="absolute"
        top="0"
        left="0"
        right="0"
        justifyContent="space-between"
        zIndex="1"
        p="10">
        <Text fontSize="20" fontWeight="bold" color="white">
          Reels
        </Text>
        <Feather name="camera" size={25} color="white" />
      </HStack>
      <ReelsComponent />
    </Box>
  );
};

export default Reels;
