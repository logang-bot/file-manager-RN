import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {signInWithGoogle} from '../services/FirebaseAuth';
import Button from '../../../components/ui/Button';

const SignUpInGoogle = () => {
  const signInGoogle = async () => {
    try {
      await signInWithGoogle();
      console.log('Signed in with google');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      text="Sign In with Google"
      onPress={signInGoogle}
      imageStart={require('../assets/google.png')}
      style={styles.button}
    />
  );
};

export default SignUpInGoogle;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    marginVertical: 5,
  },
});
