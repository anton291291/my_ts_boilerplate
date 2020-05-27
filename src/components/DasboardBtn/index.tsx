import React, { useState, useContext, useCallback } from 'react';

import styled from 'styled-components';
import { Drawer, Typography, Box } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { SizeSlider } from '../SizeSlider';
import { GridContext } from '../../hooks/contextHooks';
import { checkGridMaxHeight, checkGridMaxWidth } from '../../utills/helper/index';

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

    const handleChangeSpeed = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            setState((state) => ({
                ...state,
                speed: newValue
            }));
        },
        [setState]
    );

    const handleChangeRandomIndex = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            setState((state) => ({
                ...state,
                randomIndex: newValue
            }));
        },
        [setState]
    );

        const maxHeight = checkGridMaxHeight();
        const maxWidth = checkGridMaxWidth();

    return (
        <>
            <Btn onClick={handleOpen}>
                <DashboardIcon style={{ color: 'white' }} />
            </Btn>
            <StyledDrawer anchor='bottom' open={isOpen} onClose={handleClose}>
                <Box display='flex'>
                    <Box pl='20px' display='flex' flexDirection='column'>
                        <SizeSlider
                            label='Y-axis'
                            min={5}
                            max={maxHeight}
                            value={y}
                            onChange={handleChangeY}
                        />
                        <SizeSlider
                            label='X-axis'
                            min={5}
                            max={maxWidth}
                            value={x}
                            onChange={handleChangeX}
                        />
                    </Box>
                    <Box
                        borderLeft='1px solid rgb(255 255 255 /0.1)'
                        pr='20px'
                        display='flex'
                        flexDirection='column'
                        width='50%'
                    >
                        <SizeSlider
                            label='Speed'
                            min={1}
                            max={30}
                            value={state.speed}
                            onChange={handleChangeSpeed}
                        />
                        <SizeSlider
                            label='Random Index'
                            step={0.1}
                            min={0.1}
                            max={0.9}
                            value={state.randomIndex}
                            onChange={handleChangeRandomIndex}
                        />
                    </Box>
                </Box>
            </StyledDrawer>
        </>
    );
};
