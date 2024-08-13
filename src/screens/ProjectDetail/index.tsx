import {StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {Project, state, task} from '../../models/task';
import PDHeader from './PDHeader';
import PDBody from './PDBody';
import {useDispatch} from 'react-redux';
import {updateProject} from '../../redux/slice/projects';

interface ProjectDetailProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
}

const ProjectDetail = ({navigation, route}: ProjectDetailProps) => {
  const {projectName, dateCreated, taskState, tasks}: Project =
    route.params?.data;

  const dispatch = useDispatch();
  const [allTasks, setAllTasks] = useState(tasks);
  const [taskS, setTaskS] = useState(taskState);

  const unfinished = useMemo(() => {
    return allTasks.filter(item => !item.isCompleted);
  }, [allTasks]);
  const completed = useMemo(() => {
    return allTasks.filter(item => item.isCompleted);
  }, [allTasks]);

  const handleBack = () => {
    navigation.goBack();
  };

  const updateTaskState = (taskId: string, newState: boolean) => {
    const project = route.params?.data;

    const {complete, notComplete}: state = taskS;

    const newTaskList = allTasks.map((item: task) =>
      item.id == taskId ? {...item, isCompleted: newState} : item,
    );
    const newTaskState = {
      complete: newState ? complete + 1 : complete - 1,
      notComplete: newState ? notComplete - 1 : notComplete + 1,
    };

    const newProject: Project = {
      ...project,
      tasks: newTaskList,
      taskState: newTaskState,
    };

    setAllTasks(newTaskList);
    setTaskS(newTaskState);

    dispatch(updateProject(newProject));
  };

  return (
    <View style={styles.container}>
      <PDHeader
        prjName={projectName}
        dateCreated={dateCreated}
        taskState={taskS}
        onBack={handleBack}
      />

      <PDBody
        unfinished={unfinished}
        completed={completed}
        onUpdateTask={updateTaskState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2%',
  },
});

export default ProjectDetail;
