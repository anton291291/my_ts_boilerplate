import React, { useState, useCallback } from 'react';

import styled from 'styled-components';
import { Drawer, Box } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { SizeSlider } from '../SizeSlider';
import {
    checkGridMaxHeight,
    checkGridMaxWidth
} from '../../utills/helper/index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/rootReducer';
import { PlayerActions, AxisActions } from '@/store/actions';

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

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.grid);
    const y = useSelector((state: RootState) => state.grid.axis.y);
    const x = useSelector((state: RootState) => state.grid.axis.x);

    let length = x * y;

    const handleOpen = () => {
        clearInterval(state.intervalID);
        dispatch(PlayerActions.setIsStop());
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleChangeY = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue * x > length) {
            dispatch(AxisActions.increaseYaxis(newValue));
        } else if (newValue * x < length) {
            dispatch(AxisActions.decreaseYaxis(newValue));
        }
    };
    const handleChangeX = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue * y > length) {
            dispatch(AxisActions.increaseXaxis(newValue));
        } else if (newValue * y < length) {
            dispatch(AxisActions.decreaseXaxis(newValue));
        }
    };

    const handleChangeSpeed = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            dispatch(PlayerActions.setSpeed(newValue));
        },
        [dispatch, state.speed]
    );

    const handleChangeRandomIndex = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            dispatch(PlayerActions.setRandomIndex(newValue));
        },
        [dispatch]
    );

        console.log('rerender2')

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
