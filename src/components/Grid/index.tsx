import React, { useContext } from 'react';

import styled from 'styled-components';
import { Cell } from '../Cell';
import { GridContext } from '../../hooks/contextHooks';

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

    const { state, setState } = useContext(GridContext);

    const x = state.axis.x;
    const y = state.axis.y;

    const handleClick = (index: number) => {
        setState((state) => ({
            ...state,
            cells: [...state.cells].map((obj) => {
                if (obj.index === index)
                    return { ...obj, isClicked: !obj.isClicked };
                return obj;
            })
        }));
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
