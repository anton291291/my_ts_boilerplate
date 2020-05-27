import React from 'react';
import HelloWorld from './index';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
    title: '/HelloWorld',
    component: HelloWorld,
    decorators: [withKnobs]
};

export const HelloUser = () => <HelloWorld username={text('username', '')} />;
