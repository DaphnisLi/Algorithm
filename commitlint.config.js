module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'release', 'chore']],
    'subject-case': [
      2,
      'always',
      ['lower-case', 'camel-case', 'snake-case', 'kebab-case', 'sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
  },
}
