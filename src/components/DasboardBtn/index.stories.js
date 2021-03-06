import React from 'react';
import { DasboardBtn } from './index';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from '@material-ui/core';
import { GridProvider } from '../../hooks/contextHooks';

export default {
    title: '/Dashboard',
    component: DasboardBtn,
    decorators: [withKnobs]
};

export const DashboardButton = () => (
    <Box
        width='200px'
        height='200px'
        display='flex'
        justifyContent='center'
        alignItems='center'
    >
        <GridProvider>
            <DasboardBtn />
        </GridProvider>
    </Box>
);
