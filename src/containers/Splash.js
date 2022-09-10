import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Metrics from '../theme/metrics';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require('../assets/images/splash_image.png')}>
          <Image
            style={styles.image}
            source={require('../assets/logo/logo.png')}
          />
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Multi Factor Authentication</Text>
        <Text style={styles.paragraph}>
          Identifies the users by the way they type using Artificial
          Intelligence and Machine Learning
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <View style={{width: 20}}></View>
          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
            <Text style={styles.btnText}>Registration</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingVertical: 20,
  },
  imageContainer: {
    height: Metrics.screenHeight * (60 / 100),
  },
  imageBackground: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * (60 / 100),
  },
  image: {
    marginLeft: 20,
    resizeMode: 'contain',
    width: Metrics.screenWidth * (40 / 100),
    height: Metrics.screenHeight * (10 / 100),
  },
  textContainer: {
    marginTop: '10%',
    padding: 20,
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
  btnContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  btnStyle: {
    flex: 1,
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
