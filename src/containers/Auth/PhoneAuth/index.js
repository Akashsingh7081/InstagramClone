import React, {useState} from 'react';
import {Box, Text, Pressable, Divider, HStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

Ionicons.loadFont();

const Auth3 = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigation();


  async function signInWithPhoneNumber(Number) {
    if (Number === '') {
      alert('Enter Phone Number');
    }
    else {
      const confirmation = await auth().signInWithPhoneNumber(Number);
      navigation.navigate('OtpAuth', {
        EnteredNumber: value,
        confirm: confirmation
      });
    }
  }


  return (
    
    <Box safeAreaTop w="100%" h="100%">
      <Box justifyContent="center">
        <Box alignItems="center" mt="35%">
          <Ionicons name="person-outline" size={120} />
        </Box>
        <Text textAlign="center" mt="3">PHONE</Text>
        <Box alignItems="center" mt="5">
          <PhoneInput
            containerStyle={{width: '90%'}}
            defaultvalue={value}
            variant="underlined"
            onChangeFormattedText={text => {
              setValue(text);
            }}
            textInputStyle={{marginBottom: '0%'}}
           
          />
        </Box>
        <Box m="4" justifyContent="center" opacity="0.7">
          <Text  fontSize="12">You may recieve SMS notification from us for security and</Text>
          <Box alignItems="center">
            <Text fontSize="12"> login purpose.</Text>
          </Box>
        </Box>

        {/* onPress={() => navigation.push('OtpAuth')} */}
        <Pressable w="95%" onPress={()=>{signInWithPhoneNumber(value)}}>
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

        <Box mt="70%">
          <Divider />
          <HStack alignItems="center" justifyContent="center" mt="1">
            <Text fontSize="14" >Already have an account?</Text>
            <Pressable onPress={()=>navigation.navigate("EmailAndSocialAuthScr")}>
            <Text color="info.500" fontWeight="bold">Log in</Text>
            </Pressable>
           
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Auth3;
