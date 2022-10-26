import RNFS from 'react-native-fs';
import {ILocalFile} from '../models/LocalFile';
import {convertToLocalFile} from '../utils/LocalFileParser';

export const makeDirectory = async (folderPath: string) => {
  try {
    const result = await RNFS.mkdir(
      RNFS.DocumentDirectoryPath + `/${folderPath}`,
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getDirectories = async (path: string): Promise<ILocalFile[]> => {
  try {
    if (path === '/') {
      const reader = await RNFS.readDir(
        `${RNFS.DocumentDirectoryPath}/${path}`,
      );
      return reader.map(file => convertToLocalFile(file));
    } else {
      const reader = await RNFS.readDir(path);
      return reader.map(file => convertToLocalFile(file));
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSingleDirectory = async (path: string): Promise<any> => {
  try {
    const reader = await RNFS.readDir(`${RNFS.DocumentDirectoryPath}/${path}`);
    if (reader.length !== 0) {
      return reader[0];
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const removeDirectory = async (path: string): Promise<any> => {
  try {
    await RNFS.unlink(path);
  } catch (error) {
    console.log(error);
  }
};
