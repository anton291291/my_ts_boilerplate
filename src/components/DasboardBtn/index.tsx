import { AxisActions, PlayerActions } from '@/store/actions';
import { RootState } from '@/store/rootReducer';
import { Box, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React, { useCallback, useState, memo } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import styled from 'styled-components';


import { SizeSlider } from '../SizeSlider';
import { checkGridMaxHeight, checkGridMaxWidth } from '@/utils/helper';

export const Btn = styled(DashboardIcon)`
    color: white;
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

export const DasboardBtn: React.FC<Props> = memo(function DashboardBtn(props) {
    const {} = props;

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const {
        axis: { x, y },
        speed,
        randomIndex,
        intervalID
    } = useSelector((state: RootState) => state.grid);

    let length = x * y;

    const handleOpen = useCallback(() => {
        clearInterval(intervalID);
        dispatch(PlayerActions.setIsStop());
        setIsOpen(!isOpen);
    }, [dispatch]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleChangeY = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            if (newValue * x > length) {
                dispatch(AxisActions.increaseYaxis(newValue));
            } else if (newValue * x < length) {
                dispatch(AxisActions.decreaseYaxis(newValue));
            }
        },
        [y]
    );

    const handleChangeX = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            if (newValue * y > length) {
                dispatch(AxisActions.increaseXaxis(newValue));
            } else if (newValue * y < length) {
                dispatch(AxisActions.decreaseXaxis(newValue));
            }
        },
        [x]
    );

    const handleChangeSpeed = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            dispatch(PlayerActions.setSpeed(newValue));
        },
        [dispatch]
    );

    const handleChangeRandomIndex = useCallback(
        (event: React.SyntheticEvent, newValue: number) => {
            dispatch(PlayerActions.setRandomIndex(newValue));
        },
        [dispatch]
    );

    const maxHeight = checkGridMaxHeight();
    const maxWidth = checkGridMaxWidth();

    return (
        <>
            <Btn onClick={handleOpen} />
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
                            value={speed}
                            onChange={handleChangeSpeed}
                        />
                        <SizeSlider
                            label='Random Index'
                            step={0.1}
                            min={0.1}
                            max={0.9}
                            value={randomIndex}
                            onChange={handleChangeRandomIndex}
                        />
                    </Box>
                </Box>
            </StyledDrawer>
        </>
    );
});

DasboardBtn.displayName = 'DashboardBtn';
