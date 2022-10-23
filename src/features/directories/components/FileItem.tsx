import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import {ILocalFile} from '../models/LocalFile';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

type FileItemProps = {
  item: ILocalFile;
};

const FileItem = ({item}: FileItemProps) => {
  return (
    <View style={styles.container}>
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
      <FeatherIcon name="more-vertical" size={24} />
    </View>
  );
};

export default FileItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
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
