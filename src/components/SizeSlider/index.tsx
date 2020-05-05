import React from 'react';
import { StyledSlider } from '../StyledComponents';
import { Box } from '@material-ui/core';

type Props = {
    onChange: (e, value) => void;
    value: number;
    min?:  number;
    max?:  number;
};

export const SizeSlider: React.FC<Props> = (props) => {
    const { onChange, value, min, max } = props;

    return (
        <Box width='300px' m={3}>
            <StyledSlider
                min={min}
                max={max}
                onChange={onChange}
                value={value}
                valueLabelDisplay='auto'
            />
        </Box>
    );
};
