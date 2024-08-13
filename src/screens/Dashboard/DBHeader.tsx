import {StyleSheet} from 'react-native';
import React from 'react';
import {Account} from '../../models/account';
import {Layout, Text} from '@ui-kitten/components';
import IconCustom from '../../components/IconCustom';
import {ScreenNames} from '../../navigate/navigateType';

interface DBHeaderProps {
  user: Account;
  projectNumber: number;
  onNavigate: (s: ScreenNames) => void;
}

const DBHeader = ({user, projectNumber, onNavigate}: DBHeaderProps) => {
  return (
    <Layout>
      <Text category="p1">Hello, {user?.email}</Text>
      <Layout style={styles.infoContainer}>
        <Text category="h2">{`Your\n Projects (${projectNumber})`}</Text>
        <IconCustom
          name={user?.avt}
          color="green"
          styleIcon={styles.avt}
          styleBtn={styles.avtContainer}
          onPress={() => onNavigate(ScreenNames.accountDetail)}
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avtContainer: {
    padding: 10,
    backgroundColor: '#edf1f7',
    borderRadius: 50,
  },

  avt: {
    width: 45,
    height: 45,
  },
});

export default DBHeader;
