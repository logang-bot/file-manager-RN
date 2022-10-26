import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';

import {useAppSelector, useAppDispatch} from '../../../store';
import {fileSelector, fileSystemActions} from '../../../store/fileSystem';
import FileItem from './FileItem';
import {HomeStackParamsList} from '../../../navigation/HomeStack';

type navProps = NativeStackScreenProps<HomeStackParamsList, 'FileList'>;

const FileList = ({navigation, route}: navProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(route);
    const test = () => {
      console.log('some');
      console.log(route);
      const previousPath = route.params?.currentPath.substring(
        0,
        route.params?.currentPath.lastIndexOf('/'),
      );
      if (previousPath) {
        dispatch(fileSystemActions.getFilesFS(previousPath));
      }
    };
    navigation.addListener('blur', test);
  }, [navigation, route, dispatch]);

  const fileSystem = useAppSelector(state => state.fileSystem);
  if (fileSelector.selectAll(fileSystem).length === 0) {
    return (
      <View>
        <Text>There are no files here yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={fileSelector.selectAll(fileSystem)}
      renderItem={({item}) => <FileItem item={item} />}
      keyExtractor={item => item.name}
    />
  );
};

export default FileList;
