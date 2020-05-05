import React from 'react';
import { StyledBtn } from '../StyledComponents';

type Props = { username?: string; width?: number };

const HelloWorld: React.FC<Props> = (props) => {
    const { username, width = 100 } = props;

    const handleClick = () => {
        alert('Click!');
    };

    return (
        <StyledBtn onClick={handleClick} width={width}>
            Hello World {username}
        </StyledBtn>
    );
};

export default HelloWorld;
