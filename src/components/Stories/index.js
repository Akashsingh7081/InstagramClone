import React from 'react';
import {Box, Text, ScrollView, Pressable, Image, VStack} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {storyInfo} from '../../config/fakeData'

const stories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} py={4}>
      {storyInfo.map((data, index) => {
        return (
          <Pressable
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <VStack px={2} position="relative">
              {data.id == 1 ? (
                <Box position="absolute" bottom="28" right="13" zIndex="1">
                  <Ionicons
                    name="add-circle"
                    size={20}
                    color="#38bdf8"
                    backgroundColor="#FFFFFF"
                    borderRadius={200}
                  />
                </Box>
              ) : null}
              <Box
                width="68"
                height="68"
                backgroundColor="white"
                borderWidth="1.8"
                borderRadius="100"
                borderColor="#c13584"
                justifyContent="center"
                alignItems="center">
                <FastImage
                  source={data.image}
                  // resizeMode= 'cover' --> Used when aspect ration of image is not 1:1
                 style={{ width:"92%",
                  height:"92%",
                  borderRadius:100}}
                  backgroundColor="orange"
                  alt="None"
                />
              </Box>
              <Text
                textAlign="center"
                fontSize="10"
                opacity={data.id == 0 ? 1 : 0.5}>
                {data.name}
              </Text>
            </VStack>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default stories;
