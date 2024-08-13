import React, {useState} from 'react';
import PCHeader from './PCHeader';
import {Layout} from '@ui-kitten/components';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import InputCustom from '../../components/InputCustom';
import {StyleSheet} from 'react-native';
import PCBody from './PCBody';
import {useDispatch, useSelector} from 'react-redux';
import {Project, task} from '../../models/task';
import {getRandomID} from '../../util/uuid';
import {addProject} from '../../redux/slice/projects';

interface ProjectCreatedProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProjectCreated = ({navigation}: ProjectCreatedProps) => {
  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [prjName, setPrjName] = useState('');
  const {data} = useSelector((state: any) => state.auth);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSubmit = (values: any) => {
    const {fields} = values;

    const newTasks: task[] = fields.map((item: any) => {
      const taksInfo: task = {
        id: getRandomID(),
        taskName: item.value,
        isCompleted: false,
      };

      return taksInfo;
    });

    const newProject = new Project(data.id, getRandomID(), prjName, newTasks);

    dispatch(addProject(newProject));

    handleBack();
  };

  return (
    <Layout style={{flex: 1, paddingTop: top, paddingHorizontal: '5%'}}>
      <PCHeader onBack={handleBack} />

      <InputCustom
        val={prjName}
        onValChange={setPrjName}
        placeholder="Enter your project name"
        containerStyle={styles.inputContainer}
      />

      <PCBody onSubmit={handleSubmit} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: '3%',
    padding: 12,
    borderRadius: 24,
  },

  dynamicFormStyle: {
    flexGrow: 1,
  },
});

export default ProjectCreated;
