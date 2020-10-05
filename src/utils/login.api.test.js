import loginApi from './login.api';

describe('Login', () => {
  it('login successfully with correct credentials', async () => {
    const result = await loginApi('wizeline', 'Rocks!');
    expect(result).toBeInstanceOf(Object);
  });

  it('throws an error with wrong credentials', () => {
    const result = loginApi('test', 'test');
    expect(result).rejects.toThrow('Username or password invalid');
  });

  it('throws an error with wrong password', () => {
    const result = loginApi('wizeline', 'test');
    expect(result).rejects.toThrow('Username or password invalid');
  });

  it('throws an error wrong username', () => {
    const result = loginApi('test', 'Rocks!');
    expect(result).rejects.toThrow('Username or password invalid');
  });

  it('throws an error with wrong credentials', () => {
    const result = loginApi(undefined, 'Rocks!');
    expect(result).rejects.toThrow('Username or password invalid');
  });

  it('throws an error wrong password', () => {
    const result = loginApi('wizeline');
    expect(result).rejects.toThrow('Username or password invalid');
  });

  it('throws an error withouth params', async () => {
    await expect(loginApi()).rejects.toThrow('Username or password invalid');
  });
});
