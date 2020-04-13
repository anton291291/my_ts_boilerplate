import styled from 'styled-components';

export const StyledBtn = styled.div<{ width?: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: limegreen;
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 4px;
    width: ${({ width }) => `${width}px` || '100px;'};
    transition: all 0.4s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
`;
