import React, { memo, useCallback } from 'react';

import styled from 'styled-components';
import { CellsActions } from '@/store/actions';
import { useDispatch } from 'react-redux';

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
    transition: all 0.2s;
    user-select: none;
`;

type Props = {
    index: number;
    isClicked: boolean;
};

export const Cell: React.FC<Props> = memo(function Cell(props) {
    const { index, isClicked } = props;

    const dispatch = useDispatch();

    const handleClick = useCallback(
        (index: number) => {
            dispatch(CellsActions.clickCell(index));
        },
        [dispatch]
    );

    return (
        <StyledCell onClick={() => handleClick(index)} isClicked={isClicked}></StyledCell>
    );
});

Cell.displayName = 'Cell';
