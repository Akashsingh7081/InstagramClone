import React, {Component} from 'react';
import {Box, Text,Pressable, Image, HStack, Center} from 'native-base';
import {imageItem} from "../../config/fakeData";
import FastImage from 'react-native-fast-image';

const MyComponent = (props) => {
 
  return (
    <Box height='100%'>
      {imageItem.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <HStack flexWrap={'wrap'} justifyContent={'space-between'}>
                {data.images.map((imgData, imgIndex) => {
                  return (
                    <Pressable pb={.5} onPressIn={()=>props.data(imgData)} onPressOut={()=>props.data(null)} key={imgIndex}>
                      <FastImage
                        source={imgData}
                        style={{ width: 128, height: 200}}
                        alt="Alternate Text"
                        key={imgIndex}></FastImage>
                    </Pressable>
                  );
                })}
              </HStack>
            ) : null}
 
            {
               data.id===1 ? (
                <HStack flexWrap={'wrap'} justifyContent={'space-between'}>
                {data.images.map((imgData, imgIndex) => {
                  return (
                    <Pressable pb={.5} onPressIn={()=>props.data(imgData)} onPressOut={()=>props.data(null)} key={imgIndex}>
                      <FastImage
                        source={imgData}
                        style={{ width: 128, height: 200}}
                        alt="Alternate Text"
                        key={imgIndex}></FastImage>
                    </Pressable>
                  );
                })}
              </HStack>
               ): null
            }
             {
               data.id===2 ? (
                <HStack>
                <Box>
                {data.images.slice(0,1).map((imgData, imgIndex) => {
                  return (
                    <Pressable onPressIn={()=>props.data(data.images[1])} onPressOut={()=>props.data(null)} key={imgIndex}>
                      <FastImage
                        source={imgData}
                        style={{ width:220,height:250}}
                        alt="Alternate Text"
                        key={imgIndex}></FastImage>
                    </Pressable>
                  );
                })}
              </Box>
              <Box >
                {data.images.slice(1,2).map((imgData, imgIndex) => {
                  return (
                    <Pressable pl={.5} onPressIn={()=>props.data(data.images[1])} onPressOut={()=>props.data(null)} key={imgIndex}>
                      <FastImage
                        source={imgData}
                        style={{ width:167,height:250}}
                        alt="Alternate Text"
                        key={imgIndex}></FastImage>
                    </Pressable>
                  );
                })}
              </Box>
              </HStack>
              
               ): null
            }

          </>
        );
      })}
    </Box>
  );
};

export default MyComponent;
