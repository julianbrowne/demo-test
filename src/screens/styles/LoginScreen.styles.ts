
import { 
  StyleSheet,
  Dimensions
} from 'react-native';

const { width: ScreenWidth } = Dimensions.get("screen");

export default StyleSheet.create({ 

  container: { 
    backgroundColor: '#F9F9F9',
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },

  loginForm: { 
    alignItems: 'center',
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
    borderColor: '#F9F9F9',
    height: 40,
    width: ScreenWidth * 0.3,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8
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
