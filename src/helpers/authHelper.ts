/**
 * Helper to handle form submit
 * 
 * Fakes backend call and checks email/password
 * 
**/

import { validateEmail } from '../helpers/emailHelper';

export const handleLogin = async ( 
  email: string,
  password: string,
  onSuccess: () => void,
  onError: (error: string) => void
) => { 

  if (!email) { 
    onError('Email field is empty');
    return;
  };

  if(!validateEmail(email)) { 
    onError('Invalid format for Email');
    return;
  };

  if (!password) { 
    onError('Password field is empty');
    return;
  };

  try { 
    if (email === 'rakbank@rakbank.com' && password === 'r4kb4nk') {
      onSuccess();
    }
    else { 
      throw new Error('Incorrect email or password');
    }
  }
  catch (err) { 
    onError(err.message);
  }
};
