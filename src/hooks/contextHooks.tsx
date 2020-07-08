/* import React, { createContext, useState } from 'react';
export const GridContext = createContext({} as GridContextType);

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
        name: null,
        intervalID: null,
        isPlay: false,
        speed: 1,
        randomIndex: 0.7
    });

    return (
        <GridContext.Provider value={{ state, setState }}>
            {children}
        </GridContext.Provider>
    );
}; */
