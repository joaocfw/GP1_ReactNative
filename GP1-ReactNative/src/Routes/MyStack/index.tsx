import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import { RootStackParamList } from '../../Navigation/types';
import { BottomTabRoutes } from '../MyTabs';
import MovieDetails from '../../screens/MovieDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='HomeMain'  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeMain" component={BottomTabRoutes} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}