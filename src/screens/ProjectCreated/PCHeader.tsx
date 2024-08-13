import {StyleSheet} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import IconCustom from '../../components/IconCustom';

interface PCHeaderProps {
  onBack: () => void;
}

const PCHeader = ({onBack}: PCHeaderProps) => {
  return (
    <Layout>
      <IconCustom
        name="close-outline"
        color="black"
        styleIcon={styles.backIcon}
        styleBtn={styles.backBtn}
        onPress={onBack}
      />
      <Text category="h3">New Project</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: '3%',
  },

  backIcon: {
    width: 25,
    height: 25,
  },
});

export default PCHeader;
