module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
  },
  plugins: [
    'sonarjs',
  ],
  extends: [
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 0,
    'no-unused-expressions': 0,
    indent: ['warn', 2, {
      ObjectExpression: 'first',
      CallExpression: { arguments: 'first' },
      FunctionDeclaration: { parameters: 'first' },
      ArrayExpression: 'first',
      MemberExpression: 2,
      SwitchCase: 1,
      ignoredNodes: ['ConditionalExpression'],
    }],
    'no-console': 'error',
    'no-return-await': 'error',
    'max-params': [1, 5],
    'max-depth': ['error', 4],
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'class-methods-use-this': 'off',
    'no-floating-decimal': 'off',
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    }],
    'padded-blocks': ['error', {
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-plusplus': 'off',
    'for-direction': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': ['error', {
      ImportDeclaration: { multiline: true },
      ExportDeclaration: { multiline: true },
    }],
    'operator-linebreak': ['error', 'before', {
      overrides: { ':': 'ignore' },
    }],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
      allowAllPropertiesOnSameLine: true,
    }],
    'no-mixed-operators': 'off',
    strict: 'off',
    'template-curly-spacing': ['error', 'always'],
    'semi-style': 'off',
    'no-multi-spaces': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.lint.json',
        ecmaVersion: 2020,
      },
      settings: {
        'import/parsers':  {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          typescript: {
            // use <root>/path/to/folder/tsconfig.json
            // More examples: https://www.npmjs.com/package/eslint-import-resolver-typescript#configuration
            project: './tsconfig.lint.json',
          },
        },
      },
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/restrict-plus-operands': 'error',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', { // Prevents us from using any delimiter for interface properties.
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        }],
        '@typescript-eslint/indent': 'off', // This is the job of StandardJS, they are competing rules so we turn off the Typescript one.
        '@typescript-eslint/no-use-before-define': ['error', {
          functions: false,
          classes: false,
        }],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
    {
      files: ['**/*spec.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
  ],
};
