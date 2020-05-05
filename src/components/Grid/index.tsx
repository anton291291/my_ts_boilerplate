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

    return (
        <Container width={state.x} height={state.y}>
            {Array.from({ length: state.x * state.y }, (item, index) => (
                <Cell key={index} index={index} />
            ))}
        </Container>
    );
};
