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

const Auth_Sucessful = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require('../assets/icons/Auth_Sucessfull.png')}>
          <TouchableOpacity
            style={styles.backArrowImageContainer}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.backArrowImage}
              source={require('../assets/icons/Arrow_Back.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Authentication</Text>
        <Text style={styles.header}>Sucessfull</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.btnStyle, {backgroundColor: '#4B4FED'}]}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Auth_Sucessful;

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
  backArrowImageContainer: {
    backgroundColor: '#131313',
    width: Metrics.screenWidth * (15 / 100),
    height: Metrics.screenWidth * (15 / 100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 15,
  },
  backArrowImage: {
    paddingLeft: 20,
    resizeMode: 'contain',
    width: Metrics.screenWidth * (5 / 100),
    height: Metrics.screenHeight * (5 / 100),
  },
  textContainer: {
    marginTop: '10%',
    padding: 20,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
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
