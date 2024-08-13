import {StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {Account} from '../../models/account';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {ScreenNames} from '../../navigate/navigateType';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
import SignInTitle from './SignInTitle';
import SignInForm from './SignInForm';
import SignInBtn from './SignInBtn';
import SignInForgotPwd from './SignInForgotPwd';
import {Formik} from 'formik';
import {login} from '../../redux/slice/auth';
import {SignInSchema} from '../../schema/formVerify';

interface SignInProps {
  navigation: NavigationProp<ParamListBase>;
}

const passwordReset = '12345678';
const AnimateText = Animated.createAnimatedComponent(Text);

const SignIn = ({navigation}: SignInProps) => {
  const dispatch = useDispatch();
  const isError = useSharedValue<number>(0);
  const {users} = useSelector((state: any) => state.users);
  const [forgotPwdModal, setForgotPwdModal] = useState(false);

  const errorAnimated = (state: number) => {
    isError.value = withTiming(state, {duration: 500});
  };

  const verifyUser = (email: string, password: string) => {
    const user = users.find(
      (item: Account) => item.email === email && item.password === password,
    );

    return user;
  };

  const handleLogin = (values: {email: string; password: string}) => {
    const data = verifyUser(values.email, values.password);

    if (data) {
      dispatch(login(data));

      navigation.navigate(ScreenNames.dashboard);
    }

    errorAnimated(1);
  };

  const handleForgotPassword = useCallback(
    (state: boolean) => {
      setForgotPwdModal(state);
    },
    [forgotPwdModal],
  );

  const handleCopy = () => {
    Clipboard.setString(passwordReset);
    handleForgotPassword(false);
  };

  const errorStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(isError.value, [0, 1], [0, 1]),
    }),
    [isError.value],
  );

  return (
    <Layout style={styles.layoutContainer}>
      <SignInTitle />

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={SignInSchema}
        onSubmit={handleLogin}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <SignInForm
              emailVal={values.email}
              onEmailChange={handleChange('email')}
              emailError={errors.email}
              passwordVal={values.password}
              onPasswordChange={handleChange('password')}
              passwordError={errors.password}
              onFocusInput={() => errorAnimated(0)}
            />

            <AnimateText style={[errorStyle, {color: 'red'}]}>
              Incorrect email or password!
            </AnimateText>

            <SignInBtn
              onLogin={handleSubmit}
              onForgotPassword={() => handleForgotPassword(true)}
              btnStyle={styles.input}
            />
          </>
        )}
      </Formik>

      <SignInForgotPwd
        isVisible={forgotPwdModal}
        newPassword={passwordReset}
        onCopyNewPassword={handleCopy}
        onBackdropPress={() => handleForgotPassword(false)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },

  input: {marginBottom: 16},
});

export default SignIn;
