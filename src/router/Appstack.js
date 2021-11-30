import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Tracking from '../screens/Tracking';
import CheckPrice from '../screens/CheckPrice';
import Admin from '../screens/Admin';

const AppStack=()=>{
    const Stack=createStackNavigator();
    return(
        <Stack.Navigator  initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="Product" component={Product} options={{
                headerTitle:"Package Details",
                headerTitleAlign:"center"
            }} />
            <Stack.Screen name="Tracking" component={Tracking} options={{
                headerTitle:"Track your Package",
                headerTitleAlign:"center"
            }} />
            <Stack.Screen name="CheckPrice" component={CheckPrice} options={{
                headerTitle:"Check Price",
                headerTitleAlign:"center",
            }} />
            <Stack.Screen name="Admin" component={Admin} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default AppStack ;