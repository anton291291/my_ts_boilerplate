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
    ]
};
