import React, { useState, createContext, useEffect } from 'react';

export const GridContext = createContext({} as GridContextType);

type AxisType = {
    axis: {
        x: number;
        y: number;
    };
};

type CellType = {
    cells: Array<{
        index?: number | null;
        isClicked?: boolean;
    }>;
    gen: number;
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
}

type StateType = AxisType & CellType & IntervalIDType & isPlayType & FormType;

type GridContextType = {
    state: StateType;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const GridProvider = ({ children }) => {
    const [state, setState] = useState({
        axis: { x: 30, y: 15 },
        cells: [],
        gen: 1,
        name: '',
        intervalID: null,
        isPlay: false,
        speed: 1
    });

    const y = state.axis.y;
    const x = state.axis.x;

    useEffect(() => {
        setState((state) => ({
            ...state,
            cells: Array.from({ length: y * x }, (item, index) => ({
                index: index,
                isClicked: false
            }))
        }));
    }, []);

    return (
        <GridContext.Provider value={{ state, setState }}>
            {children}
        </GridContext.Provider>
    );
};
