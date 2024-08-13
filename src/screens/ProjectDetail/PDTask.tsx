import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconCustom from '../../components/IconCustom';

interface PDTaskProps {
  id: string;
  name: string;
  isCompleted: boolean;
  onUpdateTask: (a: string, b: boolean) => void;
}

const PDTask = ({id, name, isCompleted, onUpdateTask}: PDTaskProps) => {
  return (
    <View style={styles.container}>
      <IconCustom
        name="checkmark-outline"
        hidenIcon={!isCompleted}
        styleIcon={{width: 25, height: 25}}
        styleBtn={{
          ...styles.checkBtn,
          backgroundColor: isCompleted ? '#e8dbe5' : 'transparent',
        }}
        onPress={() => onUpdateTask(id, !isCompleted)}
      />

      <View style={styles.taskContainer}>
        <Text style={styles.taskName}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  checkBtn: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  taskContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBlockColor: '#d6d6d6  ',
    paddingVertical: 12,
  },

  taskName: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default PDTask;
