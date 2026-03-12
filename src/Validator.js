export default class Validator {
  static validateUsername(username) {
    if (typeof username !== 'string' || username.length === 0) {
      return false;
    }

    const invalidChars = /[^a-zA-Z0-9_-]/;
    if (invalidChars.test(username)) {
      return false;
    }

    const threeDigitsInRow = /\d{4,}/;
    if (threeDigitsInRow.test(username)) {
      return false;
    }

    if (/^[\d_-]/.test(username)) {
      return false;
    }

    if (/[\d_-]$/.test(username)) {
      return false;
    }

    return true;
  }
}
