import React from 'react';

import styled from 'styled-components';

export const StyledCell = styled.div<{ isClicked: boolean }>`
    background: ${({ isClicked }) =>
        isClicked ? 'darkslateblue' : 'transparent'};
    border: 1px solid darkgrey;
    padding: 2px;
    width: 20px;
    height: 20px;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s;
    user-select: none;
    
`;

type Props = {
    index: number;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    isClicked: boolean;
};

export const Cell: React.FC<Props> = (props) => {
    const { index, onClick, isClicked } = props;

    return <StyledCell onClick={onClick} isClicked={isClicked}></StyledCell>;
};
