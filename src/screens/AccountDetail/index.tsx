import React, {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Account} from '../../models/account';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ADHeader from './ADHeader';
import {logout, updateUser} from '../../redux/slice/auth';
import {ScreenNames} from '../../navigate/navigateType';
import ADBody from './ADBody';
import {Layout} from '@ui-kitten/components';
import {Alert} from 'react-native';

interface AccountDetailProps {
  navigation: NavigationProp<ParamListBase>;
}

const AccountDetail = ({navigation}: AccountDetailProps) => {
  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const user: Account = useSelector((state: any) => state.auth.data);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');
  const [err, setErr] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    navigation.navigate(ScreenNames.signIn);

    // dispatch(logout());
  };

  const handleChangePassword = () => {
    if (newPassword !== newPasswordAgain || oldPassword !== user?.password) {
      setErr('Invalid password or new password are not match!');

      setTimeout(() => {
        setErr(null);
      }, 3000);
    } else {
      const newInfo: Account = {
        ...user,
        password: newPassword,
      };

      dispatch(updateUser(newInfo));

      setNewPassword('');
      setNewPasswordAgain('');
      setOldPassword('');
      Alert.alert('Password is changed');
    }
  };

  return (
    <Layout
      style={{
        paddingTop: top,
        flex: 1,
        paddingHorizontal: '5%',
      }}>
      <ADHeader
        avt={user?.avt}
        email={user?.email}
        onBack={handleBack}
        onLogout={handleLogout}
      />

      <ADBody
        email={user?.email}
        password={user?.password}
        oldPw={oldPassword}
        onOldPw={setOldPassword}
        newPw={newPassword}
        onNewPw={setNewPassword}
        newPwAgain={newPasswordAgain}
        onNewPwAgain={setNewPasswordAgain}
        error={err!}
        onSubmit={handleChangePassword}
        isEdit={isEdit}
        onEdit={setIsEdit}
      />
    </Layout>
  );
};

export default AccountDetail;
