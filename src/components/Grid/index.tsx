import React from 'react';

import styled from 'styled-components';
import { Cell } from '../Cell';
import { RootState } from '@/store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { CellsActions } from '../../store/actions/index';

export const Container = styled.div<{ width: number; height: number }>`
    display: flex;
    flex-wrap: wrap;
    transition: all 0.01s;
    width: ${({ width }) => `${26 * width}px`};
    height: ${({ height }) => `${26 * height}px`};
    margin: auto;
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.4);
    border: 1px solid darkgrey;
`;

type Props = {};

export const Grid: React.FC<Props> = (props) => {
    const {} = props;

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.grid);
    const y = useSelector((state: RootState) => state.grid.axis.y);
    const x = useSelector((state: RootState) => state.grid.axis.x);

    const handleClick = (index: number) => {
      dispatch(CellsActions.clickCell(index))
    };

    return (
        <Container width={x} height={y}>
            {state.cells.map((item) => (
                <Cell
                    isClicked={item.isClicked}
                    key={item.index}
                    index={item.index}
                    onClick={() => handleClick(item.index)}
                />
            ))}
        </Container>
    );
};
