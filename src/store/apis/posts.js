import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app"
import auth from '@react-native-firebase/auth';

export const getPostData = async postPerLoad => {
  let totalPostLength = 0;
  await firestore().collection('Posts').get().then(doc => {
    totalPostLength = doc.size
  });
  const list = [];
  const response = await firestore()
    .collection('Posts')
    .orderBy('key', 'asc')
    .limit(postPerLoad)
    .get();
  const lastVisible = response.docs[response.docs.length - 1];
  response.forEach(doc => {
    list.push(doc.data());
  });
  return {list, lastVisible,totalPostLength};
};


export const getMorePost = async (startAfter, postPerLoad) => {
  const list = [];
  const response = await firestore()
    .collection('Posts')
    .orderBy('key', 'asc')
    .startAfter(startAfter)
    .limit(postPerLoad)
    .get();
  const lastVisible = response.docs[response.docs.length - 1];
  response.forEach(doc => {
    list.push(doc.data());
  });
  return {list, lastVisible};
};

export const getUserPostData = async key => {
  const list = [];
  firestore()
    .collection('Posts')
    .where('key', '==', key)
    .get()
    .then(snapshots => {
      if (snapshots.size > 0) {
        snapshots.forEach(async item => {
          list.push(item.data());
        });
      }
    });
  return list;
};

export const savePost = async key => {
  const response = firestore()
    .collection('Accounts')
    .doc(auth().currentUser.phoneNumber);
  await response.get().then(doc => {
    const savedPostKeys = doc.data().savedpost;
    if (savedPostKeys.includes(key)) {
      response.update({
        savedpost: firebase.firestore.FieldValue.arrayRemove(key),
      });
    } else {
      response.update({
        savedpost: firebase.firestore.FieldValue.arrayUnion(key),
      });
    }
  });
  
  return (await response.get()).data().savedpost;
};

export const getsavedPost = async keys => {
  let list = [];
  const response = await firestore()
    .collection('Posts')
    .where('key', 'in', keys)
    .get();
  response.forEach(doc => {
    list.push(doc.data());
  });
console.log('list',list);
  return list;
};

export const uploadedPost = async (keys) => {
  console.log("keys....",keys);
  let list = [];
  const response = await firestore()
    .collection('Posts')
    .where('key', 'in', keys)
    .get();
  response.forEach(doc => {
    list.push(doc.data());
  });
   console.log('400');
  return list;

};


export const postLikedByUser = async key => {
  const response = firestore()
    .collection('Accounts')
    .doc(auth().currentUser.phoneNumber);
  await response.get().then(doc => {
    const likedPostKeys = doc.data().likedPost;
   
    if (likedPostKeys.includes(key)) {
      response.update({
        likedPost: firebase.firestore.FieldValue.arrayRemove(key),
      });
    } else {
      response.update({
        likedPost: firebase.firestore.FieldValue.arrayUnion(key),
      });
    }
  });
  
  return (await response.get()).data().likedPost;
};

