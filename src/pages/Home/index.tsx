import React, { useEffect } from 'react';

import { Grid, DasboardBtn, Pleer, LogoutBtn } from '../../components';
import { Box, Fade } from '@material-ui/core';
import { useHistory } from 'react-router';

type Props = {};

export const Home: React.FC<Props> = (props) => {
    const {} = props;

    let history = useHistory();

    useEffect(() => {
        !localStorage.getItem('name') && history.push('/');
    });

    return (
        <Fade timeout={300} in={true}>
            <div>
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
                <LogoutBtn />
            </Box>
            <Box display='flex' flexDirection='column'>
                <Grid />
            </Box>
            </div>
        </Fade>
    );
};
