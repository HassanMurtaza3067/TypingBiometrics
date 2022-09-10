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

import Input from '../components/input';

const Login = () => {
  const [emailInputSelected, setEmailInputSelected] = useState(false);
  const [pswdInputSelected, setPswdInputSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/logo/logo.png')}
        />
      </View>

      <View>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.paragraph}>Please Log in to your account</Text>
      </View>

      {/* <Input
        label="Email"
        selected={emailInputSelected}
        Filled_Icon={Email_Filled}
        Unfilled_Icon={Email_Unfilled}
        onFocus={() => setEmailInputSelected(true)}
        placeholder="Enter Email"
      />

      <Input
        label="Password"
        selected={pswdInputSelected}
        Filled_Icon={Lock_Filled}
        Unfilled_Icon={Lock_Unfilled}
        onFocus={() => setPswdInputSelected(true)}
        placeholder="Enter Password"
        Show_Password={Show_Password}
        Hide_Password={Hide_Password}
      /> */}

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

      <View style={{paddingTop: 20}}>
        <Text style={[styles.paragraph, {paddingBottom: 10}]}>Password</Text>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={pswdInputSelected ? Email_Filled : Email_Unfilled}
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
      <View style={{paddingVertical: 20}}>
        <TouchableOpacity>
          <Text style={[styles.header, {fontSize: 15, textAlign: 'center'}]}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>

      {/* LOGIN BUTTON */}
      <View style={{paddingVertical: 20}}>
        <TouchableOpacity
          style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
          <Text style={styles.btnText}>Login</Text>
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
          Don’t have an accounts
        </Text>
        <TouchableOpacity>
          <Text
            style={[
              styles.paragraph,
              {color: '#FFFFFF', paddingLeft: 5, fontWeight: 'bold'},
            ]}>
            Register here
          </Text>
        </TouchableOpacity>
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
