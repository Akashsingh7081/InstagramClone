import React, {useState,useEffect} from 'react';
import {
  Box,
  Text,
  Pressable,
  Divider,
  VStack,
  FormControl,
  Input,
  Center,
  Button,
  Stack,
  Icon,
  HStack,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

Ionicons.loadFont();
MaterialIcons.loadFont();

const Example = () => {
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 

  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        size="lg"
        w={{
          base: '90%',
          md: '25%',
        }}
        onChangeText={(email) => setEmail(email)}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Email"
      />
      <Input
        size="lg"
        w={{
          base: '90%',
          md: '25%',
        }}
        type={show ? 'text' : 'password'}
        onChangeText={(password) => setPassword(password)}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? 'visibility' : 'visibility-off'} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        placeholder="Password"
      />
      <Pressable w="95%" onPress={() => navigation.navigate("MainScreen")}>
        <Box
          alignItems="center"
          bg="info.400"
          w="95%"
          h="10"
          justifyContent="center"
          borderRadius="8"
          ml="2">
          <Text color="white" fontSize="15" fontWeight="bold">
            Log in
          </Text>
        </Box>
      </Pressable>
    </Stack>
  );
};

const EmailAndSocialAuthScr = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    GoogleSignin.configure()
  },[])

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken, user} = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential); 
    }
     catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
       
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Box safeAreaTop w="100%" h="100%">
      <Center flex={1} px="3">
        <Example />
        <Divider my="10" w="100%" />


       <Pressable onPress={googleLogin}>
        <HStack>
          <Box pr="2">
            <AntDesign name="googleplus" size={25} color="info.400" />
          </Box>

          <Text>Log In with google</Text>
        </HStack>
        </Pressable>
      </Center>
    </Box>
  );
};

export default EmailAndSocialAuthScr;
