import React, { useState } from 'react';

import styled from 'styled-components';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Modal, Grow } from '@material-ui/core';
import { StyledInput } from '../StyledComponents';

const EntranceBtn = styled(PersonOutlineIcon)`
    color: white;
    position: absolute;
    right: 5px;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.2);
    }
`;

const FormContainer = styled.div`
    width: 300px;
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

const StartBtn = styled.div`
    background-color: #52af77;
    border-radius: 10px;
    color: white;
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.3);
    transition: all 0.5s;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        transform: translateY(3px);
        box-shadow: 0 3px 40px 0px rgba(255, 255, 255, 0.5);
    }
`;

type Props = {};

export const EntranceForm: React.FC<Props> = (props) => {
    const {} = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <EntranceBtn onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
            >
                <Grow timeout={500} in={open}>
                    <FormContainer>
                        <StyledInput label='Введите имя' variant='outlined' />
                        <StartBtn>Старт</StartBtn>
                    </FormContainer>
                </Grow>
            </Modal>
        </>
    );
};
