import React, { useEffect } from 'react';

import { EntranceForm } from '@/components';
import { useHistory } from 'react-router';

type Props = {};

export const Greetings: React.FC<Props> = (props) => {
    const {} = props;

    let history = useHistory();

    useEffect(() => {
        localStorage.getItem('name') && history.push('/game');
    }, []);


    return (
     
            <EntranceForm />
       
    );
};
