import {StyleSheet, View} from 'react-native';
import React from 'react';
import IconCustom from '../../components/IconCustom';
import {Text} from '@ui-kitten/components';

interface ADHeaderProps {
  avt: string;
  email: string;
  onBack: () => void;
  onLogout: () => void;
}

const ADHeader = ({avt, email, onBack, onLogout}: ADHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBtnContainer}>
        <IconCustom
          name="arrow-ios-back-outline"
          styleIcon={styles.icon}
          onPress={onBack}
        />
        <IconCustom
          name="log-out-outline"
          styleIcon={styles.icon}
          onPress={onLogout}
        />
      </View>

      <View style={styles.avtContainer}>
        <IconCustom
          name={avt}
          styleIcon={{width: 66, height: 66}}
          styleBtn={styles.avtBtn}
        />
        <Text category="h5">{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },

  headerBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    width: 35,
    height: 35,
  },

  avtContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avtBtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    marginBottom: 6,
  },
});

export default ADHeader;
