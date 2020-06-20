import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Player } from './index';

export default {
    title: 'Player',
    component: Player,
    decorators: [withKnobs]
};

export const Storybook_Player = () => <Player />;
