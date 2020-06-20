import 'loki/configure-react';
import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { GlobalProvider } from './GlobalProvider';

addDecorator((storyFn) => {
    return <GlobalProvider>{storyFn()}</GlobalProvider>;
});

addParameters({
    backgrounds: [
        { name: 'dark', value: 'black', default: true },
        { name: 'light', value: 'white' },
        { name: 'facebook', value: '#3b5998' }
    ]
});
