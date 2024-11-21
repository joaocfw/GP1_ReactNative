import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Favorites from '../screens/Favorites';
import { RootStackParamList } from '../Navigation/types';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}