module.exports = {
  extends: '../../.eslintrc',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: '../../eslintrc.ts.react.base.json',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['test/**/*.ts', 'test/**/*.tsx'],
      extends: '../../eslintrc.ts.react.jest.base.json',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./test/tsconfig.json'],
      },
    },
  ],
};
