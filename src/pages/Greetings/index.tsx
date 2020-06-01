import React, { useEffect } from 'react';

import { EntranceForm } from '@/components';
import { useHistory } from 'react-router';
import { isLoggedIn } from '@/utills/helper';

type Props = {};

export const Greetings: React.FC<Props> = (props) => {
    const {} = props;

    let history = useHistory();

    useEffect(() => {
        isLoggedIn() && history.push('/game');
    }, []);

    return <EntranceForm />;
};
