import {StyleSheet, Text, View, Pressable, PressableProps} from 'react-native';
import React from 'react';

type TypeAnchor = {
  text: string;
} & PressableProps;

const Anchor = (props: TypeAnchor) => {
  return (
    <Pressable {...props}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};

export default Anchor;

const styles = StyleSheet.create({
  text: {
    color: '#f76707',
  },
});
