import React, { useState } from 'react';

import styled from 'styled-components';
import { Cell } from '../Cell';

export const Container = styled.div<{ width: number; height: number }>`
    display: flex;
    flex-wrap: wrap;
    width: ${({ width }) => `${26 * width}px`};
    height: ${({ height }) => `${26 * height}px`};
    margin: auto;
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.4);
    border: 1px solid darkgrey;
`;

type Props = {};

export const Grid: React.FC<Props> = (props) => {
    const {} = props;

    const [isHorizontalLength, setIsHorizontalLength] = useState(10);
    const [isVerticalLength, setIsVerticalLength] = useState(10);

    return (
        <Container width={isHorizontalLength} height={isHorizontalLength}>
            {Array.from(
                { length: isHorizontalLength * isVerticalLength },
                (item, index) => (
                    <Cell key={index} index={index} />
                )
            )}
        </Container>
    );
};
