export interface ILocalFile {
  isDirectory: boolean;
  isFile: boolean;
  creationTime: number;
  name: string;
  path: string;
  size: number;
}
