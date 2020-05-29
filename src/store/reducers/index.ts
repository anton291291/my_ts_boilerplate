import { ActionTypes } from '../actions/types';
import { simulateLife } from '@/utills/algorithm';
import { randomCells } from '@/utills/helper';

const y = 15;
const x = 30;

const initialState: StateType = {
    axis: { x: x, y: y },
    cells: Array.from({ length: y * x }, (item, index) => ({
        index: index,
        isClicked: false
    })),
    gen: 1,
    name: localStorage.getItem('name') || null,
    intervalID: null,
    isPlay: false,
    speed: 1,
    randomIndex: 0.7
};

export const GridReducer = (
    state = initialState,
    action: ActionTypes
): StateType => {
    const x = state.axis.x;
    const y = state.axis.y;
    let length = x * y - 1;

    switch (action.type) {
        case 'PLAYER:PLAY':
            return { ...state, isPlay: action.payload };
        case 'PLAYER:STOP':
            return { ...state, isPlay: action.payload };
        case 'PLAYER:RESET':
            return {
                ...state,
                cells: state.cells.map((obj) => {
                    return { ...obj, isClicked: false };
                }),
                isPlay: false,
                gen: 1
            };
        case 'PLAYER:SET_GENERATION':
            return { ...state, gen: action.payload };
        case 'PLAYER:SET_RANDOM_INDEX':
            return { ...state, randomIndex: action.payload };
        case 'PLAYER:SET_SPEED_INDEX':
            return { ...state, speed: action.payload };
        case 'AXIS:DECREASE_Y':
            return {
                ...state,
                axis: { ...state.axis, y: action.payload },
                cells: state.cells.slice(0, action.payload * x)
            };
        case 'AXIS:INCREASE_Y':
            return {
                ...state,
                axis: { ...state.axis, y: action.payload },
                cells: [
                    ...state.cells,
                    ...Array.from(
                        { length: action.payload * x - x * y },
                        () => ({
                            index: ++length,
                            isClicked: false
                        })
                    )
                ]
            };
        case 'AXIS:DECREASE_X':
            return {
                ...state,
                axis: { ...state.axis, x: action.payload },
                cells: state.cells.slice(0, action.payload * y)
            };
        case 'AXIS:INCREASE_X':
            return {
                ...state,
                axis: { ...state.axis, x: action.payload },
                cells: [
                    ...state.cells,
                    ...Array.from(
                        { length: action.payload * y - x * y },
                        () => ({
                            index: ++length,
                            isClicked: false
                        })
                    )
                ]
            };

        case 'INTERVALID:SET_VALUE':
            return { ...state, intervalID: action.payload };
        case 'CELLS:RANDOM':
            return {
                ...state,
                cells: state.cells.map((obj) => randomCells(obj, state))
            };
        case 'CELLS:CLICK':
            return {
                ...state,
                cells: state.cells.map((obj) => {
                    if (obj.index === action.payload)
                        return { ...obj, isClicked: !obj.isClicked };
                    return obj;
                })
            };
        case 'CELLS:SIMULATE_LIFE':
            return {
                ...state,
                cells: state.cells.map((obj, index, arr) =>
                    simulateLife(obj, index, arr, state)
                ),
                gen: state.gen + 1
            };
        case 'GREETINGFORM:SET_NAME':
            return { ...state, name: localStorage.getItem('name') };

        case 'GREETINGFORM:START':
            return {
                ...state,
                cells: state.cells.map((obj) => {
                    if (Math.random() > 0.7) {
                        return { ...obj, isClicked: true };
                    }
                    return obj;
                }),
                isPlay: true
            };
        default:
            return state;
    }
};
