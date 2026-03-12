# Nickname Validator

[![CI](https://github.com/EwgeniyNikol/nickname/actions/workflows/ci.yml/badge.svg)](https://github.com/EwgeniyNikol/nickname/actions/workflows/ci.yml)

Валидатор никнеймов.

## Использование

```javascript
import Validator from 'nickname';

const validator = new Validator();
validator.validateUsername('john_doe'); 