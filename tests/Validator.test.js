import Validator from '../src/Validator';

describe('Validator', () => {
  test('должен возвращать false для не-строковых значений', () => {
    expect(Validator.validateUsername(null)).toBe(false);
    expect(Validator.validateUsername(undefined)).toBe(false);
    expect(Validator.validateUsername(123)).toBe(false);
    expect(Validator.validateUsername({})).toBe(false);
    expect(Validator.validateUsername([])).toBe(false);
  });

  test('должен возвращать false для пустой строки', () => {
    expect(Validator.validateUsername('')).toBe(false);
  });

  test('должен возвращать false для строк с недопустимыми символами', () => {
    expect(Validator.validateUsername('user@name')).toBe(false);
    expect(Validator.validateUsername('user#name')).toBe(false);
    expect(Validator.validateUsername('user!name')).toBe(false);
    expect(Validator.validateUsername('пользователь')).toBe(false);
    expect(Validator.validateUsername('user name')).toBe(false);
  });

  test('должен возвращать false если имя начинается с цифры', () => {
    expect(Validator.validateUsername('1username')).toBe(false);
  });

  test('должен возвращать false если имя начинается с _', () => {
    expect(Validator.validateUsername('_username')).toBe(false);
  });

  test('должен возвращать false если имя начинается с -', () => {
    expect(Validator.validateUsername('-username')).toBe(false);
  });

  test('должен возвращать false если имя заканчивается цифрой', () => {
    expect(Validator.validateUsername('username1')).toBe(false);
  });

  test('должен возвращать false если имя заканчивается _', () => {
    expect(Validator.validateUsername('username_')).toBe(false);
  });

  test('должен возвращать false если имя заканчивается -', () => {
    expect(Validator.validateUsername('username-')).toBe(false);
  });

  test('должен возвращать false если содержит более трёх цифр подряд', () => {
    expect(Validator.validateUsername('user1234name')).toBe(false);
    expect(Validator.validateUsername('1234user')).toBe(false);
    expect(Validator.validateUsername('user12345')).toBe(false);
  });

  test('должен возвращать true для валидных имен', () => {
    expect(Validator.validateUsername('username')).toBe(true);
    expect(Validator.validateUsername('user_name')).toBe(true);
    expect(Validator.validateUsername('user-name')).toBe(true);
    expect(Validator.validateUsername('user123name')).toBe(true);
    expect(Validator.validateUsername('u123ser')).toBe(true);
    expect(Validator.validateUsername('a1b2c')).toBe(true);
    expect(Validator.validateUsername('abc')).toBe(true);
    expect(Validator.validateUsername('a-b_c')).toBe(true);
    expect(Validator.validateUsername('john_doe')).toBe(true);
    expect(Validator.validateUsername('john123doe')).toBe(true);
    expect(Validator.validateUsername('j123ohn_d456oe')).toBe(true);
  });
});