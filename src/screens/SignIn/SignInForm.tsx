import {View, ViewStyle} from 'react-native';
import React from 'react';
import {Input, Text} from '@ui-kitten/components';

interface SignInFormProps {
  emailVal: string;
  onEmailChange: (e: string) => void;
  emailError?: string;
  passwordVal: string;
  onPasswordChange: (e: string) => void;
  passwordError?: string;
  onFocusInput: () => void;
}

const SignInForm = ({
  emailVal,
  onEmailChange,
  emailError,
  passwordVal,
  onPasswordChange,
  passwordError,
  onFocusInput,
}: SignInFormProps) => {
  return (
    <View>
      <Input
        label="Email"
        placeholder="Enter your email"
        value={emailVal}
        onChangeText={onEmailChange}
        onFocus={onFocusInput}
      />
      <Text style={{color: 'red', marginBottom: 10}}>{emailError}</Text>

      <Input
        label="Password"
        placeholder="Enter your password"
        value={passwordVal}
        secureTextEntry
        onChangeText={onPasswordChange}
        onFocus={onFocusInput}
      />

      <Text style={{color: 'red'}}>{passwordError}</Text>
    </View>
  );
};

export default SignInForm;
