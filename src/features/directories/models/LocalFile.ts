export interface ILocalFile {
  id: string;
  isDirectory: boolean;
  isFile: boolean;
  creationTime: number;
  name: string;
  path: string;
  size: number;
}
