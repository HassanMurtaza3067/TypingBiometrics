import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Metrics from '../theme/metrics';

import otp from '../assets/icons/otp.png';
import check from '../assets/icons/check.png';
import typing from '../assets/icons/typing.png';
import fingerprint from '../assets/icons/fingerprint.png';

const Login = ({navigation}) => {
  const [otpButton, setOtpButton] = useState(false);
  const [fingerprintButton, setFingerprintButton] = useState(false);
  const [typingButton, setTypingButton] = useState(false);
  const [screen, setScreen] = useState('');

  const OTP = 'OTP_Authentication';
  const Fingerprint = 'Fingerprint_Authentication';
  const Typing = 'Typing_Authentication';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/logo/logo.png')}
        />
      </View>

      <View>
        <Text style={styles.header}>Select Authentication</Text>
        <Text style={styles.paragraph}>Please select authentication type</Text>
      </View>

      <View style={{flex: 2, justifyContent: 'center'}}>
        {/* OTP BUTTON */}
        <TouchableOpacity
          style={[
            styles.inputContainer,
            {backgroundColor: otpButton ? '#4B4FED' : '#151515'},
          ]}
          onPress={() => {
            setOtpButton(!otpButton);
            setFingerprintButton(false);
            setTypingButton(false);
            setScreen(OTP);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.icon} source={otp} />
            <Text style={[styles.header, {paddingLeft: 20}]}>OTP</Text>
          </View>
          <Image style={styles.icon} source={otpButton ? check : null} />
        </TouchableOpacity>

        {/* FINGERPRINT BUTTON */}
        <TouchableOpacity
          style={[
            styles.inputContainer,
            {backgroundColor: fingerprintButton ? '#4B4FED' : '#151515'},
          ]}
          onPress={() => {
            setFingerprintButton(!fingerprintButton);
            setOtpButton(false);
            setTypingButton(false);
            setScreen(Fingerprint);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.icon} source={fingerprint} />
            <Text style={[styles.header, {paddingLeft: 20}]}>Fingerprint</Text>
          </View>
          <Image
            style={styles.icon}
            source={fingerprintButton ? check : null}
          />
        </TouchableOpacity>

        {/* TYPING AUTHENTICATION BUTTON */}
        <TouchableOpacity
          style={[
            styles.inputContainer,
            {backgroundColor: typingButton ? '#4B4FED' : '#151515'},
          ]}
          onPress={() => {
            setTypingButton(!typingButton);
            setOtpButton(false);
            setFingerprintButton(false);
            setScreen(Typing);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.icon} source={typing} />
            <Text style={[styles.header, {paddingLeft: 20}]}>
              Typing Authentication
            </Text>
          </View>
          <Image style={styles.icon} source={typingButton ? check : null} />
        </TouchableOpacity>
      </View>

      {/* LOGIN BUTTON */}
      <View style={{paddingVertical: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate(screen)}
          style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
          <Text style={styles.btnText}>Continue</Text>
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
    fontSize: 18,
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
    justifyContent: 'space-between',
    marginTop: 10,
  },
  icon: {
    width: Metrics.screenWidth * (10 / 100),
    height: Metrics.screenHeight * (10 / 100),
    resizeMode: 'contain',
  },
  btnStyle: {
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
});
