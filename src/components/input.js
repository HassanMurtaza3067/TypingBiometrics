import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Metrics from '../theme/metrics';

const Input = ({
  label,
  selected,
  Filled_Icon,
  Unfilled_Icon,
  onFocus,
  placeholder,
  ...props
}) => {
  return (
    <View style={{paddingTop: 20}}>
      <Text style={[styles.paragraph, {paddingBottom: 10}]}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.icon}
          source={selected ? Filled_Icon : Unfilled_Icon}
        />
        <TextInput
          onFocus={onFocus}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#BDBDBD"
          keyboardType="email-address"
          secureTextEntry={true}
        />
        <TouchableOpacity>
          {/* <Image source={require(props[])}/> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
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
});
