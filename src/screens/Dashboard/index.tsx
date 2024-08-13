import {StyleSheet} from 'react-native';
import React from 'react';
import {Layout} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import DBHeader from './DBHeader';
import IconCustom from '../../components/IconCustom';
import {ScreenNames} from '../../navigate/navigateType';
import DBList from './DBList';
import useQueryProject from '../../hooks/useQueryProject';
import {removeProject} from '../../redux/slice/projects';

interface DashboardProps {
  navigation: NavigationProp<ParamListBase>;
}

const Dashboard = ({navigation}: DashboardProps) => {
  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {data} = useSelector((state: any) => state.auth);
  const projects = useQueryProject(data?.id);

  const handleNavigate = (screen: ScreenNames, data?: any) => {
    navigation.navigate(screen, {data});
  };

  const handleRemove = (id: string) => {
    dispatch(removeProject(id));
  };

  return (
    <Layout style={[styles.container, {paddingTop: top}]}>
      <DBHeader
        user={data}
        projectNumber={projects.length}
        onNavigate={handleNavigate}
      />

      <DBList
        data={projects}
        onNavigate={handleNavigate}
        onRemove={handleRemove}
      />

      <IconCustom
        name="plus-outline"
        color="#0db8ea"
        styleIcon={styles.addIcon}
        styleBtn={styles.addIconContainer}
        onPress={() => handleNavigate(ScreenNames.projectCreated)}
      />

      {data.role === 'admin' && (
        <IconCustom
          name="people-outline"
          color="#90d5b6"
          styleIcon={styles.addIcon}
          styleBtn={{...styles.addIconContainer, bottom: '16%'}}
          onPress={() => handleNavigate(ScreenNames.userMangager)}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '4%',
  },

  addIconContainer: {
    position: 'absolute',
    bottom: '8%',
    right: '6%',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#eeeff4',
  },

  addIcon: {
    width: 30,
    height: 30,
  },
});

export default Dashboard;
