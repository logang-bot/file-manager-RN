import RNFS, {ReadDirItem} from 'react-native-fs';
import {ILocalFile} from '../models/LocalFile';

export const convertToLocalFile = (data: ReadDirItem): ILocalFile => {
  const fileTime = data.mtime?.getTime();
  const finalFile: ILocalFile = {
    id: String(fileTime),
    isDirectory: data.isDirectory(),
    isFile: data.isFile(),
    creationTime: fileTime ?? Date.now(),
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
  const fileTime = Date.now();
  const file: ILocalFile = {
    id: String(fileTime),
    isDirectory: isDirectory,
    isFile: !isDirectory,
    creationTime: fileTime,
    name,
    path: `${RNFS.DocumentDirectoryPath}/${name}`,
    size: isDirectory ? 3488 : 0,
  };
  return file;
};
