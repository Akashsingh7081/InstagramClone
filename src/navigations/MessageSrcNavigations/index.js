// import * as React from 'react';
// import {Text, Box} from 'native-base';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';



// function ChatScreen() {
//   return (
//     <Box flex="1" justifyContent= 'center' alignItems= 'center'>
//       <Text fontSize="22" fontWeight= 'bold'>Chats</Text>
//     </Box>
//   );
// }

// function CallScreen() {
//   return (
//     <Box flex= "1" justifyContent = "center" alignItems= 'center'>
//       <Text fontSize= "22" fontWeight='bold'>Calls</Text>
//     </Box>
//   );
// }

// function RequestScreen() {
//   return (
//     <Box style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text fontSize="22" fontWeight= 'bold'>Request</Text>
//     </Box>
//   );
// }

// const Tab = createMaterialTopTabNavigator();

// export default function Dummy() {
//   return (
//     <Tab.Navigator  screenOptions={{
//         tabBarLabelStyle: { fontSize: 12 },
//         tabBarStyle: { backgroundColor: 'white' },
//       }} >
//       <Tab.Screen
//         name="Home"
//         component={ChatScreen}
//         options={{title: 'Chat'}}
        
//       />
//       <Tab.Screen
//         name="Settings"
//         component={CallScreen}
//         options={{title: 'Call',upperCaseLabel: false}}
//       />
//       <Tab.Screen
//         name="Request"
//         component={RequestScreen}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//     </Tab.Navigator>
//   );
// }
