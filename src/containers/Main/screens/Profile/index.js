
import {ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {Box, Text} from 'native-base';
import {
  ProfileBody,
  ProfileButtons,
} from '../../../../components/ProfileBody';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomTabView from '../../../../components/ProfileSrcBottomTabs';
import Imageslist from '../../../../config/images';

Entypo.loadFont();



const Profile = () => {
  let circles = [];
  let numberofcircels = 4;

  for (let i = 0; i < numberofcircels; i++) {
    circles.push(
      <Box key={i}>
        {i === (numberofcircels-1) ? (
          <Box
            width={60}
            height={60}
            borderRadius="100"
            borderWidth="1"
            opacity="0.7"
            mx="1"
            justifyContent="center"
            alignItems="center">
            <Entypo name="plus" style={{fontSize: 40, color: 'black'}} />
          </Box>
        ) : (
          <Box
            width={60}
            height={60}
            borderRadius="100"
            backgroundColor="black"
            opacity="0.1"
            mx="1"></Box>
        )}
      </Box>,
    );
  }

  return (
    <Box width="100%" height="100%" backgroundColor="white" safeArea>
      <Box width="100%" padding="1">
        <ProfileBody
          name="Akash Singh"
          accountName="akash_singh_11922"
          profileImage={Imageslist.myImg}
          followers="330"
          following="360"
          post="12"
        />
        <ProfileButtons
          id={0}
          name="Akash"
          accountName="Akash_Singh"
          profileImage={ Imageslist.myImg}
        />
      </Box>
      <Box>
       
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}
        
          >
          {circles}
        </ScrollView>
      </Box>
      <BottomTabView />
    </Box>
  );
};

export default Profile;
