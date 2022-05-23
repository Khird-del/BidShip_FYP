import React from 'react';
import {View, Text, StyleSheet, ScrollView, _ScrollView} from 'react-native';
import Custominput from '../../components/Custominput';
import {useState} from 'react';
import Custombutton from '../../components/Custombuttons/Custombutton';

import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const {user, setUser} = useState('');
  const {pass, setPass} = useState('');
  const {email, setEmail} = useState('');
  const {passRepeat, setPassRepeat} = useState('');

  const Navigation = useNavigation();

  const onTermPress = () => {
    console.warn('Term of use pressed');
  };
  const onPolicyPress = () => {
    console.warn('Police pressed');
  };
  const onSignupPress = () => {
    Navigation.navigate('ConfirmEmail');
  };
  const onSigninPress = () => {
    Navigation.navigate('Signin');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <Custominput value={email} setValue={setEmail} placeholder="Email" />
        <Custominput value={user} setValue={setUser} placeholder="username" />
        <Custominput
          value={pass}
          setValue={setPass}
          placeholder="password"
          secureTextEntry={true}
        />
        <Custominput
          value={passRepeat}
          setValue={setPassRepeat}
          placeholder="Confirm password"
          secureTextEntry={true}
        />
        <Custombutton value="Sign Up" onPressthis={onSignupPress} />

        <Text style={styles.text}>
          By pressing Sign up,you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermPress}>
            Terms of use{' '}
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPolicyPress}>
            Privacy policy
          </Text>
          <Custombutton
            value="Already have an account? Sign in"
            onPressthis={onSigninPress}
            type="tertiary"
          />
        </Text>
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

export default SignupScreen;
