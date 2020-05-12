import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Pleer } from './index';

export default {
    title: 'Pleer',
    component: Pleer,
    decorators: [withKnobs]
};

export const Storybook_Pleer = () => <Pleer />;
