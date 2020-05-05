import React from 'react';
import { SizeSlider } from './index';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';

export default {
    title: '/Dashboard',
    component: SizeSlider,
    decorators: [withKnobs]
};

export const Slider = () => (
    <Box mt={5}>
        <SizeSlider />
    </Box>
);
