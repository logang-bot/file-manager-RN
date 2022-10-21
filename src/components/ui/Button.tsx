import {StyleSheet, Text, Pressable, PressableProps, Image} from 'react-native';
import React, {ReactElement} from 'react';
import {Icon} from 'react-native-vector-icons/Icon';

type TypeButtonProps = {
  text: string;
  IconStart?: ReactElement;
  IconEnd?: ReactElement;
  imageStart?: any;
  imageEnd?: any;
} & PressableProps;

const Button = (props: TypeButtonProps) => {
  return (
    <Pressable
      {...props}
      android_ripple={{color: '#ccc'}}
      style={[styles.button, props.style]}>
      {props.imageStart && (
        <Image style={styles.image} source={props.imageStart} />
      )}
      {props.IconStart}
      <Text style={styles.buttonText}>{props.text}</Text>
      {props.imageEnd && <Image style={styles.image} source={props.imageEnd} />}
      {props.IconEnd}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f76707',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
  },
});
