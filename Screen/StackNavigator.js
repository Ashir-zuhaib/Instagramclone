import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard'
import Nav from './Nav'
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Nav" component={Nav} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default MyStack