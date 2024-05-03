module.exports = {
    parser: '@typescript-eslint/parser', 
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    rules: {
        'no-restricted-properties': [
            'warn',
            {
                object: 'process',
                property: 'env',
                message: 'Use `src/lib/env` instead.',
            },
        ],
    },
    overrides: [
        {
            files: ['src/lib/env/index.ts'],
            rules: {
                'no-restricted-properties': 'off',
            },
        },
        {
            files: ['*.test.ts', '*.test.tsx'],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/unbound-method': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
            },
        },
    ]
};