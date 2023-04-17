import React, {useEffect, useRef, useState} from 'react';
import {
  Box,
  Text,
  Image,
  HStack,
  Pressable,
  FlatList,
  Spinner,
} from 'native-base';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {postElements} from '../../config/fakeData';
import FastImage from 'react-native-fast-image';
import {firebase} from '@react-native-firebase/storage';
// import ImageCarouselComp from '../ImageCarouselComp';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {postsData, fetchMorePost, likedPost} from '../../store/actions/posts';
import {savedPost} from '../../store/actions/savedPost';
import Stories from '../../components/Stories';

AntDesign.loadFont();
Ionic.loadFont();
Entypo.loadFont();

const postPerLoad = 10;
const Post = () => {
  // const [postPerLoad] = useState(3);
  const dispatch = useDispatch();
  const lastTap = useRef(0);
  const postsDataEle = useSelector(state => state.posts.posts);
  const startAfter = useSelector(state => state.posts.lastVisible);
  const lastPost = useSelector(state => state.posts.lastPost);
  const totalPostLength = useSelector(state => state.posts.totalPostLength);
  const likedPostByUser = useSelector(state=> state.userReducer.user.likedPost);
   const savedPostKeys = useSelector(state=> state.userReducer.user.savedpost);

  const [like, setLike] = useState(null);
  useEffect(() => {
    dispatch(postsData(postPerLoad));
  }, []);

  async function getMorePosts() {
    dispatch(fetchMorePost(startAfter, postPerLoad));
  }

  const likePost = key => {
    dispatch(likedPost(key));
  };

  const savePost = key => {
    dispatch(savedPost(key));
  };
  
  function isLiked(key){
    return likedPostByUser.includes(key);
  }
  function isSaved(key){
    return savedPostKeys.includes(key);
  }

  function renderPosts({item}) {
    return (
      <Box pb="1" borderBottomColor="gray.100" borderBottomWidth="0.1">
        <HStack alignItems="center" justifyContent="space-between" p="15">
          <HStack alignItems="center">
            <FastImage
              alt="ProfilePic"
              source={{uri: item.postedPersonImg}}
              style={{width: 35, height: 35, borderRadius: 60}}></FastImage>

            <Box pl="5">
              <Text fontSize="15" fontWeight="bold">
                {item.title}set
              </Text>
            </Box>
          </HStack>
          <Feather name="more-vertical" size={20} />
        </HStack>
        <Pressable
          onPress={() => {
            const now = Date.now();
            const DELAY = 200;
            if (lastTap.current && now - lastTap.current < DELAY)
              setLike(!like);
            else lastTap.current = now;
          }}>
          <Box position="relative" justifyContent="center" alignItems="center">
            <FastImage
              alt="profileImage"
              source={{uri: item.postItem}}
              style={{width: '100%', height: 300}}
            />
          </Box>
        </Pressable>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          px="4"
          py="2">
          <HStack alignItems="center" justifyContent="space-between">
            {/* <Pressable onPress={() => setLike(!like)}> */}
            <Pressable onPress={() => likePost(item.key)}>
              <AntDesign
                name={isLiked(item.key) ? 'heart' : 'hearto'}
                size={25}
                color={isLiked(item.key) ? 'red' : 'black'}
              />
            </Pressable>
            <Pressable pl="4">
              <Ionic name="ios-chatbubble-outline" size={25} />
            </Pressable>
            <Pressable pl="3">
              <Ionic name="paper-plane-outline" size={25} />
            </Pressable>
          </HStack>
          
          <Pressable onPress={() => savePost(item.key)}>
            {/* <Feather name="bookmark" size={27} /> */}
            <Ionic
               name={isSaved(item.key) ? 'ios-bookmark' : 'ios-bookmark-outline'}
                //name='ios-bookmark-outline'
                size={27}
                // color={isSaved(item.key) ? 'black' : 'black'}
              />
          </Pressable>
        </HStack>

        <Box px="15">
          <Text>
            Liked by {like ? 'you and' : ''}{' '}
            {like ? item.likes + 1 : item.likes} others
          </Text>
          <Text fontWeight="700" fontSize="14" py="2">
            Time and Tide Wait For none
          </Text>
          <Text opacity="0.4" paddingVertical="2">
            View all comments
          </Text>
        </Box>
      </Box>
      //)
    );
  }

  return (
    <Box pb={77}>
      <FlatList
        ListHeaderComponent={<Stories />}
        data={postsDataEle}
        // contentContainerStyle={}
        showsVerticalScrollIndicator={false}
        renderItem={renderPosts}
        onEndReached={
          postsDataEle.length < totalPostLength ? getMorePosts : null
        }
        onEndReachedThreshold={0.01}
        scrollEventThrottle={150}
        ListFooterComponent={
          postsDataEle.length < totalPostLength || postsDataEle.length === 0 ? (
            <Spinner size="lg" mb="5" />
          ) : null
        }
      />
    </Box>
  );
};

export default Post;
