import 'loki/configure-react';

import { addParameters } from '@storybook/react'; // <- or your storybook framework

addParameters({
    backgrounds: [
        { name: 'dark', value: 'black', default: true },
        { name: 'light', value: 'white' },
        { name: 'facebook', value: '#3b5998' }
    ]
});
