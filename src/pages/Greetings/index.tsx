import React, { useEffect } from 'react';

import { EntranceForm } from '@/components';
import { useHistory } from 'react-router';
import { isLoggedIn } from '@/utils/helper';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { PlayerActions } from '@/store/actions';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

type Props = {};

export const Greetings: React.FC<Props> = (props) => {
    const {} = props;

    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        isLoggedIn() &&
            dispatch(PlayerActions.getName()) &&
            history.push('/game');
    }, []);

    return (
        <Container>
            <EntranceForm />
        </Container>
    );
};
