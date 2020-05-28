import React, { memo } from 'react';
import styled from 'styled-components';
import { StyledSlider } from '../StyledComponents';
import { Box, Typography } from '@material-ui/core';

type Props = {
    label: string;
    onChange: (e, value) => void;
    value: number;
    min?: number;
    max?: number;
    step?: number;
};

const Label = styled(Typography)`
    width: 60px;
    padding-left: 20px;
`;

export const SizeSlider: React.FC<Props> = memo(function SizeSlider(props) {
    const { label, onChange, value, min, max, step } = props;


console.log('rerender')

    return (
        <Box display='flex' alignItems='center' height='110px'>
            <Label>{label}</Label>
            <Box width='300px' m={3}>
                <StyledSlider
                    step={step}
                    min={min}
                    max={max}
                    onChange={onChange}
                    value={value}
                    valueLabelDisplay='auto'
                />
            </Box>
        </Box>
    );
});

SizeSlider.displayName = 'SizeSlider';
