import React from 'react';
import {View, Text, StyleSheet, ScrollView, _ScrollView} from 'react-native';
import Custominput from '../../components/Custominput';
import {useState} from 'react';
import Custombutton from '../../components/Custombuttons/Custombutton';

import {useNavigation} from '@react-navigation/native';

const ResetPasswordScreen = () => {
  const {password, setPassword} = useState('');
  const {code, setCode} = useState('');

  const onConfirmPress = () => {
    console.warn('Confirm pressed');
  };

  const onBacktoSigninPress = () => {
    Navigation.navigate('Signin');
  };

  const Navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

        <Custominput
          value={password}
          setValue={setPassword}
          placeholder="New Password"
          secureTextEntry={true}
        />
        <Custominput value={code} setValue={setCode} placeholder="Code" />

        <Custombutton value="Confirm" onPressthis={onConfirmPress} />

        <Custombutton
          value=" <- Back to Sign in"
          onPressthis={onBacktoSigninPress}
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    margin: 20,
  },
  link: {
    color: '#FDB075',
  },
});
export default ResetPasswordScreen;
