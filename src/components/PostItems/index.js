import React, {useState, useEffect} from 'react';
import {Alert, Platform, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Box, HStack, Pressable, Image, Text,safeAreaTop} from 'native-base';
import FastImage from 'react-native-fast-image';
import ImagePicker, {cleanSingle} from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserData} from '../../store/actions/user';
import {useNavigation} from '@react-navigation/native';
import {selectImg} from '../../store/actions/chooseImage';

const PostItems = () => {
  const dispatch = useDispatch();
  const fetchUserData =useSelector(state => state.userReducer.user);
  const [userprofileimg, setUserprofileimg] = useState(fetchUserData.img);
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  const chooseImageFromLib = async () => {
    await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
       setImage(imageUri);     
    });
  };

  useEffect(()=>{
    dispatch(selectImg(image));
  })


  return (
     
    <Box width="100%" height="100%" backgroundColor="white" safeAreaTop>
      <HStack alignItems="center" pt={5}>
        <Pressable onPress={() => navigation.goBack()} pl={2}>
          <Ionic name="close-outline" size={35} />
        </Pressable>
        <Text fontSize={16} fontWeight="bold" pl={4} pr={200}>
         Gallery
        </Text>

        <Pressable  onPress={()=>navigation.navigate('UploadPost')}>
          <Ionic name="checkmark" size={35} color="#3493D9" />
        </Pressable>
      </HStack>
      <Box padding={5} alignItems="center">
        <Pressable onPress={chooseImageFromLib}>
          {image === null ? (
            <FastImage
              source={{uri: userprofileimg}}
              style={{width: 350, height: 350}}
              alt="Profile"
            />
          ) : (
            <FastImage
              source={{uri: image}}
              style={{width: 350, height: 350}}
              alt="Profile"
            />
          )}
        </Pressable>
      </Box>
      
    </Box>
    
  );
};

export default PostItems;
