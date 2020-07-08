module.exports = {
    preset: 'jest-puppeteer',
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    globalSetup: 'jest-environment-puppeteer/setup',
    globalTeardown: 'jest-environment-puppeteer/teardown',
    testPathIgnorePatterns: ['src'],
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/jest.e2e.setup.js']
};
