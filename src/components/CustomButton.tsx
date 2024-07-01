
import React from 'react';

import {
  Pressable,
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const CustomButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2D2C2C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '200px'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
});

export default CustomButton;
