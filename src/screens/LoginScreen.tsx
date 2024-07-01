
import React, { useState } from 'react';

import { 
  SafeAreaView,
  View,
  Text, 
  TextInput,
  StatusBar  
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// app imports

import { handleLogin } from '../helpers/authHelper';

import CustomButton from '../components/CustomButton';
import styles from './styles/LoginScreen.styles';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => { 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => { 
    handleLogin(email, password, () => navigation.navigate('Home'), setError);
  };

  return ( 

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.loginForm}>

        <Text style={styles.title}>
          Login Sample
        </Text>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CustomButton
          title="Login"
          onPress={() => { 
            handleSubmit();
          }}
        />

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
