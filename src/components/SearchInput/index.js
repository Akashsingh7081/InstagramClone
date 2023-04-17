import React from 'react';
import {Input, Icon, Pressable} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

MaterialIcons.loadFont();

const SearchBox = () => {
  const navigation = useNavigation();
  return (
    <Pressable mx={3} onPress={() => navigation.push('SearchBoxNavigator')}>
       
        <Input
        variant="filled"
          borderRadius={11}
          mb={2}
          w={{
            base: '100%',
            md: '25%',
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="search" />}
              size={6}
              ml="2"
              color="white.400"
            />
          }
          placeholder="Search"
          bg={'muted.200'}
        />
      
    </Pressable>
  );
};

export default SearchBox;
