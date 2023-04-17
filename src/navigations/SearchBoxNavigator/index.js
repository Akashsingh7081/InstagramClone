import React, {useState} from 'react';
import {
  Box,
  HStack,
  ScrollView,
  Text,
  VStack,
  Pressable,
  Image,
  Input,
  Icon,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {followersList} from '../../config/fakeData';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ItemClick} from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
import {NestedSearchBoxValues} from '../../config/constatnts';

Ionicons.loadFont();
AntDesign.loadFont();
Feather.loadFont();

const SearchBoxNavigator = () => {
  const navigation = useNavigation();
  const [follow, setFollow] = useState(false);
  const [close, setClose] = useState(false);
  return (
    <Box safeAreaTop>
      <Box width="100%" height="100%" backgroundColor="white">
        <HStack mt={3}>
          <Pressable onPress={() => navigation.goBack()} pl={1}>
            <MaterialIcons name="arrow-back" size={25} />
          </Pressable>
          <Input
            variant="filled"
            borderRadius={11}
            ml={3}
            w={{
              base: '85%',
              md: '25%',
            }}
            placeholder="Search"
            bg={'muted.100'}
          />
        </HStack>
        <ScrollView m="2" showsVerticalScrollIndicator={false}>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold" py={4}>
              Recent
            </Text>
            <Text fontWeight="500" color="blue.500" py={4}>
              See all
            </Text>
          </HStack>

          {followersList.slice(6, 12).map((data, index) => {
            return (
              <Box key={index}>
                {close ? null : (
                  <HStack py="3" width="100%" justifyContent="space-between">
                    <Box>
                      <Pressable
                        onPress={() =>
                          navigation.push('FollowersList', {
                            name: data.name,
                            profileImage: data.profileImage,
                            follow: follow,
                            post: data.posts,
                            followers: data.followers,
                            following: data.following,
                          })
                        }
                        flexDirection="row"
                        alignItems="center"
                        maxWidth="64%">
                        <Image
                          alt="profileImage"
                          source={data.profileImage}
                          width={12}
                          height={12}
                          borderRadius="30"
                          mr="2"
                        />
                        <Box width="100%" pl={3}>
                          <Text fontSize="14" fontWeight="bold">
                            {data.name}
                          </Text>
                          <Text fontSize="12" opacity="0.5">
                            {data.accountName}
                          </Text>
                          <Text fontSize="12" opacity="0.5">
                            Following
                          </Text>
                        </Box>
                      </Pressable>
                    </Box>
                    <HStack alignItems="center">
                      <Pressable onPress={() => setClose(true)} px="4">
                        <AntDesign
                          name="close"
                          size={14}
                          color="black"
                          opacity={0.8}
                        />
                      </Pressable>
                    </HStack>
                  </HStack>
                )}
              </Box>
            );
          })}

          {NestedSearchBoxValues.map((data, index) => {
            return (
              <HStack p="3" key={index}>
                <Feather name="search" size={30} />
                <Text pl={5} pt={1}>
                  {data.id === 0
                    ? data.name1
                    : data.id === 1
                    ? data.name2
                    : data.name3}
                </Text>
              </HStack>
            );
          })}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default SearchBoxNavigator;
