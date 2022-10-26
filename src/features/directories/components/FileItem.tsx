import React, {useRef} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from '../../../store';
import {fileSystemActions} from '../../../store/fileSystem';

import {timeAgo} from '../../../utils/TimeParser';
import {ILocalFile} from '../models/LocalFile';
import DirectoryOptions from './DirectoryOptions';

type FileItemProps = {
  item: ILocalFile;
};

const FileItem = ({item}: FileItemProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const refRBSheet = useRef<RBSheet>(null);

  const onPressMore = () => {
    refRBSheet.current!.open();
  };

  const onSelectFolder = () => {
    navigation.push('FileList', {currentPath: item.path});
    dispatch(fileSystemActions.getFilesFS(item.path));
  };

  return (
    <Pressable style={styles.container} onPress={onSelectFolder}>
      <View style={styles.mainContent}>
        {item.isDirectory ? (
          <Icon name="folder" size={32} />
        ) : (
          <Icon name="file" size={32} />
        )}
        <View style={styles.itemInfoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.size}</Text>
          <Text>{timeAgo.format(item.creationTime)}</Text>
        </View>
      </View>
      <FeatherIcon name="more-vertical" size={24} onPress={onPressMore} />
      <RBSheet ref={refRBSheet} closeOnDragDown={true} closeOnPressMask={true}>
        <DirectoryOptions file={item} />
      </RBSheet>
    </Pressable>
  );
};

export default FileItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  itemInfoContainer: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
