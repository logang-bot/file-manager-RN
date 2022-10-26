import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {MainStackParamsList} from '../navigation/MainStack';

import {CreateDirectory} from '../features/directories';
import FileList from '../features/directories/components/FileList';
import {HomeStackParamsList} from '../navigation/HomeStack';

type navProps = NativeStackScreenProps<MainStackParamsList, 'Home'>;

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const Home = ({navigation}: navProps) => {
  const [isShowingDialog, setIsShowingDialog] = useState(false);

  const createFolder = () => {
    setIsShowingDialog(true);
  };

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: ({tintColor}) => (
        <View style={styles.buttonsContainer}>
          <Icon
            name="file-plus-outline"
            size={32}
            color={tintColor}
            style={styles.icon}
          />
          <Icon
            name="folder-plus-outline"
            size={32}
            color={tintColor}
            style={styles.icon}
            onPress={createFolder}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="FileList"
            component={FileList}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <CreateDirectory
        visible={isShowingDialog}
        onTouchOutside={() => setIsShowingDialog(false)}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
});
