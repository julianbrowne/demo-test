
import { handleLogin } from '../src/helpers/authHelper';

describe('handleLogin', () => { 

  it('should call onError if email or password is empty', async () => {
    const mockOnSuccess = jest.fn();
    const mockOnError = jest.fn();

    await handleLogin('', '', mockOnSuccess, mockOnError);
    expect(mockOnError).toHaveBeenCalledWith('Please fill in all fields');
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });

  it('should call onSuccess on valid credentials', async () => {
    const mockOnSuccess = jest.fn();
    const mockOnError = jest.fn();

    await handleLogin('rakbank@rakbank.com', 'r4kb4nk', mockOnSuccess, mockOnError);
    expect(mockOnSuccess).toHaveBeenCalled();
    expect(mockOnError).not.toHaveBeenCalled();
  });

  it('should call onError on invalid credentials', async () => {
    const mockOnSuccess = jest.fn();
    const mockOnError = jest.fn();

    await handleLogin('invalid@example.com', 'wrongpassword', mockOnSuccess, mockOnError);
    expect(mockOnError).toHaveBeenCalledWith('Invalid email or password.');
    expect(mockOnSuccess).not.toHaveBeenCalled();
  });

});
