export const PlayerActions = {
    setIsPlay: () =>
        ({
            type: 'PLAYER:PLAY',
            payload: true
        } as const),

    setIsStop: () =>
        ({
            type: 'PLAYER:STOP',
            payload: false
        } as const),

    setReset: () =>
        ({
            type: 'PLAYER:RESET'
        } as const),

    setRandomIndex: (index: number) =>
        ({
            type: 'PLAYER:SET_RANDOM_INDEX',
            payload: index
        } as const),

    setSpeed: (index: number) =>
        ({
            type: 'PLAYER:SET_SPEED_INDEX',
            payload: index
        } as const),

    setGen: (value: number) =>
        ({
            type: 'PLAYER:SET_GENERATION',
            payload: value
        } as const),
    getName: () =>
        ({
            type: 'PLAYER:GET_NAME'
        } as const)
};

export const GreetingFormActions = {
    setStart: () =>
        ({
            type: 'GREETINGFORM:START'
        } as const)
};

export const AxisActions = {
    increaseXaxis: (value: number) =>
        ({
            type: 'AXIS:INCREASE_X',
            payload: value
        } as const),
    decreaseXaxis: (value: number) =>
        ({
            type: 'AXIS:DECREASE_X',
            payload: value
        } as const),
    increaseYaxis: (value: number) =>
        ({
            type: 'AXIS:INCREASE_Y',
            payload: value
        } as const),
    decreaseYaxis: (value: number) =>
        ({
            type: 'AXIS:DECREASE_Y',
            payload: value
        } as const)
};

export const IntervalIDAction = {
    setIntervalID: (id: number) =>
        ({
            type: 'INTERVALID:SET_VALUE',
            payload: id
        } as const)
};

export const CellsActions = {
    clickCell: (index: number) =>
        ({
            type: 'CELLS:CLICK',
            payload: index
        } as const),
    randomCells: () =>
        ({
            type: 'CELLS:RANDOM'
        } as const),

    simulateLife: () =>
        ({
            type: 'CELLS:SIMULATE_LIFE'
        } as const)
};
