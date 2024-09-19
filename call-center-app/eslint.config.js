const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const prettier = require('eslint-plugin-prettier');

module.exports = [
    {
        files: ['*.ts'],
        languageOptions: {
            parserOptions: {
                project: ['tsconfig.json'],
                createDefaultProgram: true,
            },
        },
        plugins: {
            angular,
            prettier,
        },
        rules: {
            ...angular.configs.recommended.rules,
            ...angularTemplate.configs.recommended.rules,
            ...prettier.configs.recommended.rules,
            indent: ['error', 4],
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    printWidth: 120,
                },
            ],
        },
    },
    {
        files: ['*.html'],
        plugins: {
            angularTemplate,
        },
        rules: {
            ...angularTemplate.configs.recommended.rules,
        },
    },
];
