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
};

type IntervalIDType = {
    intervalID: number;
};

type isPlayType = {
    isPlay: boolean;
    speed: number;
}

type StateType = AxisType & CellType & IntervalIDType & isPlayType;

type GridContextType = {
    state: StateType;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const GridProvider = ({ children }) => {
    const [state, setState] = useState({
        axis: { x: 50, y: 15 },
        cells: [],
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
