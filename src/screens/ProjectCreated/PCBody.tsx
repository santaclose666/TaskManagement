import {ScrollView, StyleSheet, View, Button, Pressable} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import DynamicForm from '../../components/DynamicForm';
import {FieldArray} from 'formik';
import InputCustom from '../../components/InputCustom';
import IconCustom from '../../components/IconCustom';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface PCBodyProps {
  onSubmit: (s: any) => void;
}

const PCBody = ({onSubmit}: PCBodyProps) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Layout style={{flex: 1, marginTop: '6%'}}>
      <Text category="p2">YOUR TASK</Text>

      <DynamicForm initVal={[{value: ''}]} onSubmit={onSubmit}>
        {({values, handleChange, handleBlur, handleSubmit, errors}) => (
          <>
            {console.log(errors)}
            <ScrollView style={{flexGrow: 1}}>
              <FieldArray name="fields">
                {({push, remove}) => (
                  <View>
                    {values?.fields?.map((field, index) => (
                      <InputCustom
                        key={index}
                        name={`fields[${index}].value`}
                        val={field.value}
                        onValChange={handleChange(`fields[${index}].value`)}
                        onBlur={handleBlur(`fields[${index}].value`)}
                        placeholder="Enter value"
                        containerStyle={{
                          ...styles.inputContainer,
                          borderColor:
                            errors?.fields && errors?.fields[index]
                              ? 'red'
                              : 'gray',
                        }}
                        inputStyle={{flexGrow: 1}}>
                        <IconCustom
                          name="close-outline"
                          color="black"
                          styleIcon={{width: 20, height: 20}}
                          onPress={() => remove(index)}
                        />
                      </InputCustom>
                    ))}
                    <Button
                      title="Add more task"
                      onPress={() => push({value: ''})}
                    />
                  </View>
                )}
              </FieldArray>
            </ScrollView>

            <Pressable
              style={[styles.createBtn, {marginBottom: bottom}]}
              onPress={handleSubmit}>
              <Text category="h6" style={styles.createText}>
                Create
              </Text>
            </Pressable>
          </>
        )}
      </DynamicForm>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  createBtn: {
    backgroundColor: 'black',
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  createText: {
    color: 'white',
  },
});

export default PCBody;
