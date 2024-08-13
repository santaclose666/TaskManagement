import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {task} from '../../models/task';
import PDTask from './PDTask';

interface PDBodyProps {
  unfinished: task[];
  completed: task[];
  onUpdateTask: (a: string, b: boolean) => void;
}

const PDBody = ({unfinished, completed, onUpdateTask}: PDBodyProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={unfinished}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <PDTask
            id={item.id}
            name={item.taskName}
            isCompleted={item.isCompleted}
            onUpdateTask={onUpdateTask}
          />
        )}
        ListHeaderComponent={
          <Text style={{marginTop: 5}} appearance="hint">
            NOT YET COMPLETED {`(${unfinished.length})`}
          </Text>
        }
      />

      <FlatList
        data={completed}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <PDTask
            id={item.id}
            name={item.taskName}
            isCompleted={item.isCompleted}
            onUpdateTask={onUpdateTask}
          />
        )}
        ListHeaderComponent={
          <Text style={{marginTop: 5}} appearance="hint">
            COMPLETED {`(${completed.length})`}
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 10, paddingHorizontal: '3%'},
});

export default PDBody;
