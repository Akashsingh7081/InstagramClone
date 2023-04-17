import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export const getDetailsofUser = async userPhoneNum => {
  if (userPhoneNum === null) {
    return null;
  } else {
    const response = await firestore()
      .collection('Accounts')
      .doc(userPhoneNum)
      .get();
    return response.data();
  }
};

export const setUserData = async userPhoneNum => {
  const response = await firestore()
    .collection('Accounts')
    .doc(userPhoneNum)
    .get();

  if (response.exists) {
    console.log("user Exists");
    return;
  } else {
    console.log("user Exists and data got set");
    await firestore().collection('Accounts').doc(userPhoneNum).set({
      userName: '',
      userProfile: '',
      website: '',
      Bio: '',
      img: '',
      likedPost: [],
      savedpost: [],
      UploadedPostKey: [],
      number: userPhoneNum,
    });
  }
};

export const updatedData = async (Uid, params) => {
  await firestore().collection('Accounts').doc(Uid).update(params);
};

export const addUploadedPostToPostCollection = async (Uid, params) => {
  await firestore().collection('Posts').add(params);
};

export const updateUploadedPost = async (Uid, randomKey) => {
  await firestore()
    .collection('Accounts')
    .doc(Uid)
    .update({
      UploadedPostKey: firebase.firestore.FieldValue.arrayUnion(randomKey),
    });
};
