import React from 'react';
import { StyledBtn } from '../StyledComponents';

type Props = { username?: string };

const HelloWorld: React.FC<Props> = (props) => {
    const { username } = props;

    const handleClick = () => {
        alert('Click!');
    };

    return <StyledBtn onClick={handleClick}>Hello World {username}</StyledBtn>;
};

export default HelloWorld;
