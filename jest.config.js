const esModules = ['@testing-library/react', '@org/somelibrary2'].join('|');

module.exports = {
    transform: {
        '^.+\\.(m?js|ts|jsx)$': ['babel-jest', { configFile: './babel.config.testing.js' }], // transpile mjs, mts, js, ts files
    },
    transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
    testEnvironment: 'jsdom',
};
