import styled from 'styled-components';
import { Slider, TextField } from '@material-ui/core';

export const StyledBtn = styled.div<{ width?: number }>`
    background-color: #52af77;
    border-radius: 10px;
    color: white;
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0 0 20px 0px rgba(255, 255, 255, 0.3);
    transition: all 0.5s;
    cursor: pointer;
    text-transform: uppercase;
    user-select:none;

    &:hover {
        transform: translateY(3px);
        box-shadow: 0 3px 40px 0px rgba(255, 255, 255, 0.5);
    }
`;

export const StyledSlider = styled(Slider)`
    && {
        &.MuiSlider-root {
            color: #52af77;
        }

        .MuiSlider-rail {
            height: 5px;
            border-radius: 10px;
        }

        .MuiSlider-track {
            height: 5px;
            border-radius: 10px;
        }

        .MuiSlider-thumb {
            margin-top: -4px;
            &:hover,
            :active,
            :focus {
                box-shadow: inherit;
            }
        }
    }
`;

export const StyledInput = styled(TextField)`
    && {
        .MuiOutlinedInput-input {
            color: white;
        }

        .Mui-focused {
            fieldset {
                border-color: #52af77;
            }
        }

        .MuiOutlinedInput-notchedOutline {
            border-color: white;
        }

        &:hover fieldset {
            border-color: #52af77;
        }

        label {
            color: white;

            &.Mui-focused {
                color: #52af77;
            }
        }
    }
`;
