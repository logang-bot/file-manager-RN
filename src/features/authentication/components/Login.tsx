import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../../components/ui/Button';
import Input from '../../../components/form/Input';
import {logInWithEmailAndPassword} from '../services/FirebaseAuth';
import {currentUser} from '../services/FirebaseAuth';

import {useAppDispatch} from '../../../store';
import {authActions} from '../../../store/auth';
import {GlobalColors} from '../../../data/GlobalColors';

type TypeLoginProps = {
  style?: {};
};

const Login = (props: TypeLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();

  const loginUser = async () => {
    if (email === '' || password === '') {
      setError('Some fields are empty');
      return;
    }
    const result = await logInWithEmailAndPassword(email, password);
    if (result !== 'Done') {
      setError(result);
      return;
    }
    dispatch(authActions.logIn(currentUser?.toJSON() ?? {}));
  };
  return (
    <View style={[styles.container, props.style]}>
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
          secureTextEntry={true}
          onChangeText={text => {
            setPassword(text);
          }}
          value={password}
        />
      </View>
      <Button
        text="Login"
        onPress={loginUser}
        style={styles.button}
        IconEnd={<Icon name="arrow-right" size={20} color="white" />}
      />
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 5,
  },
  button: {
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
  },
  textError: {
    color: GlobalColors.errorColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
