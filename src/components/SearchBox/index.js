
import React from 'react';
import {Box, Text, Pressable, HStack} from 'native-base';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
Ionic.loadFont();

const SerachBox = () => {
  const navigation = useNavigation();

  return (
    <Box
      w="93%"
      h="28"
      ml="4"
      bg="muted.100"
      justifyContent="space-evenly"
      mb="2"
      borderColor="black"
      borderRadius="9">
      <Pressable onPress={() => navigation.push('SearchBoxNavigator')}>
        <HStack ml="2">
          <Box>
            <Ionic name="search" size={20} />
          </Box>
          <Box ml="13" opacity={0.4}>
            <Text>Search</Text>
          </Box>
        </HStack>
      </Pressable>
    </Box>
  );
};

export default SerachBox;
