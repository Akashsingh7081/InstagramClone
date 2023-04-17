import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Box, HStack, ScrollView} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {getUploadedData, postUploaded} from '../../store/actions/posts';
import FastImage from 'react-native-fast-image';

const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();
  const dispatch = useDispatch();
  const CurrentUser = useSelector(state => state.userReducer.user);
  const keys = useSelector(state => state.userReducer.user.UploadedPostKey);
  const data = useSelector(state => state.userReducer.uploadedPost);
  console.log("keys00000",keys);
  //const upload = useSelector(state => state.userReducer.uploaded);
  // const [data,setData]= useState([]);
 
 
   useEffect(() => {
    dispatch(postUploaded(keys));
  }, [CurrentUser.UploadedPostKey.length]);
  

  const Posts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        width="100%"
        height="100%">
        {data ? (
          <HStack
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            width="100%"
            height="100%"
            py="1">
            {data.map((imgData, imgIndex) => {
              
              return (
                <FastImage
                  source={{uri: imgData.postItem}}
                  style={{width: 125, height: 130}}
                  alt="Alternate Text"
                  key={imgIndex}></FastImage>
              );
            })}
          </HStack>
        ) : null}
      </ScrollView>
    );
  };
  const Video = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        width="100%"
        height="100%">
         
        {data ? (
          <HStack
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            width="100%"
            height="100%"
            py="1">
            {data.map((imgData, imgIndex) => {
              // console.log('imgData', imgData);
              return (
                <FastImage
                  source={{uri: imgData.postItem}}
                  style={{width: 125, height: 130}}
                  alt="Alternate Text"
                  key={imgIndex}></FastImage>
              );
            })}
          </HStack>
        ) : null}
      </ScrollView>
    );
  };
  const Tags = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        width="100%"
        height="100%">
        
        {data ? (
          <HStack
            flexWrap={'wrap'}
            justifyContent={'space-between'}
            width="100%"
            height="100%"
            py="1">
            {data.map((imgData, imgIndex) => {
              // console.log('imgData', imgData);
              return (
                <FastImage
                  source={{uri: imgData.postItem}}
                  style={{width: 125, height: 130}}
                  alt="Alternate Text"
                  key={imgIndex}></FastImage>
              );
            })}
          </HStack>
        ) : null}
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1.5,
        },
        tabBarIcon: ({focused, colour}) => {
          let iconName;
          if (route.name === 'Posts') {
            iconName = focused ? 'ios-apps-sharp' : 'ios-apps-sharp';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Video') {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
            colour = focused ? 'black' : 'gray';
          } else if (route.name === 'Tags') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
            colour = focused ? 'black' : 'gray';
          }

          return <Ionic name={iconName} color={colour} size={22} />;
        },
      })}>
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default BottomTabView;

