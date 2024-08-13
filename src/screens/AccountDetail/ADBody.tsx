import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Text} from '@ui-kitten/components';
import ADItem from './ADItem';
import Switch from '../../components/SwitchCustom';
import {useDispatch, useSelector} from 'react-redux';
import {toggleMode} from '../../redux/slice/setting';
import IconCustom from '../../components/IconCustom';
import InputCustom from '../../components/InputCustom';

interface ADBody {
  email: string;
  oldPw: string;
  onOldPw: (s: string) => void;
  password: string;
  newPw: string;
  onNewPw: (s: string) => void;
  newPwAgain: string;
  onNewPwAgain: (s: string) => void;
  error?: string;
  onSubmit: () => void;
  isEdit: boolean;
  onEdit: (s: boolean) => void;
}

const ADBody = ({
  email,
  password,
  oldPw,
  onOldPw,
  newPw,
  onNewPw,
  newPwAgain,
  onNewPwAgain,
  error,
  isEdit,
  onEdit,
  onSubmit,
}: ADBody) => {
  const dispatch = useDispatch();
  const passSecure = '*'.repeat(password.length);
  const {darkMode} = useSelector((state: any) => state.setting);

  const handleToggleMode = (s: boolean) => {
    dispatch(toggleMode(s));
  };

  return (
    <View style={styles.contaier}>
      <Text appearance="hint">Theme</Text>

      <View style={{marginVertical: 6}}>
        <ADItem
          icon={darkMode ? 'moon-outline' : 'sun-outline'}
          text={`Mode: ${darkMode ? 'Dark Mode' : 'Light Mode'}`}
          rightAction={
            <Switch
              initActive={darkMode}
              activeColor="blue"
              inActiveColor="orange"
              onActive={handleToggleMode}
            />
          }
        />
      </View>

      <Text appearance="hint">Settings</Text>

      <View style={{marginVertical: 6}}>
        <ADItem icon="email-outline" text={`Email: ${email}`} />
        <ADItem
          icon="lock-outline"
          text={!isEdit ? `Password: ${passSecure}` : null}
          midAction={
            isEdit && (
              <InputCustom
                val={oldPw}
                onValChange={onOldPw}
                placeholder="Enter current password"
                inputStyle={styles.input}
                textSecure
              />
            )
          }
          rightAction={
            <IconCustom
              name="edit-2-outline"
              styleIcon={{width: 25, height: 25}}
              onPress={() => onEdit(!isEdit)}
            />
          }
        />
        {isEdit && (
          <>
            <ADItem
              icon="unlock-outline"
              midAction={
                <InputCustom
                  val={newPw}
                  onValChange={onNewPw}
                  placeholder="Enter new password"
                  inputStyle={styles.input}
                  textSecure
                />
              }
            />
            <ADItem
              icon="unlock-outline"
              midAction={
                <InputCustom
                  val={newPwAgain}
                  onValChange={onNewPwAgain}
                  placeholder="Enter new password again"
                  inputStyle={styles.input}
                  textSecure
                />
              }
            />

            {error && <Text style={{color: 'red'}}>{error}</Text>}

            <IconCustom
              name="done-all-outline"
              styleIcon={{width: 30, height: 30}}
              styleBtn={styles.btn}
              onPress={onSubmit}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flexGrow: 2,
  },

  input: {
    flexGrow: 1,
    backgroundColor: '#f3f3f3',
  },

  btn: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
    marginTop: 12,
  },
});

export default ADBody;
