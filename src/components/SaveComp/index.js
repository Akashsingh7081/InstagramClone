//import liraries
import React from 'react';
import {Box, Text, Pressable, Image, HStack, FlatList,safeAreaTop} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

MaterialIcons.loadFont();

const SaveComp = () => {
    const postData = useSelector(state => state.userReducer.postSavedByUser);
  console.log('postData', postData);
  const navigation = useNavigation();
  return (
    <Box height="100%" safeAreaTop>
      <HStack mt={3}>
        <Pressable onPress={() => navigation.goBack()} pl={1}>
          <MaterialIcons name="arrow-back" size={25} />
        </Pressable>
        <Text ml={10} fontSize={18} fontWeight="bold">
          All Posts
        </Text>
      </HStack>
      <FlatList
        horizontal
        data={postData}
        contentContainerStyle={{ flexDirection: 'row',flexWrap:'wrap',width:'100%' }}
        renderItem={({item, index}) => (
          (          
            <Image
              source={{uri: item.postItem}}
              key={index}
              style={{width: 128, height: 200, margin: 1}}
              alt="Alternate Text"
            />
          )
        )}
      />
    </Box>
  );
};

export default SaveComp;
