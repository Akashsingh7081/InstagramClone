import React, {useState} from 'react';
import {Alert, Platform, TextInput} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Box, HStack, Pressable, Image, Text} from 'native-base';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserData} from '../../store/actions/user';
import { updateData } from '../../store/actions/updateData';

const EditProfile = ({route, navigation}) => {
 
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userReducer.user);
  const [image, setImage] = useState(null);

  const [user, setUser] = useState({
    username: userInfo.userName,
    userprofile: userInfo.userProfile,
    websiteUrl: userInfo.website,
    bio: userInfo.Bio
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setUser(currentInputValues => {
       return {
          ...currentInputValues, 
          [inputIdentifier]: enteredValue, 
       };
    });
   }


  const chooseImageFromLib = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const updateDataOfUser = async () => {
    let imgUrldata = await uploadImage();
    if (imgUrldata == null && userInfo.img) {
      imgUrldata = userInfo.img;
    }
    const Uid = userInfo.number;
    dispatch(
      updateData(Uid, {
        userName: user.username,
        userProfile: user.userprofile,
        website: user.websiteUrl,
        Bio: user.bio,
        img: imgUrldata,
      }),
    );
  };

  const uploadImage = async () => {
    if (image === null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
   // setImagefilename(filename);
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
    <Box width="100%" height="100%" backgroundColor="white">
      <HStack alignItems="center" pt={10}>
        <Pressable onPress={() => navigation.goBack()} pl={2}>
          <Ionic name="close-outline" size={35} />
        </Pressable>
        <Text fontSize={16} fontWeight="bold" pl={4} pr={200}>
          Edit profile
        </Text>

        <Pressable onPress={updateDataOfUser}>
          <Ionic name="checkmark" size={35} color="#3493D9" />
        </Pressable>
      </HStack>
      <Box padding={5} alignItems="center">
        <Pressable onPress={chooseImageFromLib}>
          {image === null ? (
            <FastImage
              source={{uri: userInfo.img}}
              style={{width: 80, height: 80, borderRadius: 40}}
              alt="Profile"
            />
          ) : (
            <FastImage
              source={{uri: image}}
              style={{width: 80, height: 80, borderRadius: 40}}
              alt="Profile"
            />
          )}
        </Pressable>

        <Text color="#3493D9">Change profile photo</Text>
      </Box>
      <Box padding={2}>
        <Box>
          <Text opacity={0.5} py={0.5}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            fontSize={16}  
            borderBottomWidth={1}
            borderColor="#CDCDCD"
            onChangeText={inputChangeHandler.bind(this, 'username')}
            defaultValue={user.username}
          />
        </Box>
        <Box py={3}>
          <Text opacity={0.5} py={0.5}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            fontSize={16}
            borderBottomWidth={1}
            borderColor="#CDCDCD"
            onChangeText={inputChangeHandler.bind(this, 'userprofile')}
            defaultValue={user.userprofile}
          />
        </Box>
        <Box py={3}>
          <TextInput
            placeholder="Website"
            fontSize={16}
            borderBottomWidth={1}
            borderColor="#CDCDCD"
            onChangeText={inputChangeHandler.bind(this, 'websiteUrl')}
            defaultValue={user.websiteUrl}
          />
        </Box>
        <Box py={3}>
          <TextInput
            placeholder="Bio"
            fontSize={16}
            borderBottomWidth={1}
            borderColor="#CDCDCD"
            onChangeText={inputChangeHandler.bind(this, 'bio')}
            defaultValue={user.bio}
          />
        </Box>
      </Box>
      <Box>
        <Text
          mt={3}
          padding={3}
          color="#3493D9"
          borderWidth={0.5}
          borderColor="#EFEFEF">
          Switch to professional account
        </Text>
        <Text
          padding={3}
          color="#3493D9"
          borderWidth={0.5}
          borderColor="#EFEFEF">
          Create avatar
        </Text>
        <Text
          padding={3}
          color="#3493D9"
          borderWidth={0.5}
          borderColor="#EFEFEF">
          Persnol information setting
        </Text>
      </Box>
    </Box>
  );
};

export default EditProfile;
