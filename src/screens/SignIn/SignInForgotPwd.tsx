import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import IconCustom from '../../components/IconCustom';

interface SignInForgotPwdProps {
  isVisible: boolean;
  newPassword: string;
  onCopyNewPassword: () => void;
  onBackdropPress: () => void;
}

const SignInForgotPwd = ({
  isVisible = false,
  newPassword,
  onCopyNewPassword,
  onBackdropPress,
}: SignInForgotPwdProps) => {
  return (
    <Modal isVisible={isVisible} hasBackdrop onBackdropPress={onBackdropPress}>
      <Layout style={styles.modalContainer}>
        <Text category="h5" style={styles.header}>
          Reset Password
        </Text>

        <Layout style={styles.passwordContainer}>
          <Text category="s1" style={{color: '#3266ff'}}>
            New password:{' '}
          </Text>

          <IconCustom
            name="clipboard-outline"
            styleIcon={{width: 20, height: 20}}
            styleBtn={styles.passwordLayout}
            onPress={onCopyNewPassword}>
            <Text>{newPassword}</Text>
          </IconCustom>
        </Layout>
      </Layout>
    </Modal>
  );
};

export default SignInForgotPwd;

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 18,
  },

  header: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#3266ff',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  passwordLayout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d6d6d6',
    borderRadius: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: '#3266ff',
  },
});
