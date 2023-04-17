import React from 'react';
import {
  Box,
  Actionsheet,
  useDisclose,
  Icon,
  Pressable,
  HStack,
  ScrollView,
  Text,
  Divider,
} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

FontAwesome.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();
MaterialCommunityIcons.loadFont();
Feather.loadFont();
Entypo.loadFont();
Octicons.loadFont();

function ReelMenuActionSheet() {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <>
      <Pressable pt={6} onPress={onOpen}>
        <Entypo name="dots-three-vertical" color="white" size={25} />
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content>
          <Actionsheet.Item>
            <HStack justifyContent="space-between" alignItems="center" w="95%">
              <Box>
                <Feather name="share-2" size={30} />
              </Box>
              <Box>
                <Feather name="link" size={30} />
              </Box>
              <Box>
                <Feather name="bookmark" size={30} />
              </Box>
              <Box>
                <MaterialCommunityIcons name="crop-rotate" size={30} />
              </Box>
            </HStack>
          </Actionsheet.Item>

          <Divider />

          <Actionsheet.Item
            startIcon={
              <Icon
                as={<Feather name="eye-off" />}
                color="muted.500"
                fontWeight="bold"
                mt={1}
                size={6}
              />
            }>
            Not Interested
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<Octicons name="report" />}
                color="muted.500"
                fontWeight="bold"
                size={6}
              />
            }>
            Report
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default ReelMenuActionSheet;
