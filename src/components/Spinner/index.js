import React from 'react';
import {Input,Box,Spinner} from 'native-base';

const spinnerComp = () => {
    return (
      <Box justifyContent={'center'} alignItems={'center'} h="100%">
        <Spinner size={'lg'} />
      </Box>
    );
  };
  export default spinnerComp;


