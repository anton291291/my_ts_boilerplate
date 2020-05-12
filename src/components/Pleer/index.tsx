import React from 'react';

import styled from 'styled-components';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { Box } from '@material-ui/core';

const Stop = styled(StopIcon)`
    color: white;
    transition: all 1s;
    &:hover {
        transform: scale(1.2);
    }
`;

const Play = styled(PlayArrowIcon)`
    color: white;
    transition: all 1s;
    &:hover {
        transform: scale(1.2);
    }
`;

const Clear = styled(ClearAllIcon)`
    color: white;
    transition: all 1s;
    &:hover {
        transform: scale(1.2);
    }
`;

const IconContainer = styled.div`
    margin: 0 5px;
    height: 23px;
`;

type Props = {};

export const Pleer: React.FC<Props> = (props) => {
    const {} = props;

    return (
        <Box display='flex'>
            <Play />
            <IconContainer>
                <Stop />
            </IconContainer>
            <Clear />
        </Box>
    );
};
