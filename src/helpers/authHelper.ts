/**
 * Helper to handle form submit
 * 
 * Fakes backend call and checks email/password
 * 
**/

export const handleLogin = async (
  email: string,
  password: string,
  onSuccess: () => void,
  onError: (error: string) => void
) => {
  if (!email || !password) {
    onError('Please fill in all fields');
    return;
  }

  try { 
    if (email === 'rakbank@rakbank.com' && password === 'r4kb4nk') {
      onSuccess();
    }
    else { 
      throw new Error('Invalid email or password.');
    }
  }
  catch (err) { 
    onError(err.message);
  }
};
