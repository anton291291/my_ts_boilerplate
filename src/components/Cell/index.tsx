import React, { useState } from 'react';

import styled from 'styled-components';

export const StyledCell = styled.div<{ isClicked: boolean }>`
    background: ${({ isClicked }) =>
        isClicked ? 'darkslateblue' : 'transparent'};
    border: 1px solid darkgrey;
    padding: 2px;
    width: 20px;
    height: 20px;
    font-size: 1rem;
    color: white;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
`;

type Props = { index: number };

export const Cell: React.FC<Props> = (props) => {
    const { index } = props;

    const [isClicked, setIsClicked] = useState(false);
    const [isIndexValue, setIsIndexValue] = useState<number>();

    const handleClick = () => {
        setIsClicked(true);
        setIsIndexValue(index);
    };

    return (
        <StyledCell isClicked={isClicked} onClick={handleClick}>
            {isIndexValue}
        </StyledCell>
    );
};
