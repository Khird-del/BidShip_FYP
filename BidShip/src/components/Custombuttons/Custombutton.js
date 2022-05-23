import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Custombutton = ({value, onPressthis, type = 'primary'}) => {
  return (
    <Pressable
      onPress={onPressthis}
      style={[styles.container, styles[`container_${type}`]]}>
      <View>
        <Text style={[styles.text, styles[`text_${type}`]]}>{value}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: '#3b71F3',
  },
  container_tertiary: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_tertiary: {
    color: 'gray',
  },
});

export default Custombutton;
