import React, {useEffect} from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import AppNavigator from './src/navigations/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/store';
import messaging from '@react-native-firebase/messaging';
import ErrorBoundary from './src/components/ErrorBoundary';

export default function App() {
  const setupCloudMessaging = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
  useEffect(() => {
    setupCloudMessaging();
    // It will trigger when app was in background
    messaging().onNotificationOpenedApp(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
    // It will trigger when app was in quit mode
    messaging().getInitialNotification(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
    // If app is in background mode
    messaging().setBackgroundMessageHandler(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
    // If app is in foreground mode
    messaging().onMessage(remoteMessage => {
      alert(JSON.stringify(remoteMessage));
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <AppNavigator />
        </ErrorBoundary>
      </Provider>
    </NativeBaseProvider>
  );
}
