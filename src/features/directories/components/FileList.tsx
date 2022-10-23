import {FlatList} from 'react-native';
import React from 'react';
import FileItem from './FileItem';

type FileListProps = {
  data: [];
};

const FileList = (props: FileListProps) => {
  return (
    <FlatList
      data={props.data}
      renderItem={FileItem}
      keyExtractor={item => item.name}
    />
  );
};

export default FileList;
