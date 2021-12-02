import React from 'react';
// import Signin from './Signin';
import Dashboard from './Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';
import Search from './Search';
// import CreatePost from './CreatePost';
import ImagePicker from '../Components/ImagePicker'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function Auth(){
    return(

    <Tab.Navigator 
    screenOptions={{
      headerShown: false
    }}
    >
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
      }}
      
      
       />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarLabel: 'Search',
        tabBarIcon: () => <Feather name="search" size={24} color="black" />,
      }} />
      {/* <Tab.Screen name="Add" component={CreatePost} /> */}
      <Tab.Screen name="Create" component={ImagePicker} options={{
        tabBarLabel: 'Post',
        tabBarIcon: () => <Ionicons name="add-circle-sharp" size={24} color="black" />}} />
      <Tab.Screen name="Profile" component={Dashboard} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />}} />
    </Tab.Navigator>

    )
}