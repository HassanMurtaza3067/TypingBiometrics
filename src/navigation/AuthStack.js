import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../containers/Splash';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Authentication_Selection from '../screens/Authentication_Selection';
import OTP_Authentication from '../screens/OTP_Authentication';
import Fingerprint_Authentication from '../screens/Fingerprint_Authentication';
import Typing_Authentication from '../screens/Typing_Authentication';
import Auth_Sucessful from '../screens/Auth_Sucessful';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="Authentication"
        component={Authentication_Selection}
      />
      <Stack.Screen name="OTP_Authentication" component={OTP_Authentication} />
      <Stack.Screen
        name="Fingerprint_Authentication"
        component={Fingerprint_Authentication}
      />
      <Stack.Screen
        name="Typing_Authentication"
        component={Typing_Authentication}
      />
      <Stack.Screen name="Auth_Sucessful" component={Auth_Sucessful} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
