import React, {useState} from 'react';
import {Box, Text} from 'native-base';
import SingleReelComp from '../SingleReelComponent';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {videoData} from '../../config/videos';

const ReelsComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      vertical={true}
      onChangeIndex={handleChangeIndexValue}
      data={videoData}
      renderItem={({item, index}) => (
        <SingleReelComp item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelsComp;
