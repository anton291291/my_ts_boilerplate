import React, { useState, createContext } from 'react';

export const GridContext = createContext({} as GridContextType);

type StateType = {
    x: number;
    y: number;
};

type GridContextType = {
    state: StateType;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
};

export const GridProvider = ({ children }) => {
    const [state, setState] = useState({ x: 50, y: 15 });
    return (
        <GridContext.Provider value={{ state, setState }}>
            {children}
        </GridContext.Provider>
    );
};
