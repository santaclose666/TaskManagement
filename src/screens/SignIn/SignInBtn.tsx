import {View, ViewStyle} from 'react-native';
import React from 'react';
import {Button} from '@ui-kitten/components';

interface SignInBtnProps {
  onLogin: () => void;
  onForgotPassword: () => void;
  btnStyle: ViewStyle;
}

const SignInBtn = ({onLogin, onForgotPassword, btnStyle}: SignInBtnProps) => {
  return (
    <View>
      <Button onPress={onLogin} style={btnStyle}>
        Sign In
      </Button>

      <Button appearance="ghost" onPress={onForgotPassword}>
        Forgot your password?
      </Button>
    </View>
  );
};

export default SignInBtn;
