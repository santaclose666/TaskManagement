import {ViewStyle} from 'react-native';
import React from 'react';
import {Layout, Input} from '@ui-kitten/components';
// import {TextInput} from 'react-native-gesture-handler';

interface InputCustomProps {
  val: string;
  onValChange: (v: string) => void;
  onBlur?: () => void;
  name?: string;
  placeholder?: string;
  inputStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
  textSecure?: boolean;
}

const InputCustom = ({
  val,
  onValChange,
  onBlur,
  name,
  placeholder,
  inputStyle,
  containerStyle,
  children,
  textSecure = false,
}: InputCustomProps) => {
  return (
    <Layout style={containerStyle}>
      <Input
        name={name}
        value={val}
        onChangeText={onValChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          ...inputStyle,
        }}
        secureTextEntry={textSecure}
      />
      {children}
    </Layout>
  );
};

export default InputCustom;
