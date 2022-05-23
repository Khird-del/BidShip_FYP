import React from 'react';
import {View, Text, StyleSheet, ScrollView, _ScrollView} from 'react-native';
import Custominput from '../../components/Custominput';
import {useState} from 'react';
import Custombutton from '../../components/Custombuttons/Custombutton';

import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const {code, setCode} = useState('');

  const onConfirmPress = () => {
    Navigation.navigate('Home');
  };

  const onBacktoSigninPress = () => {
    Navigation.navigate('Signin');
  };

  const onResendPress = () => {
    console.warn('Resend pressed');
  };

  const Navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>

        <Custominput
          value={code}
          setValue={setCode}
          placeholder="Confirmation Code"
        />

        <Custombutton value="Confirm your Email" onPressthis={onConfirmPress} />
        <Custombutton
          value="resend Code"
          onPressthis={onResendPress}
          type="tertiary"
        />
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

export default ConfirmEmailScreen;
