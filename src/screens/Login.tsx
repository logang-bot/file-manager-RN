import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  SignUpInGoogle,
  Login as LoginFeature,
} from '../features/authentication';
import Anchor from '../components/navigation/Anchor';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamsList} from '../navigation/AuthStack';

type navProps = NativeStackScreenProps<AuthStackParamsList, 'LogIn'>;

const Login = (props: navProps) => {
  const goSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Log in</Text>
        <Text>Welcome back!, use your credentials to continue</Text>
      </View>
      <LoginFeature style={styles.login} />
      <View style={styles.signGoogle}>
        <Text style={styles.subTitle}>Or use your Google account instead</Text>
        <SignUpInGoogle />
      </View>
      <View style={styles.helpContainer}>
        <Text>Don't have an account yet? </Text>
        <Anchor text="Create one" onPress={goSignUp} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {textAlign: 'center'},
  login: {
    flex: 2,
  },
  signGoogle: {
    flex: 1,
  },
  helpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
