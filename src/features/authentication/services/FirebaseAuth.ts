import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    return 'Done';
  } catch (error) {
    return (error as Error).message.split(' ').slice(1).join(' ');
  }
};

export const logInWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return 'Done';
  } catch (error) {
    return (error as Error).message.split(' ').slice(1).join(' ');
  }
};

export const signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      webClientId: Config.WEB_CLIENT_ID,
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    return error as Error;
  }
};

export const currentUser = auth().currentUser;
export const logoutUser = () => {
  auth().signOut();
};
