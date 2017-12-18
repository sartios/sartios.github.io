module.exports = {
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'function-paren-newline': 0,
    'no-undef': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'linebreak-style': 0,
    'no-tabs': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-no-target-blank': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-console': 0
  },
  globals: {
    'React': true,
    'document': true,
    'console': true,
    'window': true,
    'navigator': true,
    'fetch': true
  },
}
