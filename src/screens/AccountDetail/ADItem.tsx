import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconCustom from '../../components/IconCustom';

interface ADItemProps {
  icon: string;
  text?: string;
  rightAction?: React.ReactNode;
  midAction?: React.ReactNode;
}

const ADItem = ({
  icon = 'moon-outline',
  text,
  rightAction,
  midAction,
}: ADItemProps) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconCustom
          name={icon}
          styleBtn={styles.btnIcon}
          styleIcon={{width: 25, height: 25}}
        />
        {text && <Text style={styles.text}>{text}</Text>}
        {midAction}
      </View>

      {rightAction}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    padding: 8,
    borderRadius: 12,
    marginBottom: 3,
  },

  btnIcon: {
    marginRight: 12,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  text: {
    fontSize: 18,
  },
});

export default ADItem;
