import {StyleSheet} from 'react-native';
import React from 'react';

import {currentUser, signInWithGoogle} from '../services/FirebaseAuth';
import Button from '../../../components/ui/Button';
import {useAppDispatch} from '../../../store';
import {authActions} from '../../../store/auth';

const SignUpInGoogle = () => {
  const dispatch = useAppDispatch();
  const signInGoogle = async () => {
    try {
      await signInWithGoogle();
      console.log('Signed in with google');
      dispatch(authActions.logIn(currentUser?.toJSON() ?? {}));
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
