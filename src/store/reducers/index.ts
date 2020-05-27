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
    name: null,
    intervalID: null,
    isPlay: false,
    speed: 1,
    randomIndex: 0.7
};

export const GridReducer = (
    state = initialState,
    action: ActionTypes
): StateType => {
    switch (action.type) {
        case 'PLAYER:PLAY':
            return { ...state, isPlay: action.payload };
        case 'PLAYER:STOP':
            return { ...state, isPlay: action.payload };
        case 'PLAYER:SET_GENERATION':
            return { ...state, gen: action.payload };
        case 'PLAYER:SET_RANDOM_INDEX':
            return { ...state, randomIndex: action.payload };
        case 'PLAYER:SET_SPEED_INDEX':
            return { ...state, speed: action.payload };
        case 'AXIS:SET_X':
            return { ...state, axis: { ...state.axis, x: action.payload } };
        case 'AXIS:SET_Y':
            return { ...state, axis: { ...state.axis, y: action.payload } };
        case 'INTERVALID:SET_VALUE':
            return { ...state, intervalID: action.payload };
        case 'CELLS:RANDOM':
            return {
                ...state,
                cells: state.cells.map((obj) => randomCells(obj, state))
            };
        case 'CELLS:SIMULATE_LIFE':
            return {
                ...state,
                cells: state.cells.map((obj, index, arr) =>
                    simulateLife(obj, index, arr, state)
                )
            };
        case 'GREETINGFORM:SET_NAME':
            return { ...state, name: localStorage.getItem('name') };
        default:
            return state;
    }
};
