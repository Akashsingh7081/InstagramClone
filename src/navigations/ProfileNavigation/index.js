import React from 'react';
import {
  Box,
  Actionsheet,
  useDisclose,
  Icon,
  Pressable,
  Text,
  Root,
} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
FontAwesome.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();

function createActionSheet() {
  const navigation = useNavigation();
  const {isOpen, onOpen, onClose} = useDisclose();

  const postItemelements = () => {
    onClose();
    navigation.navigate('PostItems');
  };

  return (
    <>
      <Pressable onPress={onOpen} pr={3}>
        <FontAwesome name="plus-square-o" size={24} />
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Box fontWeight="bold">Create</Box>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="play-circle" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                Create
                mr={3}
              />
            }>
            Reels
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialIcons name="grid-on" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                mr={3}
              />
            }>
            <Pressable onPress={postItemelements}>
              <Text>Post</Text>
            </Pressable>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="plus-circle-outline" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                mr={3}
              />
            }>
            Story
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<Ionicons name="heart-circle-outline" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                mr={3}
              />
            }>
            Live
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="access-point" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                mr={3}
              />
            }>
            Live
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialCommunityIcons name="book-open-variant" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                mr={3}
              />
            }>
            Guide
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default createActionSheet;
