import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Metrics from '../theme/metrics';

import Email_Filled from '../assets/icons/Email_Filled.png';
import Email_Unfilled from '../assets/icons/Email_Unfilled.png';
import Lock_Filled from '../assets/icons/Lock_Filled.png';
import Lock_Unfilled from '../assets/icons/Lock_Unfilled.png';
import Show_Password from '../assets/icons/Show_Password.png';
import Hide_Password from '../assets/icons/Hide_Password.png';
import User_Filled from '../assets/icons/User_Filled.png';
import User_Unfilled from '../assets/icons/User_Unfilled.png';

import Input from '../components/input';

const SignUp = ({navigation}) => {
  const [emailInputSelected, setEmailInputSelected] = useState(false);
  const [pswdInputSelected, setPswdInputSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [userSelected, setUserSelected] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/logo/logo.png')}
        />
      </View>
      <ScrollView>
        <View>
          <Text style={styles.header}>Register</Text>
          <Text style={styles.paragraph}>Please Register your account</Text>
        </View>

        {/* USER NAME INPUT FIELD */}
        <View style={{paddingTop: 20}}>
          <Text style={[styles.paragraph, {paddingBottom: 10}]}>Name</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={userSelected ? User_Filled : User_Unfilled}
            />
            <TextInput
              onFocus={() => setUserSelected(true)}
              style={styles.input}
              placeholder="Enter Your Name"
              placeholderTextColor="#BDBDBD"
            />
          </View>
        </View>

        {/* EMAIL INPUT FIELD */}
        <View style={{paddingTop: 20}}>
          <Text style={[styles.paragraph, {paddingBottom: 10}]}>Email</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={emailInputSelected ? Email_Filled : Email_Unfilled}
            />
            <TextInput
              onFocus={() => setEmailInputSelected(true)}
              style={styles.input}
              placeholder="Enter Email"
              keyboardType="email-address"
              placeholderTextColor="#BDBDBD"
            />
          </View>
        </View>

        {/* PASSWORD INPUT FIELD */}
        <View style={{paddingTop: 20}}>
          <Text style={[styles.paragraph, {paddingBottom: 10}]}>Password</Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={pswdInputSelected ? Lock_Filled : Lock_Unfilled}
            />
            <TextInput
              onFocus={() => setPswdInputSelected(true)}
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry={showPassword}
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                style={styles.icon}
                source={showPassword ? Show_Password : Hide_Password}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* CONFIRM PASSWORD INPUT FIELD */}
        <View style={{paddingTop: 20}}>
          <Text style={[styles.paragraph, {paddingBottom: 10}]}>
            Confirm Password
          </Text>
          <View style={styles.inputContainer}>
            <Image
              style={styles.icon}
              source={pswdInputSelected ? Lock_Filled : Lock_Unfilled}
            />
            <TextInput
              onFocus={() => setPswdInputSelected(true)}
              style={styles.input}
              placeholder="Enter Confirm Password"
              secureTextEntry={showPassword}
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                style={styles.icon}
                source={showPassword ? Show_Password : Hide_Password}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* REGISTER BUTTON */}
        <View style={{paddingVertical: 40}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Authentication')}
            style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>

        {/* MESSAGE FOR SOCIAL ICONS BUTTONS*/}
        <View style={{paddingVertical: 20}}>
          <Text style={[styles.paragraph, {textAlign: 'center'}]}>
            Continue with social accounts
          </Text>
        </View>

        {/* // SOCIAL ICONS */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/apple.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/google.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('../assets/icons/facebook.png')}
            />
          </TouchableOpacity>
        </View>

        {/* MESSAGE FOR REGISTRATION */}
        <View
          style={{
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={[styles.paragraph, {textAlign: 'center'}]}>
            Have an accounts
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                styles.paragraph,
                {color: '#FFFFFF', paddingLeft: 5, fontWeight: 'bold'},
              ]}>
              Login here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  imageContainer: {
    // backgroundColor: 'red',
  },
  image: {
    resizeMode: 'contain',
    width: Metrics.screenWidth * (40 / 100),
    height: Metrics.screenHeight * (15 / 100),
  },
  header: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 5,
    color: '#BDBDBD',
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#151515',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: Metrics.screenWidth * (8 / 100),
    height: Metrics.screenHeight * (8 / 100),
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#151515',
    color: '#FFFFFF',
    marginLeft: 10,
  },
  btnStyle: {
    // flex: 1,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#4B4FED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconsContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#151515',
    width: Metrics.screenWidth * (17 / 100),
    height: Metrics.screenWidth * (17 / 100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
