import React from 'react';
import {
  Box,
  Actionsheet,
  useDisclose,
  Icon,
  Pressable,
  Text,
} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import images from '../../config/images';
import FastImage from 'react-native-fast-image';

function ProfileNameNavigation(props) {
  const user = props.userAccountName;
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <>
      <Pressable
        flexDirection="row"
        justifyContent="space-between"
        onPress={onOpen}>
        <Box mt={2}>
          <Feather name="lock" size={15} mt={8}></Feather>
        </Box>

        <Text fontSize="20" pl={1} fontWeight="bold">
         {props.userAccountName}
        </Text>
        <Box mt={1.5}>
          <Feather name="chevron-down" size={20} pt={2}></Feather>
        </Box>
      </Pressable>

      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={
                  <FastImage
                    source={images.myImg}
                    style={{width: 50, height: 50, borderRadius: 60}}
                  />
                }
                color="muted.500"
                fontWeight="bold"
                mt={1}
                mr={3}
              />
            }>
            <Text pt={3}>akash_singh_19122</Text>
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<AntDesign name="pluscircleo" />}
                color="muted.500"
                fontWeight="bold"
                ml={1}
                mr={3}
                size={45}
              />
            }>
            <Text mt={3}>Add account</Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ProfileNameNavigation;
