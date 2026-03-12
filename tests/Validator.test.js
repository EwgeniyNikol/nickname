import Validator from '../src/Validator';

describe('Validator', () => {
  test('должен возвращать false для не-строковых значений', () => {
    const invalidInputs = [null, undefined, 123, {}, []];
    invalidInputs.forEach(input => {
      expect(Validator.validateUsername(input)).toBe(false);
    });
  });

  test('должен возвращать false для пустой строки', () => {
    expect(Validator.validateUsername('')).toBe(false);
  });

  test('должен возвращать false для строк с недопустимыми символами', () => {
    const invalidSymbols = ['user@name', 'user#name', 'user!name', 'пользователь', 'user name'];
    invalidSymbols.forEach(name => {
      expect(Validator.validateUsername(name)).toBe(false);
    });
  });

  test('должен возвращать false если имя начинается с недопустимых символов', () => {
    const invalidStarts = ['1username', '_username', '-username'];
    invalidStarts.forEach(name => {
      expect(Validator.validateUsername(name)).toBe(false);
    });
  });

  test('должен возвращать false если имя заканчивается недопустимыми символами', () => {
    const invalidEnds = ['username1', 'username_', 'username-'];
    invalidEnds.forEach(name => {
      expect(Validator.validateUsername(name)).toBe(false);
    });
  });

  test('должен возвращать false если содержит более трёх цифр подряд', () => {
    const invalidDigits = ['user1234name', '1234user', 'user12345'];
    invalidDigits.forEach(name => {
      expect(Validator.validateUsername(name)).toBe(false);
    });
  });

  test('должен возвращать true для валидных имен', () => {
    const validNames = [
      'username',
      'user_name',
      'user-name',
      'user123name',
      'u123ser',
      'a1b2c',
      'abc',
      'a-b_c',
      'john_doe',
      'john123doe',
      'j123ohn_d456oe'
    ];
    validNames.forEach(name => {
      expect(Validator.validateUsername(name)).toBe(true);
    });
  });
});