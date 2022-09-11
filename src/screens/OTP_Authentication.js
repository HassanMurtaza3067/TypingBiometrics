import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Metrics from '../theme/metrics';

const OTP_Authentication = ({navigation}) => {
  const [otpButton, setOtpButton] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* ARROW BACK , HEADER TEXT AND PARAGRAPH */}
      <View>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.image}
            source={require('../assets/icons/Arrow_Back.png')}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.header}>OTP Authentication</Text>
          <Text style={styles.paragraph}>
            Please enter OTP sent to your email
          </Text>
        </View>
      </View>
      {/* OTP CONTAINER AND INPUT FIELD */}
      <View style={styles.OTPContainer}>
        {/* OTP CONTAINER */}
        <View style={styles.OTPImageContainer}>
          <ImageBackground
            source={require('../assets/icons/OPT_Container.png')}
            style={styles.backgroundImageStyle}>
            <TextInput
              style={styles.input}
              placeholder="000000"
              placeholderTextColor="#BDBDBD"
              keyboardType="numeric"
              maxLength={6}
            />
          </ImageBackground>
        </View>
        <Text style={[styles.paragraph, {fontSize: 20, paddingVertical: 20}]}>
          Submit OTP in 22s
        </Text>
      </View>

      {/* LOGIN BUTTON */}
      <View style={{paddingVertical: 20}}>
        <TouchableOpacity
          style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
          <Text style={styles.btnText}>Regenerate OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OTP_Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  imageContainer: {
    backgroundColor: '#131313',
    width: Metrics.screenWidth * (15 / 100),
    height: Metrics.screenWidth * (15 / 100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  image: {
    resizeMode: 'contain',
    width: Metrics.screenWidth * (5 / 100),
    height: Metrics.screenHeight * (5 / 100),
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
  OTPContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OTPImageContainer: {
    width: Metrics.screenWidth * (65 / 100),
    height: Metrics.screenWidth * (65 / 100),
  },
  backgroundImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    fontSize: 40,
    color: '#FFFFFF',
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
