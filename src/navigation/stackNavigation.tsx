import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, TextImageScreen} from '../screens';
import MainTabNavigation from './tabNavigation';

const Stack = createNativeStackNavigator();
const MainNaigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="tabs"
            component={MainTabNavigation}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="textImageScreen"
            component={TextImageScreen}
            options={{header: () => null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainNaigation;
