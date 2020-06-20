import React from 'react';

import styled from 'styled-components';
import { Cell } from '../Cell';
import { RootState } from '@/store/rootReducer';
import { useSelector } from 'react-redux';

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

    const {
        cells,
        axis: { x, y }
    } = useSelector((state: RootState) => state.grid);

    return (
        <Container width={x} height={y}>
            {cells.map((item) => (
                <Cell
                    isClicked={item.isClicked}
                    key={item.index}
                    index={item.index}
                />
            ))}
        </Container>
    );
};
