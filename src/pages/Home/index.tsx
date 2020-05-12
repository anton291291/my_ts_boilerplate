import React, { useState } from 'react';

import styled from 'styled-components';
import { Grid, DasboardBtn, Pleer, EntranceForm } from '../../components';
import { Box } from '@material-ui/core';

import { GridProvider } from '../../hooks/contextHooks';

type Props = {};

export const Home: React.FC<Props> = (props) => {
    const {} = props;

    return (
        <GridProvider>
            <Box
                display='flex'
                width='100%'
                boxSizing='border-box'
                p='5px'
                height='30px'
                mr='auto'
                ml='auto'
                justifyContent='center'
            >
                <DasboardBtn />
                <Pleer />
                <EntranceForm/>
            </Box>
            <Box display='flex' flexDirection='column'>
                <Grid />
            </Box>
        </GridProvider>
    );
};
