import React from 'react';

import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router';
import { logOut } from '@/utills/helper';

const Logout = styled(ExitToAppIcon)`
    position: absolute;
    right: 5px;
    color: white;
    transition: all 1s;
    &:hover {
        transform: scale(1.2);
    }
`;

type Props = {};

export const LogoutBtn: React.FC<Props> = (props) => {
    const {} = props;

    let history = useHistory();

    const handleLogout = () => {
        logOut();
        history.push('/');
    };

    return (
        <>
            <Logout onClick={handleLogout} />
        </>
    );
};
