module.exports = {
    launch: {
        headless: false,
        slowMo: 30
    },
    browser: 'chromium',
    server: {
        command:
            'npx webpack-dev-server --config ./webpack.config.dev.babel.js --open false --port 3999',
        debug: true
    }
};
