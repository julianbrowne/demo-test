
import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 

  container: { 
    backgroundColor: '#F8F8F8',
    flex: 1,
    justifyContent: 'center'
  },

  loginForm: { 
    alignItems: 'center'
  },

  title: { 
    color: '#D90013',
    fontSize: 26,
    marginBottom: 16,
    textAlign: 'center'
  },

  input: { 
    color: '#000000',
    backgroundColor: '#FFFFFF',
    borderColor: '#D9D9D9',
    borderRadius: '4px',
    borderWidth: 1,
    position: 'relative',
    transition: '0.3s all',
    width: '60%',
    height: 40,
    padding: 10,
    alignItems: 'stretch',
    marginBottom: 20
},

  button: { 
    color: '#FFFFFF',
    backgroundColor: '#2D2C2C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },

  error: { 
    color: 'red',
    marginBottom: 12,
    textAlign: 'center'
  }

});
