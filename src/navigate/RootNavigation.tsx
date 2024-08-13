import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import SignIn from '../screens/SignIn';
import AccountDetail from '../screens/AccountDetail';
import {RootStackList, ScreenNames} from './navigateType';
import ProjectCreated from '../screens/ProjectCreated';
import ProjectDetail from '../screens/ProjectDetail';
import {useSelector} from 'react-redux';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import UserManager from '../screens/UserManager';
import {Account} from '../models/account';

const {
  dashboard,
  signIn,
  accountDetail,
  projectCreated,
  projectDetail,
  userMangager,
} = ScreenNames;

const {Navigator, Screen} = createStackNavigator<RootStackList>();

const RootNavigation = () => {
  const {data}: {data: Account} = useSelector((state: any) => state.auth);
  const {darkMode} = useSelector((state: any) => state.setting);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={darkMode ? eva.dark : eva.light}>
        <NavigationContainer>
          <Navigator
            initialRouteName={data?.id ? dashboard : signIn}
            screenOptions={{headerShown: false}}>
            <Screen name={signIn} component={SignIn} />
            <Screen name={dashboard} component={Dashboard} />
            <Screen name={accountDetail} component={AccountDetail} />
            <Screen name={projectCreated} component={ProjectCreated} />
            <Screen name={projectDetail} component={ProjectDetail} />
            {data?.role === 'admin' && (
              <Screen name={userMangager} component={UserManager} />
            )}
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default RootNavigation;
