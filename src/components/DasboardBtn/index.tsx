import React, { useState, useContext } from 'react';

import styled from 'styled-components';
import { Drawer, Typography, Box } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { SizeSlider } from '../SizeSlider';
import { GridContext } from '../../hooks/contextHooks';

export const Btn = styled.div`
    cursor: pointer;
    position: absolute;
    left: 2px;
    transition: transform 0.8s;
    &:hover {
        transform: rotate(360deg);
    }
`;

export const StyledDrawer = styled(Drawer)`
    && {
        .MuiDrawer-paper {
            background-color: rgba(0, 0, 0, 0.7);
            box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.4);
        }
    }
`;

type Props = {};

export const DasboardBtn: React.FC<Props> = (props) => {
    const {} = props;

    const [isOpen, setIsOpen] = useState(false);
    const { state, setState } = useContext(GridContext);

    const handleOpen = () => {
        clearInterval(state.intervalID);
        setState((state) => ({ ...state, isPlay: false }));
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const y = state.axis.y;
    const x = state.axis.x;
    let length = x * y - 1;

    const handleChangeY = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue * x > x * y) {
            setState((state) => ({
                ...state,
                axis: { ...state.axis, y: newValue },
                cells: [
                    ...state.cells,
                    ...Array.from({ length: newValue * x - x * y }, (item) => ({
                        index: ++length,
                        isClicked: false
                    }))
                ]
            }));
        } else if (newValue * x < x * y) {
            setState((state) => ({
                ...state,
                axis: { ...state.axis, y: newValue },
                cells: state.cells.slice(0, newValue * x)
            }));
        }
    };

    const handleChangeX = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue * y > x * y) {
            setState((state) => ({
                ...state,
                axis: { ...state.axis, x: newValue },
                cells: [
                    ...state.cells,
                    ...Array.from({ length: newValue * y - x * y }, (item) => ({
                        index: ++length,
                        isClicked: false
                    }))
                ]
            }));
        } else if (newValue * y < x * y) {
            setState((state) => ({
                ...state,
                axis: { ...state.axis, x: newValue },
                cells: state.cells.slice(0, newValue * y)
            }));
        }
    };

    const handleChangeSpeed = (
        event: React.SyntheticEvent,
        newValue: number
    ) => {
        setState((state) => ({
            ...state,
            speed: newValue
        }));
    };

    const handleChangeRandomIndex = (
        event: React.SyntheticEvent,
        newValue: number
    ) => {
        setState((state) => ({
            ...state,
            randomIndex: newValue
        }));
    };

    return (
        <>
            <Btn onClick={handleOpen}>
                <DashboardIcon style={{ color: 'white' }} />
            </Btn>
            <StyledDrawer anchor='bottom' open={isOpen} onClose={handleClose}>
                <Box display='flex'>
                    <Box pl='20px' display='flex' flexDirection='column'>
                        <Box display='flex' alignItems='center' height='110px'>
                            <Typography>Y-axis</Typography>
                            <SizeSlider
                                min={5}
                                max={Math.floor(
                                    document.documentElement.clientHeight / 26 -
                                        2
                                )}
                                value={y}
                                onChange={handleChangeY}
                            />
                        </Box>
                        <Box display='flex' alignItems='center' height='110px'>
                            <Typography>X-axis</Typography>
                            <SizeSlider
                                min={5}
                                max={Math.floor(
                                    document.documentElement.clientWidth / 26
                                )}
                                value={x}
                                onChange={handleChangeX}
                            />
                        </Box>
                    </Box>
                    <Box
                        pr='20px'
                        display='flex'
                        flexDirection='column'
                        width='50%'
                    >
                        <Box display='flex' alignItems='center' height='110px'>
                            <Typography>Speed</Typography>
                            <SizeSlider
                                min={1}
                                max={30}
                                value={state.speed}
                                onChange={handleChangeSpeed}
                            />
                        </Box>
                        <Box display='flex' alignItems='center' height='110px'>
                            <Typography>Random Index</Typography>
                            <SizeSlider
                                step={0.1}
                                min={0.1}
                                max={0.9}
                                value={state.randomIndex}
                                onChange={handleChangeRandomIndex}
                            />
                        </Box>
                    </Box>
                </Box>
            </StyledDrawer>
        </>
    );
};
