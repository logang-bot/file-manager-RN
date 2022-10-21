import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SignUp} from '../features/authentication';
import {SignUpInGoogle} from '../features/authentication';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Anchor from '../components/navigation/Anchor';
import {AuthStackParamsList} from '../navigation/AuthStack';

type navProps = NativeStackScreenProps<AuthStackParamsList, 'SignUp'>;

const Signup = (props: navProps) => {
  const goLogin = () => {
    props.navigation.navigate('LogIn');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Sign Up</Text>
          <Text>Welcome, create your account filling the following form</Text>
        </View>
        <SignUp style={styles.signUp} />
        <View style={styles.signGoogle}>
          <Text style={styles.subTitle}>Or you can use</Text>
          <SignUpInGoogle />
        </View>
        <View style={styles.helpContainer}>
          <Text>Already have an account? </Text>
          <Anchor text="Log in" onPress={goLogin} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginTop: 30,
  },
  header: {},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {textAlign: 'center'},
  signUp: {
    marginVertical: 50,
  },
  signGoogle: {},
  helpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
});
