import {StyleSheet, View} from 'react-native';
import React from 'react';
import {getRandomColor} from '../../util/colors';
import IconCustom from '../../components/IconCustom';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '@ui-kitten/components';
import {state} from '../../models/task';

interface PDHeaderProps {
  prjName: string;
  dateCreated: string;
  taskState: state;
  onBack: () => void;
}

const PDHeader = ({prjName, dateCreated, taskState, onBack}: PDHeaderProps) => {
  const {top} = useSafeAreaInsets();
  const {complete, notComplete} = taskState;

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <IconCustom
        name="arrow-ios-back-outline"
        styleIcon={{width: 25, height: 25}}
        styleBtn={styles.backBtn}
        onPress={onBack}
      />

      <View style={styles.prjInfoContainer}>
        <View>
          <Text category="h4">{prjName}</Text>
          <Text category="s2">{dateCreated}</Text>
        </View>

        <Text>{`Complete ${complete}/${complete + notComplete} tasks`}</Text>
      </View>
    </View>
  );
};

export default PDHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: getRandomColor(),
    marginVertical: 12,
    borderRadius: 30,
    padding: 12,
  },
  backBtn: {
    padding: 15,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: '4%',
  },

  prjInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
