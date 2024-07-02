/**
 * Helper to handle form submit
 * 
 * Fakes backend call and checks email/password
 * 
**/

import { validateEmail } from '../helpers/emailHelper';
import { fakeEmail, fakePassword } from '../fakeCreds.json';

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

  /**
   * Fake backend call. Would handle 401/500 etc here 
  **/

  try { 
    if (email === fakeEmail && password === fakePassword) { 
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
