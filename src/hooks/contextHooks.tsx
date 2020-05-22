import React, { useState, createContext } from 'react';
export const GridContext = createContext({} as GridContextType);

export declare namespace GlobalState {
    type CellItemType = { index: number; isClicked: boolean };

    type AxisType = {
        axis: {
            x: number;
            y: number;
        };
    };

    type CellType = {
        cells: Array<CellItemType>;
    };

    type IntervalIDType = {
        intervalID: number;
    };

    type isPlayType = {
        isPlay: boolean;
        speed: number;
    };

    type FormType = {
        name: string;
    };

    type GenType = {
        gen: number;
    };
}

export type StateType = GlobalState.AxisType &
    GlobalState.CellType &
    GlobalState.IntervalIDType &
    GlobalState.GenType &
    GlobalState.isPlayType &
    GlobalState.FormType;

type GridContextType = {
    state: StateType;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const GridProvider = ({ children }) => {
    const y = 15;
    const x = 30;

    const [state, setState] = useState({
        axis: { x: x, y: y },
        cells: Array.from({ length: y * x }, (item, index) => ({
            index: index,
            isClicked: false
        })),
        gen: 1,
        name: '',
        intervalID: null,
        isPlay: false,
        speed: 1
    });

    return (
        <GridContext.Provider value={{ state, setState }}>
            {children}
        </GridContext.Provider>
    );
};
