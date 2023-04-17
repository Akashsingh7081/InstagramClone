import React,{useEffect,useState} from 'react';
import {Box, Text, HStack,Image, Pressable} from 'native-base';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import {Animated} from "react-native"
import FastImage from 'react-native-fast-image'

Ionic.loadFont();
Feather.loadFont();
AntDesign.loadFont();

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;
  const [progress, setProgress] = useState(new Animated.Value(0));
  
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

   Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

 

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  return (
    <Box safeAreaTop width="100%" height="100%">
      <Box
        justifyContent="center"
        alignItems="center"
        height="100%"
        position="relative"
        backgroundColor="black">
        <Box
          height="1"
          width="95%"
          bg="warmGray.400"
          borderWidth=".4"
          position="absolute"
          top="18">
          <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            width: progressAnimation,
          }}></Animated.View>
        </Box>

        <HStack
          alignItems="center"
          p="3"
          position="absolute"
          top="5"
          left="0"
          width="90%">
          <Box
            borderRadius="100"
            width="30"
            height="30"
            justifyContent="center"
            alignItem="center">
            <FastImage alt='ProfileImage' source={image} 
            style={{width:"92%", height:"92%", borderRadius:100}}
            />
          </Box>
          <HStack justifyContent="space-between" width="100%">
            <Text color="white" fontSize="15" pl="4">
              {name}
            </Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Feather name="more-vertical" size={20} color="white" opacity="0.6" />
            </Pressable>
          </HStack>
        </HStack>

        <FastImage
         alt='ProfileImage'
          source={image}
          style={{position: 'absolute', width: '100%', height: 600}}
        />
        <HStack
          position="absolute"
          bottom="0"
          left="0"
          alignItems="center"
          justifyContent="space-around"
          my="10"
          width="100%">
          <TextInput
            placeholder="send message"
            placeholderTextColor="white"
            borderColor="white"
            borderRadius={25}
            width="80%"
            height={40}
            pl={2}
            borderWidth={1}
            fontSize={20}
            color="white"
          />
           <AntDesign
                    name={'heart'}
                    size={25}
                    color={'red'}
                  />
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="navigation" size={25} color="white" />
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
};

export default Status;
