import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import { RootStackParamList } from '../../Navigation/types';
import { BottomTabRoutes } from '../MyTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='HomeMain'  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeMain" component={BottomTabRoutes} />
    </Stack.Navigator>
  );
}