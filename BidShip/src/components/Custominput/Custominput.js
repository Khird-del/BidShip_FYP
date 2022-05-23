import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Custominput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    width: '80%',
    marginVertical: 10,
  },
  input: {
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
  },
});
export default Custominput;
