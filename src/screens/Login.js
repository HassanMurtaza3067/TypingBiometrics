import {
  Image,
  SafeAreaView,
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

const Login = ({navigation}) => {
  const [emailInputSelected, setEmailInputSelected] = useState(false);
  const [pswdInputSelected, setPswdInputSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/logo/logo.png')}
          />
        </View>

        <View>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.paragraph}>Please Log in to your account</Text>
        </View>
      </View>

      {/* INPUT FIELD PART */}

      <View
        style={{
          flex: 2,
          justifyContent: 'space-around',
        }}>
        <View>
          <Text style={styles.paragraph}>Email</Text>
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

        <View>
          <Text style={styles.paragraph}>Password</Text>
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
        <View>
          <TouchableOpacity>
            <Text style={[styles.header, {fontSize: 15, textAlign: 'center'}]}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        {/* LOGIN BUTTON */}
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Authentication')}
            style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SOCIAL ICON PART */}

      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
        }}>
        {/* MESSAGE FOR SOCIAL ICONS BUTTONS*/}
        <View>
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
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={[styles.paragraph, {textAlign: 'center'}]}>
            Don’t have an accounts
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={[
                styles.paragraph,
                {color: '#FFFFFF', paddingLeft: 5, fontWeight: 'bold'},
              ]}>
              Register here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
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
    marginBottom: 10,
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
