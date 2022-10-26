import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';
import {useAppDispatch} from '../../../store';
import {fileSystemActions} from '../../../store/fileSystem';

import Input from '../../../components/form/Input';
import Button from '../../../components/ui/Button';

type CreateDirectProps = {
  visible: boolean;
  onTouchOutside: () => void;
};

const CreateDirectory = (props: CreateDirectProps) => {
  const [folderName, setFolderName] = useState('');
  const dispatch = useAppDispatch();

  const saveFolder = async () => {
    dispatch(fileSystemActions.createFolderFS(folderName));
    props.onTouchOutside();
  };
  return (
    <Dialog
      visible={props.visible}
      onTouchOutside={props.onTouchOutside}
      contentStyle={styles.container}>
      <Text>Enter a name for the new folder</Text>
      <View style={styles.actionContainer}>
        <Input
          placeholder="Folder name"
          value={folderName}
          onChangeText={text => {
            setFolderName(text);
          }}
        />
        <Button text="Save" onPress={saveFolder} />
      </View>
    </Dialog>
  );
};

export default CreateDirectory;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  actionContainer: {
    marginVertical: 10,
    width: '100%',
  },
});
