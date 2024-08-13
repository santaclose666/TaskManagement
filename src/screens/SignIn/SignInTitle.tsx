import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';

const SignInTitle = () => {
  return (
    <Text category="h1" style={styles.titleText}>
      Sign In
    </Text>
  );
};

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    marginBottom: 32,
    textDecorationLine: 'underline',
    color: '#3266ff',
  },
});

export default SignInTitle;
