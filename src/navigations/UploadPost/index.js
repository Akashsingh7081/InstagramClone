import React, {useState, useEffect} from 'react';
import {Alert, Platform, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Box, HStack, Pressable, Image, Text, Switch,safeAreaTop} from 'native-base';
import FastImage from 'react-native-fast-image';
import ImagePicker, {cleanSingle} from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserData} from '../../store/actions/user';
import {getKey} from '../../store/actions/chooseImage';
import {useNavigation} from '@react-navigation/native';
import firebase from "@react-native-firebase/app"
import firestore from '@react-native-firebase/firestore';
import { postItem } from '../../store/actions/updateData';


const UploadPost = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const images = useSelector(state => state.chooseImages.image);
  const fetchUserData = useSelector(state => state.userReducer.user);
  const [userprofileimg, setUserprofileimg] = useState(fetchUserData.img);
  const [image, setImage] = useState(images);
  const [caption, setCaption] = useState(null);

  const updateData = async () => {
    let imgUrldata = await uploadImage();
    let randomKey = Math.floor(Math.random() * 1000);

    const Uid = fetchUserData.number;
    dispatch(postItem(Uid,randomKey,{key: randomKey,
      likes: null,
      postItem: imgUrldata,
      postedPersonImg: imgUrldata,
      title: 'Akash',
      caption: caption,
      isLiked: false,
    }))

    setCaption(null);
    navigation.pop(2);
  };

  const uploadImage = async () => {
    if (image === null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const task = storage().ref(filename).putFile(uploadUri);
    try {
      await task;
      const url = storage().ref(filename).getDownloadURL();
      setImage(null);
      Alert.alert('Image uploaded!');
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <Box width="100%" height="100%" backgroundColor="white" safeAreaTop>
      <HStack alignItems="center" pt={5}>
        <Pressable onPress={() => navigation.goBack()} backgroundColor="#3493D9">
          <Ionic name="arrow-back" size={35} />
        </Pressable>
        <Text fontSize={16} fontWeight="bold" pl={4} pr={200}>
          Gallery
        </Text>
        {/* onPress={()=>navigation.navigate('UploadPost')} */}
        <Pressable onPress={updateData}  backgroundColor="grey">
          <Ionic name="checkmark" size={35} color="#3493D9" />
        </Pressable>
      </HStack>
      <HStack padding={4}>
        <Pressable>
          {image === null ? (
            <FastImage
              source={{uri: userprofileimg}}
              style={{width: 50, height: 50}}
              alt="Profile"
            />
          ) : (
            <FastImage
              source={{uri: userprofileimg}}
              style={{width: 50, height: 50}}
              alt="Profile"
            />
          )}
        </Pressable>

        <TextInput
          placeholder="write a caption"
          fontSize={14}
          value={caption}
          onChangeText={content => setCaption(content)}
        />
      </HStack>
      <Box>
        <Text padding={3} borderWidth={0.7} borderColor="#EFEFEF">
          Tag people
        </Text>
        <Text padding={3} borderWidth={0.7} borderColor="#EFEFEF">
          Add location
        </Text>
        <Text padding={3} borderWidth={0.7} borderColor="#EFEFEF">
          Add music
        </Text>
        <Box>
          <Text padding={3}>Also post to</Text>
          <HStack alignItems="center" >
            <Text fontSize="sm" padding={3} >Facebook</Text>
            <Box ml={250}>
            <Switch />
            </Box>
            
          </HStack>
          <HStack alignItems="center" space={8}>
            <Text fontSize="sm" padding={3}>Twitter</Text>
            <Box ml={237}>
            <Switch />
            </Box>
          </HStack>
          <HStack alignItems="center" space={8}>
            <Text fontSize="sm" padding={3}>Tumblr</Text>
            <Box ml={235}>
            <Switch />
            </Box>
          </HStack> 
        </Box>
        <HStack alignItems="center">
        <Text padding={3}>
          Add music
        </Text>
        <Box ml={255} mt={1}>
        <Ionic name="chevron-forward" size={20}/>
        </Box>
        
        </HStack>
      </Box>
    </Box>
  );
};

export default UploadPost;

