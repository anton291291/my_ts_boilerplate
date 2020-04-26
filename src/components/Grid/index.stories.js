import React from 'react';
import { Grid } from './index';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

export default {
    title: '/Grid',
    component: Grid,
    decorators: [withKnobs]
};

export const FullGrid = () => <Grid />;
