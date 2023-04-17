import React, {useState} from 'react';
import {Box, Text, Pressable, Input, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

const OtpAuth = ({route}) => {
  const {EnteredNumber, confirm} = route.params;
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [code, setCode] = useState('');

  async function confirmCode() {
    try { 
      // await firestore().collection('Accounts').doc(EnteredNumber).set({
      //   // userName: '',
      //   // userProfile: '',
      //   // website: '',
      //   // Bio: '',
      //   // img: '',
      //   // likedPost: [],
      //   // savedpost: [],
      //   // UploadedPostKey: [],
      //   number: EnteredNumber,
      // });
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <Box safeAreaTop w="100%" h="100%">
      <Box justifyContent="center" alignItems="center" mt="10">
        <Text fontSize={20}>Enter the Confirmation Code We Sent to </Text>
        <Text fontSize={19}>{EnteredNumber}</Text>
      </Box>
      <Box>
        <VStack justifyContent="space-between" mt="10">
          <Box alignItems="center">
            <Input
              value={code}
              onChangeText={text => setCode(text)}
              mx="3"
              placeholder="Confirmation code"
              w="90%"
              size="2xl"
              fontSize={15}
            />
           
          </Box>
          <Pressable w="95%" ml="3" mt="5" onPress={confirmCode}>
            <Box
              alignItems="center"
              bg="info.400"
              w="95%"
              h="10"
              justifyContent="center"
              borderRadius="8"
              ml="2">
              <Text color="white" fontSize="15" fontWeight="bold">
                Next
              </Text>
            </Box>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default OtpAuth;
