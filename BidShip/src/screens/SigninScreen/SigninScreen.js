import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  _ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo.jpg';
import Custominput from '../../components/Custominput';
import {useState} from 'react';
import Custombutton from '../../components/Custombuttons/Custombutton';

import {useNavigation} from '@react-navigation/native';

const SigninScreen = () => {
  const {height} = useWindowDimensions();
  const {user, setUser} = useState('');
  const {pass, setPass} = useState('');

  const Navigation = useNavigation();

  const onSigninPress = () => {
    Navigation.navigate('Home');
  };
  const onForgotPress = () => {
    Navigation.navigate('ForgotPassword');
  };
  const onSignupPress = () => {
    Navigation.navigate('Signup');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <Custominput value={user} setValue={setUser} placeholder="username" />
        <Custominput
          value={pass}
          setValue={setPass}
          placeholder="password"
          secureTextEntry={true}
        />
        <Custombutton value="Sign In" onPressthis={onSigninPress} />
        <Custombutton
          value="Forgot Password?"
          onPressthis={onForgotPress}
          type="tertiary"
        />
        <Custombutton
          value="Don't have an account? Create one"
          onPressthis={onSignupPress}
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
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 400,
  },
});

export default SigninScreen;
