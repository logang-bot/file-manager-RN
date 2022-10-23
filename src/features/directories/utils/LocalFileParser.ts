import RNFS, {ReadDirItem} from 'react-native-fs';
import {ILocalFile} from '../models/LocalFile';

export const convertToLocalFile = (data: ReadDirItem): ILocalFile => {
  const finalFile: ILocalFile = {
    isDirectory: data.isDirectory(),
    isFile: data.isFile(),
    creationTime: data.mtime?.getTime() ?? Date.now(),
    name: data.name,
    path: data.path,
    size: data.size,
  };
  return finalFile;
};

export const createLocalFile = (
  name: string,
  isDirectory: boolean,
): ILocalFile => {
  const file: ILocalFile = {
    isDirectory: isDirectory,
    isFile: !isDirectory,
    creationTime: Date.now(),
    name,
    path: `${RNFS.DocumentDirectoryPath}/${name}`,
    size: isDirectory ? 3488 : 0,
  };
  return file;
};
