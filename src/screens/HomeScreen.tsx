
import React from 'react';

import {
  View,
  Text
} from 'react-native';

import styles from './styles/HomeScreen.styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations: Sucessful Login!</Text>
    </View>
  );
};

export default HomeScreen;
