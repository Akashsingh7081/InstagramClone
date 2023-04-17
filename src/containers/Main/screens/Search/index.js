import React, {useState} from 'react';
import {Dimensions, Pressable} from 'react-native';
import SearchContent from '../../../../components/SearchScreenItems';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Box, HStack, ScrollView, Image, Text} from 'native-base';
import SerachBox from '../../../../components/SearchBox';

Ionic.loadFont();
Feather.loadFont();

const Search = () => {
  
  const [imgelement, setImgelement] = useState(null);

  const getImgData = data => {
    setImgelement(data);
  };

  const ImgWindowWidth = Dimensions.get('window').width;
  const ImgWindowHeight = Dimensions.get('window').height;

  return (
    <Box
      safeAreaTop
      width="100%"
      height="100%"
      backgroundColor="white"
      position="relative">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SerachBox />
        <SearchContent data={getImgData} />
      </ScrollView>
      {imgelement ? (
        <Box
          position="absolute"
          zIndex={1}
          width="100%"
          height="100%"
          backgroundColor="rgba(52,52,52)">
          <Box
            position="absolute"
            top={ImgWindowHeight / 5}
            left={ImgWindowWidth / 20}
            backgroundColor="white"
            width="90%"
            height={465}
            borderRadius={15}
            >
            <HStack
              style={{
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}>
              <Image
                source={imgelement}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                }}
                alt="images"
              />
              <Box style={{paddingLeft: 8}}>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  Akash Singh
                </Text>
              </Box>
            </HStack>
            <Image
              source={imgelement}
              style={{width: '100%', height: '80%'}}
              alt="images"
            />
            <HStack
              style={{
                justifyContent: 'space-around',
                width: '100%',

                alignItems: 'center',
                padding: 8,
              }}>
              <Ionic name="ios-heart-outline" size={26} />
              <Ionic name="ios-person-circle-outline" size={26} />
              <Ionic name="paper-plane-outline" size={26} />
              <Feather name="more-vertical" size={26} />
            </HStack>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Search;
