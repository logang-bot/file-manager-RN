import RNFS from 'react-native-fs';
import {ILocalFile} from '../models/LocalFile';
import {convertToLocalFile} from '../utils/LocalFileParser';

export const makeDirectory = async (folderPath: string) => {
  const result = await RNFS.mkdir(
    RNFS.DocumentDirectoryPath + `/${folderPath}`,
  );
  console.log(result);
};

export const getDirectories = async (): Promise<ILocalFile[]> => {
  const reader = await RNFS.readDir(RNFS.DocumentDirectoryPath);
  console.log(reader);
  console.log(reader[0].isDirectory());
  console.log(reader[0].name);
  return reader.map(file => convertToLocalFile(file));
};

export const getSingleDirectory = async (path: string): Promise<any> => {
  const reader = await RNFS.readDir(`${RNFS.DocumentDirectoryPath}/${path}`);
  if (reader.length !== 0) {
    return reader[0];
  }
  return {};
};
