import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import {
  makeDirectory,
  removeDirectory,
  getDirectories,
  createLocalFile,
  ILocalFile,
} from '../features/directories';

const fileAdapter = createEntityAdapter<ILocalFile>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const createFolderFS = createAsyncThunk(
  'fileSystem/createFolder',
  async (path: string) => {
    await makeDirectory(path);
    return createLocalFile(path, true);
  },
);

const removeFolderFs = createAsyncThunk(
  'fileSystem/removeFolder',
  async (file: ILocalFile) => {
    await removeDirectory(file.path);
    return file;
  },
);

const getFilesFS = createAsyncThunk(
  'fileSystem/getFiles',
  async (path: string) => {
    const result = await getDirectories(path);
    return result;
  },
);

const fileSystemSlice = createSlice({
  name: 'fileSystem',
  initialState: fileAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createFolderFS.fulfilled, (state, action) => {
      fileAdapter.addOne(state, action.payload);
    });
    builder.addCase(removeFolderFs.fulfilled, (state, action) => {
      fileAdapter.removeOne(state, action.payload.id);
    });
    builder.addCase(getFilesFS.fulfilled, (state, action) => {
      fileAdapter.setAll(state, action.payload);
    });
  },
});

export const fileSelector = fileAdapter.getSelectors();
export const fileSystemActions = {
  ...fileSystemSlice.actions,
  createFolderFS,
  removeFolderFs,
  getFilesFS,
};
export default fileSystemSlice.reducer;
