module.exports = {
    'env': {
      'es6': true,
      'node': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
      'ecmaVersion': 2018,
      'sourceType': 'module'
    },
    'rules': {
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'semi-spacing': ['error', { 'before': false, 'after': true }],
      'camelcase': 0,
      'max-len': [ 'error', { 'code': 120, 'ignoreComments': true, 'ignoreTrailingComments': true } ],
    }
  }
  