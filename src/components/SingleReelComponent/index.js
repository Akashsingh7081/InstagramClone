import React, {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import {Box, Text, Pressable, Image, HStack} from 'native-base';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReelMenuActionSheet from '../../navigations/ReelMenuActionSheet'


Ionic.loadFont();
AntDesign.loadFont();
Feather.loadFont();
MaterialCommunityIcons.loadFont();
Entypo.loadFont();

const SingleReelComp = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);

  return (
    <Box
      w={windowWidth}
      h={windowHeight}
      position="relative"
      justifyContent="center"
      alignItems="center">
      <Pressable
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        w="100%"
        h="100%"
        position="absolute">
        <Video
          videoRef={videoRef}
        
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={item.video}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </Pressable>
     
      <Ionic
        name="volume-mute"
        size={mute ? 20 : 1}
        color="white"
        position="absolute"
        backgroundColor="rgba(52,52,52,0.6)"
        borderRadius="100"
        p={mute ? 10 : 0}
      />
   
      
      <Box
        position="absolute"
        width={windowWidth}
        zIndex={1}
        bottom={0}
        p={1}>
        <Box>
          <Pressable w="150">
            <HStack width="100" alignItems="center">
              <Box
                w="30"
                h="30"
                borderRadius="100"
                backgroundColor="white"
                m="3"
                >
                <Image
                  source={item.postProfile}
                  w="100%"
                  h="100%"
                  borderRadius="100"
                  alt='images'
                />
              </Box>
              <Text color="white" fontSize="16" pl="2">
                {item.title}
              </Text>
            </HStack>
          </Pressable>
          <Text color="white" fontSize="14" mx="3" pb={2}>
            {item.description}
          </Text>
          <HStack pb="20" mx={2}>
            <Ionic name="ios-musical-note" color="white" size={16} />
            <Text color="white">Original Audio</Text>
          </HStack>
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom="92"
        right="2"
        zIndex={1}
        >
        <Box>
        <Pressable onPress={() => setLike(!like)} >
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            color={like ? 'red' : 'white'}
            size={25}
          />
          <Text style={{color: 'white'}}>{item.likes}</Text>
        </Pressable>
        <Pressable pt={6}>
          <Ionic name="ios-chatbubble-outline" color="white" size={25} />
        </Pressable>
        <Pressable pt={6} >
          <Ionic name="paper-plane-outline" color="white" size={25} />
        </Pressable>
        {/* <ReelMenuActionSheet/> */}
        <ReelMenuActionSheet/>
        
        </Box>
        <Box
          w="30"
          h="30"
          borderRadius="10"
          borderWidth="2"
          borderColor="white"
          mt={8}
          >
          <Image
           alt='images'
            source={item.postProfile}
            w="100%"
            h="100%"
            borderRadius="10"
            resizeMode="cover"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleReelComp;
