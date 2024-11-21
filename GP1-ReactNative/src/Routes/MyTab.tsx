import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../screens/Home'
import Search from '../screens/Search'
import Favorites from '../screens/Favorites'
import HomeIcon from '../assets/Home.png'
import SearchIcon from '../assets/Search.png'
import FavoriteIcon from '../assets/Favorite.png'

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
	Home: {};
	Search: {};
	Favorites: { id: string };
}
const renderTabIcon = (source: any) => ({ color }: { color: string }) => (
    <Image
      resizeMode="contain"
      source={source}
      style={{ tintColor: color, width: 30, height: 30 }}
    />
  );
  export function BottomTabRoutes() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#161616', paddingBottom: 2, borderTopColor: '#fff', borderTopWidth: 1 },
          tabBarInactiveTintColor: '#aaa',
          tabBarActiveTintColor: '#fff'
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: renderTabIcon(HomeIcon)
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: renderTabIcon(SearchIcon)
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: renderTabIcon(FavoriteIcon)
          }}
        />
      </Tab.Navigator>
    );
  }