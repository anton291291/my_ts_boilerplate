export const PlayerActions = {
    setIsPlay: () =>
        ({
            type: 'PLAYER:PLAY',
            payload: true
        } as const),

    setIsStop: () => ({
        type: 'PLAYER:STOP',
        payload: false
    } as const),
    setRandomIndex: (index: number) => ({
        type: 'PLAYER:SET_RANDOM_INDEX',
        payload: index
    } as const),

    setSpeed: (index: number) => ({
        type: 'PLAYER:SET_SPEED_INDEX',
        payload: index
    } as const),

    setGen: (value: number) => ({
        type: 'PLAYER:SET_GENERATION',
        payload: value
    } as const)
};

export const GreetingFormActions = {
    setName: (letter: string) => ({
        type: 'GREETINGFORM:SET_NAME',
        payload: letter
    } as const)
};

export const AxisActions = {
    setXaxis: (value: number) => ({
        type: 'AXIS:SET_X',
        payload: value
    } as const),
    setYaxis: (value: number) => ({
        type: 'AXIS:SET_Y',
        payload: value
    } as const)
};

export const IntervalIDAction = {
    setIntervalID: (id: number) => ({
        type: 'INTERVALID:SET_VALUE',
        payload: id
    } as const)
};

export const CellsActions = {
    randomCells: (payload: GlobalState.CellType) => ({
        type: 'CELLS:RANDOM',
        payload: payload
    } as const),

    simulateLife: (payload: GlobalState.CellType) => ({
        type: 'CELLS:SIMULATE_LIFE',
        payload: payload
    } as const)
};
