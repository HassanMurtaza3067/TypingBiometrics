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

const Fingerprint_Authentication = ({navigation}) => {
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
          <Text style={styles.header}>Fingerprint Authentication</Text>
          <Text style={styles.paragraph}>Please scan your register finger</Text>
        </View>
      </View>
      {/* OTP CONTAINER AND INPUT FIELD */}
      <View style={styles.fingerPrintContainer}>
        {/* OTP CONTAINER */}
        <View style={styles.fingerPrintImageContainer}>
          <ImageBackground
            source={require('../assets/icons/Fingerprint_Authenticaion.png')}
            style={styles.backgroundImageStyle}></ImageBackground>
        </View>
      </View>

      {/* LOGIN BUTTON */}
      <View style={{paddingVertical: 20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Auth_Sucessful')}
          style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Fingerprint_Authentication;

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
  fingerPrintContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fingerPrintImageContainer: {
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
