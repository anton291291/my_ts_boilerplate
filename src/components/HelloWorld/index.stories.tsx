import React from 'react';
import HelloWorld from './index';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
    title: '/HelloWorld',
    component: HelloWorld,
    decorators: [withKnobs]
};

export const HelloUser = () => (
    <HelloWorld
        width={number('Width', 100, {
            range: true,
            min: 50,
            max: 500,
            step: 1
        })}
        username={text('username', '')}
    />
);
