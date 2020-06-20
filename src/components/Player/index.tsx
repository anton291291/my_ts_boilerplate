import React, { useEffect, useCallback, useLayoutEffect } from 'react';

import styled from 'styled-components';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Box, Typography } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { PlayerActions, CellsActions} from '@/store/actions';
import { isLoggedIn } from '@/utils/helper';

const Stop = styled(StopIcon)`
    color: white;
    transition: all 1s;
    &:hover {
        transform: scale(1.2);
    }
`;

const Random = styled(ShuffleIcon)`
    color: white;
    transition: all 1s;
    margin-right: 20px;
    &:hover {
        transform: scale(1.2);
    }
`;

const Play = styled(PlayArrowIcon)`
    color: white;
    transition: all 1s;
    margin-left: 20px;
    &:hover {
        transform: scale(1.2);
    }
`;

const Pause = styled(PauseIcon)`
    color: white;
    transition: all 1s;
    margin-left: 20px;
    &:hover {
        transform: scale(1.2);
    }
`;

const IconContainer = styled.div`
    margin: 0 5px;
    height: 23px;
`;

const GenField = styled(Typography)`
    width: 120px;
`;
const NameField = styled(Typography)``;

type Props = {};

export const Player: React.FC<Props> = (props) => {
    const {} = props;

    const { cells, gen, name, isPlay } = useSelector(
        (state: RootState) => state.grid
    );

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        isLoggedIn() && dispatch(PlayerActions.getName());
    }, []);

    useEffect(() => {
        cells.every((obj) => obj.isClicked === false) &&
            (dispatch(PlayerActions.setIsStop()),
            dispatch(PlayerActions.setGen(1)));
    }, [cells]);

    const handleReset = useCallback(() => {
        dispatch(PlayerActions.setReset());
    }, [dispatch]);

    const handlePlay = useCallback(() => {
        dispatch(PlayerActions.setIsPlay());
    }, [dispatch]);

    const handleRandom = useCallback(() => {
        handleReset();
        dispatch(CellsActions.randomCells());
    }, [dispatch, handleReset]);

    const handlePause = useCallback(() => {
        dispatch(PlayerActions.setIsStop());
    }, [dispatch]);

    return (
        <Box display='flex'>
            <GenField>Generation: {gen}</GenField>
            {isPlay ? (
                <Pause onClick={handlePause} />
            ) : (
                <Play onClick={handlePlay} />
            )}
            <IconContainer>
                <Stop onClick={handleReset} />
            </IconContainer>
            <Random onClick={handleRandom} />
            <NameField>{name}</NameField>
        </Box>
    );
};
