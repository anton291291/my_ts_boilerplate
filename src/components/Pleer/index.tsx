import React, { useContext, useEffect } from 'react';

import styled from 'styled-components';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Box, Typography } from '@material-ui/core';
import { GridContext } from '../../hooks/contextHooks';

import { simulateLife } from '@/utills/algorithm';

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

export const Pleer: React.FC<Props> = (props) => {
    const {} = props;

    const { state, setState } = useContext(GridContext);

    useEffect(() => {
        state.cells.every((obj) => obj.isClicked === false) &&
            (clearInterval(state.intervalID),
            setState((state) => ({ ...state, isPlay: false })));
    }, [state.cells]);

    const handleReset = () => {
        clearInterval(state.intervalID);

        setState((state) => ({
            ...state,
            cells: state.cells.map((obj) => {
                return { ...obj, isClicked: false };
            }),
            isPlay: false,
            gen: 1
        }));
    };

    const handlePlay = () => {
        setState((state) => ({ ...state, isPlay: true }));

        let startInterval = setInterval(() => {
            setState((state) => ({
                ...state,
                cells: state.cells.map((obj, index, arr) =>
                    simulateLife(obj, index, arr, state)
                ),
                gen: state.gen + 1
            }));
        }, state.speed * 100);

        setState((state) => ({
            ...state,
            intervalID: startInterval
        }));
    };

    const handleRandom = () => {
        handleReset();
        setState((state) => ({
            ...state,
            cells: [...state.cells].map((obj) => {
                if (Math.random() > state.randomIndex) {
                    return { ...obj, isClicked: true };
                }
                return obj;
            })
        }));
    };

    const handlePause = () => {
        setState((state) => ({ ...state, isPlay: false }));
        clearInterval(state.intervalID);
    };

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
