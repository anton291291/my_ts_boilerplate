import React, { useState, useContext } from 'react';

import styled from 'styled-components';
import { Drawer, Typography, Box } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { SizeSlider } from '../SizeSlider';
import { GridContext } from '../../hooks/contextHooks';

export const Btn = styled.div`
    cursor: pointer;
    transition: transform 0.8s;
    &:hover {
        transform: rotate(360deg);
    }
`;

export const StyledDrawer = styled(Drawer)`
    && {
        .MuiDrawer-paper {
            background: rgba(255, 255, 255, 0.25);
        }
    }
`;

type Props = {};

export const DasboardBtn: React.FC<Props> = (props) => {
    const {} = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const {state, setState} = useContext(GridContext);

    const handleChangeY = (event: React.SyntheticEvent, newValue: number) => {
        setState((state) => ({ ...state, y: newValue }));
    };

    const handleChangeX = (event: React.SyntheticEvent, newValue: number) => {
        setState((state) => ({ ...state, x: newValue }));
    };

    return (
        <>
            <Btn onClick={handleOpen}>
                <DashboardIcon style={{ color: 'white' }} />
            </Btn>
            <StyledDrawer anchor='bottom' open={isOpen} onClose={handleClose}>
                <Box pl='20px' display='flex' flexDirection='column'>
                    <Box display='flex' alignItems='center' height='110px'>
                        <Typography>Ширина по оси Y:</Typography>
                        <SizeSlider
                            max={Math.floor(
                                document.documentElement.clientHeight / 26 - 2
                            )}
                            value={state.y}
                            onChange={handleChangeY}
                        />
                    </Box>
                    <Box display='flex' alignItems='center'>
                        <Typography>Ширина по оси X:</Typography>
                        <SizeSlider
                            max={Math.floor(
                                document.documentElement.clientWidth / 26
                            )}
                            value={state.x}
                            onChange={handleChangeX}
                        />
                    </Box>
                </Box>
            </StyledDrawer>
        </>
    );
};
