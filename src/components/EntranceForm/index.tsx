import React, { useState, useContext, useCallback, useEffect } from 'react';

import styled from 'styled-components';

import { StyledInput } from '../StyledComponents';
import { GridContext } from '@/hooks/contextHooks';
import { simulateLife } from '@/utills/algorithm';
import { Fade, Typography } from '@material-ui/core';
import { StyledBtn } from '../StyledComponents/index';
import { useHistory } from 'react-router';

const FormContainer = styled.div`
    width: 600px;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid white;
    border-radius: 10px;
    box-shadow: 0 0 7px 0 white;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Header = styled(Typography)`
    && {
        margin-bottom: 30px;
    }
`;

type Props = {};

export const EntranceForm: React.FC<Props> = (props) => {
    const {} = props;

    const { state, setState } = useContext(GridContext);

    let history = useHistory();

    const handleReset = useCallback(() => {
        clearInterval(state.intervalID);

        setState((state) => ({
            ...state,
            cells: state.cells.map((obj) => {
                return { ...obj, isClicked: false };
            }),
            isPlay: false,
            gen: 1
        }));
    }, [setState, state.intervalID]);

    const handleStart = () => {
        handleReset();
        setState((state) => ({
            ...state,
            cells: state.cells.map((obj) => {
                if (Math.random() > 0.7) {
                    return { ...obj, isClicked: true };
                }
                return obj;
            }),
            isPlay: true
        }));

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

        history.push('/game');
    };

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('name', e.target.value);
    };

    return (
        <>
            <Fade timeout={500} in={true}>
                <FormContainer>
                    <Header variant='h4'>
                        Welcome to Conway`s Game of Life
                    </Header>
                    <StyledInput
                        required
                        label='Enter your name'
                        variant='outlined'
                        onChange={handleForm}
                    />
                    <StyledBtn onClick={handleStart}>Start</StyledBtn>
                </FormContainer>
            </Fade>
        </>
    );
};
