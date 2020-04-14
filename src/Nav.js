/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import MainScreen from './screens/MainScreen';

const AuthStack = createStackNavigator();


const Nav = () => {

    const isLoggedin = useSelector(state => !!state.auth.userId)
    console.log(isLoggedin)
    if (isLoggedin) {
        return <MainScreen />
    }

    return <NavigationContainer>
        <AuthStack.Navigator>
            <AuthStack.Screen name='Intro' component={ IntroScreen } options={ { headerShown: false } } />
            <AuthStack.Screen name='Login' component={ LoginScreen } options={ { headerShown: false } } />
            <AuthStack.Screen name='Signup' component={ RegisterScreen } options={ { headerStyle: { elevation: 0, shadowOpacity: 0 }, headerTitle: 'Sign up' } } />
        </AuthStack.Navigator>
    </NavigationContainer>;
};

export default Nav;
