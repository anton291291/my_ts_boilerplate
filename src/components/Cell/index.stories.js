import React from 'react';
import { Cell } from './index';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: '/Grid',
    component: Cell,
    decorators: [withKnobs]
};

export const JustCell = () => (
    <Cell onClick={action('button-click')} index={number('index', '1')} />
);
