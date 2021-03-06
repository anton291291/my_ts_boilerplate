import React, { useContext, useState, useEffect } from 'react';

import styled from 'styled-components';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { Box } from '@material-ui/core';
import { GridContext } from '../../hooks/contextHooks';

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

const Pause = styled(PauseIcon)`
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

let startInterval: number;

type Props = {};

export const Pleer: React.FC<Props> = (props) => {
    const {} = props;

    const { state, setState } = useContext(GridContext);

    useEffect(() => {
        state.cells.every((obj) => obj.isClicked === false) &&
            (clearInterval(startInterval),
            setState((state) => ({ ...state, isPlay: false })));
    }, [state.cells]);

    const handleReset = () => {
        clearInterval(state.intervalID);

        setState((state) => ({
            ...state,
            cells: [...state.cells].map((obj) => {
                return { ...obj, isClicked: false };
            })
        }));

        setState((state) => ({ ...state, isPlay: false }));
    };

    const firstElems = [];
    const lastElems = [];
    const upRow = [];
    const bottomRow = [];

    const splitCells = () => {
        for (
            let index = 0;
            index < state.cells.length;
            index = index + state.axis.x
        ) {
            firstElems.push(index);
        }

        for (
            let index = state.axis.x - 1;
            index < state.cells.length;
            index = index + state.axis.x
        ) {
            lastElems.push(index);
        }

        for (let index = 1; index < state.axis.x - 1; index++) {
            upRow.push(index);
        }

        for (
            let index = state.cells.length - state.axis.x + 1;
            index < state.cells.length - 1;
            index++
        ) {
            bottomRow.push(index);
        }
    };

    const handlePlay = () => {
        setState((state) => ({ ...state, isPlay: true }));

        splitCells();

        const checkRestElems = (obj, index, arr) => {
            let count = 0;
            arr[index - state.axis.x - 1].isClicked === true && count++;
            arr[index - state.axis.x].isClicked === true && count++;
            arr[index - state.axis.x + 1].isClicked === true && count++;
            arr[index - 1].isClicked === true && count++;
            arr[index + 1].isClicked === true && count++;
            arr[index + state.axis.x - 1].isClicked === true && count++;
            arr[index + state.axis.x].isClicked === true && count++;
            arr[index + state.axis.x + 1].isClicked === true && count++;

            if (obj.isClicked === false && count == 3) {
                return { ...obj, isClicked: true };
            } else if (obj.isClicked === true && (count == 2 || count == 3)) {
                return obj;
            } else {
                return { ...obj, isClicked: false };
            }
        };

        const checkBottomRow = (obj, index, arr) => {
            let count = 0;
            arr[index - 1].isClicked === true && count++;
            arr[index + 1].isClicked === true && count++;
            arr[index - state.axis.x].isClicked === true && count++;
            arr[index - state.axis.x - 1].isClicked === true && count++;
            arr[index - state.axis.x + 1].isClicked === true && count++;

            if (obj.isClicked === false && count == 3) {
                return { ...obj, isClicked: true };
            } else if (obj.isClicked === true && (count == 2 || count == 3)) {
                return obj;
            } else {
                return { ...obj, isClicked: false };
            }
        };

        const checkUpRow = (obj, index, arr) => {
            let count = 0;
            arr[index - 1].isClicked === true && count++;
            arr[index + 1].isClicked === true && count++;
            arr[index + state.axis.x].isClicked === true && count++;
            arr[index + state.axis.x - 1].isClicked === true && count++;
            arr[index + state.axis.x + 1].isClicked === true && count++;

            if (obj.isClicked === false && count == 3) {
                return { ...obj, isClicked: true };
            } else if (obj.isClicked === true && (count == 2 || count == 3)) {
                return obj;
            } else {
                return { ...obj, isClicked: false };
            }
        };

        const checkFirstElems = (obj, index, arr) => {
            if (obj.index === firstElems[0]) {
                let count = 0;
                arr[index + 1].isClicked === true && count++;
                arr[index + state.axis.x].isClicked === true && count++;
                arr[index + state.axis.x + 1].isClicked === true && count++;

                if (obj.isClicked === false && count === 3) {
                    return { ...obj, isClicked: true };
                } else if (
                    obj.isClicked === true &&
                    (count == 2 || count == 3)
                ) {
                    return obj;
                } else {
                    return { ...obj, isClicked: false };
                }
            } else if (obj.index === firstElems[firstElems.length - 1]) {
                let count = 0;
                arr[index + 1].isClicked === true && count++;
                arr[index - state.axis.x].isClicked === true && count++;
                arr[index - state.axis.x + 1].isClicked === true && count++;

                if (obj.isClicked === false && count === 3) {
                    return { ...obj, isClicked: true };
                } else if (
                    obj.isClicked === true &&
                    (count == 2 || count == 3)
                ) {
                    return obj;
                } else {
                    return { ...obj, isClicked: false };
                }
            } else {
                let count = 0;
                arr[index - state.axis.x].isClicked === true && count++;
                arr[index - state.axis.x + 1].isClicked === true && count++;
                arr[index + 1].isClicked === true && count++;
                arr[index + state.axis.x].isClicked === true && count++;
                arr[index + state.axis.x + 1].isClicked === true && count++;

                if (obj.isClicked === false && count == 3) {
                    return { ...obj, isClicked: true };
                } else if (
                    obj.isClicked === true &&
                    (count == 2 || count == 3)
                ) {
                    return obj;
                } else {
                    return { ...obj, isClicked: false };
                }
            }
        };

        const checkLastElems = (obj, index, arr) => {
            if (obj.index === lastElems[0]) {
                let count = 0;
                arr[index - 1].isClicked === true && count++;
                arr[index + state.axis.x].isClicked === true && count++;
                arr[index + state.axis.x - 1].isClicked === true && count++;

                if (obj.isClicked === false && count === 3) {
                    return { ...obj, isClicked: true };
                } else if (
                    obj.isClicked === true &&
                    (count == 2 || count == 3)
                ) {
                    return obj;
                } else {
                    return { ...obj, isClicked: false };
                }
            } else if (obj.index === lastElems[lastElems.length - 1]) {
                let count = 0;
                arr[index - 1].isClicked === true && count++;
                arr[index - state.axis.x].isClicked === true && count++;
                arr[index - state.axis.x - 1].isClicked === true && count++;

                if (obj.isClicked === false && count === 3) {
                    return { ...obj, isClicked: true };
                } else if (
                    (obj.isClicked === true && count == 2) ||
                    count == 3
                ) {
                    return obj;
                } else {
                    return { ...obj, isClicked: false };
                }
            } else {
                let count = 0;
                arr[index - state.axis.x].isClicked === true && count++;
                arr[index - state.axis.x - 1].isClicked === true && count++;
                arr[index - 1].isClicked === true && count++;
                arr[index + state.axis.x].isClicked === true && count++;
                arr[index + state.axis.x - 1].isClicked === true && count++;

                if (obj.isClicked === false && count == 3) {
                    return { ...obj, isClicked: true };
                } else if (
                    (obj.isClicked === true && count == 2) ||
                    count == 3
                ) {
                    return obj;
                } else {
                    return { ...obj, isClicked: false };
                }
            }
        };

        const simulateLife = (obj, index, arr) => {
            if (lastElems.includes(obj.index)) {
                return checkLastElems(obj, index, arr);
            } else if (firstElems.includes(obj.index)) {
                return checkFirstElems(obj, index, arr);
            } else if (upRow.includes(obj.index)) {
                return checkUpRow(obj, index, arr);
            } else if (bottomRow.includes(obj.index)) {
                return checkBottomRow(obj, index, arr);
            } else {
                return checkRestElems(obj, index, arr);
            }
        };

        startInterval = setInterval(() => {
            setState((state) => ({
                ...state,
                cells: [...state.cells].map(simulateLife)
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
                if (Math.random() > 0.7) {
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
            {state.isPlay ? (
                <Pause onClick={handlePause} />
            ) : (
                <Play onClick={handlePlay} />
            )}
            <IconContainer>
                <Stop onClick={handleReset} />
            </IconContainer>
            <Random onClick={handleRandom} />
        </Box>
    );
};
