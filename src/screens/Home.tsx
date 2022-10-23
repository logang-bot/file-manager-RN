import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamsList} from '../navigation/MainStack';
import {getDirectories} from '../features/directories/lib/FileSystem';
import {CreateDirectory} from '../features/directories';
import {RootState} from '../store';
import FileList from '../features/directories/components/FileList';

type navProps = NativeStackScreenProps<MainStackParamsList, 'Home'>;

const Home = ({navigation}: navProps) => {
  const [isShowingDialog, setIsShowingDialog] = useState(false);
  const fileSystem = useSelector((state: RootState) => state.fileSystem);

  const createFolder = () => {
    // dispatch(createFolderThunk('test'));
    // makeDirectory('test');
    // getDirectories('test');
    setIsShowingDialog(true);
    console.log('showing dialog');
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
    <View style={styles.container}>
      <FileList data={fileSystem.files} />
      <CreateDirectory
        visible={isShowingDialog}
        onTouchOutside={() => setIsShowingDialog(false)}
      />
    </View>
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
