
import { validateEmail } from '../src/helpers/emailHelper';

describe('validateEmail', () => { 

  it('should fail if email is empty', async () => { 
    expect(validateEmail('')).toBe(false);
  });

  it('should fail if email is just text', async () => { 
    expect(validateEmail('name')).toBe(false);
  });

  it('should fail if email has an invalid domain', async () => { 
    expect(validateEmail('name@example')).toBe(false);
  });

  it('should pass if email is valid', async () => { 
    expect(validateEmail('name@example.com')).toBe(true);
  });

});
