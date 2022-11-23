// feat: 新特性
// fix: 修改问题
// refactor: 代码重构
// docs: 文档修改
// style: 样式修改 (我知道是代表代码格式不代表样式, 但我就用它来代表样式, so what!)
// test: 测试用例修改
// chore: 构建流程、依赖管理
// revert: revert 前一个 commit
// release: 发布 NPM

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
