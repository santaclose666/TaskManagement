import {
  FlatList,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {Project} from '../../models/task';
import {Pie, PolarChart} from 'victory-native';
import {Text} from '@ui-kitten/components';
import {ScreenNames} from '../../navigate/navigateType';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import IconCustom from '../../components/IconCustom';
import {getRandomColor} from '../../util/colors';

interface DBListProps {
  data: Project[];
  onNavigate: (s: ScreenNames, data: any) => void;
  onRemove: (id: string) => void;
}

const notCompleteCl = '#f44336',
  completeCl = '#4db6ac';

const DBList = ({data, onNavigate, onRemove}: DBListProps) => {
  const {width} = useWindowDimensions();
  const chartSize = width / 3.5;

  const RenderProject = useCallback(
    ({item}: {item: Project}) => {
      const {id, projectName, dateCreated, taskState} = item;
      const {complete, notComplete} = taskState;

      const DATA = useMemo(
        () => [
          {label: 'Completed', value: complete, color: completeCl},
          {
            label: 'Not Completed',
            value: notComplete,
            color: notCompleteCl,
          },
        ],
        [taskState],
      );

      return (
        <Swipeable
          renderRightActions={() => {
            return (
              <IconCustom
                name="trash-2-outline"
                styleIcon={{width: 35, height: 35}}
                color="red"
                styleBtn={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}
                onPress={() => onRemove(id)}
              />
            );
          }}>
          <Pressable
            onPress={() => onNavigate(ScreenNames.projectDetail, item)}
            style={[styles.prjContainer, {backgroundColor: getRandomColor()}]}>
            <View style={styles.prjLeftContainer}>
              <View style={{flexGrow: 1}}>
                <Text category="h5" style={styles.prjTitle}>
                  {projectName}
                </Text>
                <Text appearance="hint" style={styles.dateText}>
                  {dateCreated}
                </Text>
              </View>
              <Text appearance="hint" style={styles.dateText}>
                {`${complete}/${complete + notComplete} tasks are completed`}
              </Text>
            </View>
            <View
              style={{
                width: chartSize,
                height: chartSize,
              }}>
              <PolarChart
                data={DATA}
                labelKey={'label'}
                valueKey={'value'}
                colorKey={'color'}>
                <Pie.Chart />
              </PolarChart>
            </View>
          </Pressable>
        </Swipeable>
      );
    },
    [data],
  );

  return (
    <View style={styles.container}>
      <View style={styles.annotationContainer}>
        <View style={styles.descContainer}>
          <View style={[styles.colorDesc, {backgroundColor: completeCl}]} />
          <Text>Completed</Text>
        </View>

        <View style={styles.descContainer}>
          <View style={[styles.colorDesc, {backgroundColor: notCompleteCl}]} />
          <Text>Not Yet Complete</Text>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RenderProject item={item} />}
        getItemLayout={(_, index) => ({
          length: chartSize * 1.1,
          offset: chartSize * 1.1 * index,
          index,
        })}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No projects available!</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 18,
    marginTop: 20,
  },

  prjContainer: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
  },

  prjLeftContainer: {
    flex: 1,
    paddingRight: 16,
  },

  prjTitle: {
    fontWeight: '600',
    color: '#333',
  },

  dateText: {
    color: '#555',
  },

  annotationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '4%',
  },

  descContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  colorDesc: {
    width: 30,
    height: 20,
    marginRight: 4,
    borderRadius: 6,
  },
});

export default DBList;
