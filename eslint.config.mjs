// eslint.config.mjs
import eslintJs from '@eslint/js'
import * as tseslint from 'typescript-eslint'
import path from 'node:path'

const { configs: eslintConfigs } = eslintJs

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        ignores: ['dist', 'node_modules'],
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: path.resolve(),
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
        },
        rules: {
            ...tseslint.configs.recommendedTypeChecked[0].rules,
            'no-console': 'warn',
            'dot-notation': ['error', { allowKeywords: true }],
        },
    },
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'no-console': 'off',
            'dot-notation': ['error', { allowKeywords: true }],
            '@typescript-eslint/no-misused-promises': 'off',
        },
    },
]
