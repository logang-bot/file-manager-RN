import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {useAppDispatch} from '../../../store';

import {
  signInWithEmailAndPassword,
  currentUser,
} from '../services/FirebaseAuth';

import Button from '../../../components/ui/Button';
import Input from '../../../components/form/Input';
import {GlobalColors} from '../../../data/GlobalColors';

import {authActions} from '../../../store/auth';

type TypeSignUpProps = {
  style?: {};
};

const Signup = (props: TypeSignUpProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const dispatch = useAppDispatch();

  const signupUser = async () => {
    if (name === '' || password === '') {
      setError('Some fields are empty');
      return;
    }
    const result = await signInWithEmailAndPassword(
      email.trim(),
      password.trim(),
    );
    console.log(result);
    if (result !== 'Done') {
      setError(result);
      return;
    }
    if (password !== confirmPass) {
      setError("The passwords doesn't match");
      return;
    }
    dispatch(authActions.logIn({user: currentUser}));
  };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <Input
          placeholder="John Doe"
          onChangeText={text => {
            setName(text);
          }}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <Input
          placeholder="john@doe.com"
          onChangeText={text => {
            setEmail(text);
          }}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <Input
          placeholder="*********"
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Confirm Password</Text>
        <Input
          placeholder="*********"
          onChangeText={text => {
            setConfirmPass(text);
          }}
          value={confirmPass}
        />
      </View>
      <Button text="Signup" onPress={signupUser} style={styles.button} />
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    marginVertical: 5,
  },
  button: {
    marginVertical: 10,
  },
  textError: {
    color: GlobalColors.errorColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
