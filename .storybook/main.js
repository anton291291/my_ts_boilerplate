const path = require('path');

module.exports = {
    stories: ['../src/components/**/*.stories.js'],
    addons: [
        '@storybook/preset-typescript',
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-links/register',
        '@storybook/addon-backgrounds/register'
    ],

    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src')
        };

        // Return the altered config
        return config;
    }
};
