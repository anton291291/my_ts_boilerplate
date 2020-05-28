import React, { useEffect, useCallback, useLayoutEffect } from 'react';

import styled from 'styled-components';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Box, Typography } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import {
    PlayerActions,
    GreetingFormActions,
    CellsActions,
    IntervalIDAction
} from '@/store/actions';

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

    const state = useSelector((state: RootState) => state.grid);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        localStorage.getItem('name');
        dispatch(GreetingFormActions.setName());
    }, []);

    useEffect(() => {
        state.cells.every((obj) => obj.isClicked === false) &&
            (clearInterval(state.intervalID),
            dispatch(PlayerActions.setIsStop()),
            dispatch(PlayerActions.setGen(1))
            );
    }, [state.cells]);




    const handleReset = useCallback(() => {
        clearInterval(state.intervalID);

        dispatch(PlayerActions.setReset());
    }, [dispatch, state.intervalID]);



    const handlePlay = useCallback(() => {
        dispatch(PlayerActions.setIsPlay());

        let startInterval = setInterval(() => {
            dispatch(CellsActions.simulateLife());
        }, state.speed * 100);

        dispatch(IntervalIDAction.setIntervalID(startInterval));
    }, [dispatch, state.speed]);



    const handleRandom = useCallback(() => {
        handleReset();
        dispatch(CellsActions.randomCells());
    }, [dispatch, handleReset]);

    const handlePause = useCallback(() => {
        dispatch(PlayerActions.setIsStop());
        clearInterval(state.intervalID);
    }, [dispatch, state.intervalID]);

    return (
        <Box display='flex'>
            <GenField>Generation: {state.gen}</GenField>
            {state.isPlay ? (
                <Pause onClick={handlePause} />
            ) : (
                <Play onClick={handlePlay} />
            )}
            <IconContainer>
                <Stop onClick={handleReset} />
            </IconContainer>
            <Random onClick={handleRandom} />
            <NameField>{state.name}</NameField>
        </Box>
    );
};
