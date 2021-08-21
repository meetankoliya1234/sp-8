import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, View } from 'react-native';
import TabNavigator from './TabNavigator'
import Profile from '../screens/Profile'
import LogoutScreen from '../screens/LogoutScreen'
import StackNavigator from './StackNavigator';
import Logout from '../screens/LogoutScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;