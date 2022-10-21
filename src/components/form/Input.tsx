import {StyleSheet, View, TextInput, TextInputProps} from 'react-native';
import React, {useState} from 'react';
import {GlobalColors} from '../../data/GlobalColors';

type TypeTextInputProps = {} & TextInputProps;

const Input = (props: TypeTextInputProps) => {
  const finalStyles = [styles.textInput];
  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    finalStyles.push(styles.active);
  }

  return (
    <View style={finalStyles}>
      <TextInput
        {...props}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  active: {
    borderColor: GlobalColors.primaryColor,
    borderWidth: 1,
  },
});
