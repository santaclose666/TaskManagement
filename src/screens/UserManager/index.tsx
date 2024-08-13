import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, Layout} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {Account} from '../../models/account';
import IconCustom from '../../components/IconCustom';
import {promoteUsers, removeUsers} from '../../redux/slice/users';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface UserManagerProps {
  navigation: NavigationProp<ParamListBase>;
}

const UserManager = ({navigation}: UserManagerProps) => {
  const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {data} = useSelector((state: any) => state.auth);
  const {users} = useSelector((state: any) => state.users);

  const handleBack = () => {
    navigation.goBack();
  };

  const handlePromote = (id: string) => {
    dispatch(promoteUsers(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeUsers(id));
  };

  const renderItem = ({item}: {item: Account}) => {
    if (data.id === item.id) return;

    const isAdmin = item.role === 'admin';

    return (
      <View style={styles.cardContent}>
        <IconCustom
          name={item.avt}
          color={isAdmin ? 'green' : 'orange'}
          styleIcon={{width: 55, height: 55}}
        />
        <View>
          <Text category="h6">{item.email}</Text>
          <Text category="s1">role: {item.role}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <IconCustom
            name="arrowhead-up-outline"
            styleIcon={styles.icon}
            disable={isAdmin}
            color={isAdmin ? 'gray' : 'green'}
            styleBtn={styles.button}
            onPress={() => handlePromote(item.id)}
          />
          <IconCustom
            name="person-remove-outline"
            color="red"
            styleIcon={styles.icon}
            styleBtn={styles.button}
            onPress={() => handleRemove(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <Layout style={[styles.container, {paddingTop: top}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IconCustom
          name="arrow-ios-back-outline"
          styleIcon={{width: 30, height: 30}}
          onPress={handleBack}
        />
        <Text category="h4" style={{textAlign: 'center'}}>
          User Managerment
        </Text>
      </View>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    </Layout>
  );
};

export default UserManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
  },

  cardContent: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    marginBottom: 5,
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 30,
    height: 30,
  },
});
