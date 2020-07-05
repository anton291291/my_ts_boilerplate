import React, { useCallback } from 'react';

import styled from 'styled-components';

import { StyledInput } from '../StyledComponents';
import { Fade, Typography } from '@material-ui/core';
import { StyledBtn } from '../StyledComponents/index';
import { useHistory } from 'react-router';
import { RootState } from '@/store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { PlayerActions } from '@/store/actions';
import { GreetingFormActions } from '../../store/actions/index';
import { setLogIn } from '@/utils/helper';

const FormContainer = styled.div`
    width: 600px;
    margin: auto;
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

    const state = useSelector((state: RootState) => state.grid);
    const dispatch = useDispatch();

    let history = useHistory();

    const handleReset = useCallback(() => {
        dispatch(PlayerActions.setIsPlay());
    }, [dispatch]);

    const handleStart = () => {
        dispatch(GreetingFormActions.setStart());
        history.push('/game');
    };

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogIn(e.target.value);
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
