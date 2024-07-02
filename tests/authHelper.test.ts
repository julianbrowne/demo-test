
import { handleLogin } from '../src/helpers/authHelper';
import { fakeEmail, fakePassword } from '../src/fakeCreds.json';

describe('handleLogin', () => { 

  let mockOnSuccess;
  let mockOnError;

  beforeEach(() => {
    mockOnSuccess = jest.fn();
    mockOnError = jest.fn();
  });

  it('should call onError if email is empty', async () => {
    await handleLogin('', 'password', mockOnSuccess, mockOnError);
    expect(mockOnError).toHaveBeenCalledWith('Email field is empty');
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });

  it('should call onError if password is empty', async () => {
    await handleLogin('name@example.com', '', mockOnSuccess, mockOnError);
    expect(mockOnError).toHaveBeenCalledWith('Password field is empty');
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });

  it('should call onSuccess on valid credentials', async () => { 
    await handleLogin(fakeEmail, fakePassword, mockOnSuccess, mockOnError);
    expect(mockOnSuccess).toHaveBeenCalled();
    expect(mockOnError).not.toHaveBeenCalled();
  });

  it('should call onError on invalid credentials', async () => {
    await handleLogin('invalid@example.com', 'wrongpassword', mockOnSuccess, mockOnError);
    expect(mockOnError).toHaveBeenCalledWith('Incorrect email or password');
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });

});
