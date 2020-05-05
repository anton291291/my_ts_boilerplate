import React from 'react';
import { Grid } from './index';
import { withKnobs} from '@storybook/addon-knobs';
import { GridProvider } from '../../hooks/contextHooks';

export default {
    title: '/Grid',
    component: Grid,
    decorators: [withKnobs]
};

export const FullGrid = () => (
    <GridProvider>
        <Grid />;
    </GridProvider>
);
