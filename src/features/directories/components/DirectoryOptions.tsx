import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch} from '../../../store';
import {fileSystemActions} from '../../../store/fileSystem';
import {ILocalFile} from '../models/LocalFile';

type Props = {
  file: ILocalFile;
};

const DirectoryOptions = ({file}: Props) => {
  const dispatch = useAppDispatch();
  const removeFile = () => {
    console.log('removing');
    dispatch(fileSystemActions.removeFolderFs(file));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Directory Options</Text>
      <Pressable style={styles.option}>
        <Icon name="folder-edit-outline" size={24} style={styles.icon} />
        <Text>Rename</Text>
      </Pressable>
      <Pressable style={styles.option} onPress={removeFile}>
        <Icon name="delete-outline" size={24} style={styles.icon} />
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
};

export default DirectoryOptions;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});
