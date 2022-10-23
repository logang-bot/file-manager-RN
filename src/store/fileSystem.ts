import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {makeDirectory} from '../features/directories';
import {ILocalFile} from '../features/directories/models/LocalFile';

interface State {
  files: ILocalFile[];
}

export const createFolderThunk = createAsyncThunk(
  'fileSystem/createFolder',
  async (path: string, thunkAPI) => {
    makeDirectory(path);
  },
);

const fileSystemSlice = createSlice({
  name: 'fileSystem',
  initialState: {
    files: [],
  } as State,
  reducers: {
    addFile: (state, {payload}: PayloadAction<ILocalFile>) => {
      state.files.push(payload);
    },
    getFiles: (state, {payload}: PayloadAction<ILocalFile[]>) => {
      state.files = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(createFolderThunk.fulfilled, (state, action) => {
      console.log('folder created');
    });
  },
});

export const fileSystemActions = fileSystemSlice.actions;
export default fileSystemSlice.reducer;
