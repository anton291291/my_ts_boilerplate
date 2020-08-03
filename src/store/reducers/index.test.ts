import { GridReducer } from './index';
import {} from 'module';
import { GreetingFormActions } from '../actions';
import { PlayerActions } from '@/store/actions';

describe('INITIAL_STATE', () => {
    const x = 3;
    const y = 3;

    const state = {
        axis: { x: x, y: y },
        cells: Array.from({ length: y * x }, (item, index) => ({
            index: index,
            isClicked: false
        })),
        gen: 1,
        name: null,
        isPlay: false,
        speed: 1,
        randomIndex: 0.1
    };
    test('is correct case "PLAYER:GET_NAME"', () => {
        localStorage.setItem('name', 'Anton');

        const expectedState = {
            axis: { x: x, y: y },
            cells: Array.from({ length: y * x }, (item, index) => ({
                index: index,
                isClicked: false
            })),
            gen: 1,
            name: 'Anton',
            isPlay: false,
            speed: 1,
            randomIndex: 0.1
        };

        expect(GridReducer(state, PlayerActions.getName())).toEqual(
            expectedState
        );
    });

    test('is correct case with big index "GREETINGFORM:READY_GREED"', () => {
        const mockMath = Object.create(global.Math);
        mockMath.random = () => 0.8;
        global.Math = mockMath;

        const expectedState = {
            axis: { x: x, y: y },
            cells: Array.from({ length: y * x }, (item, index) => ({
                index: index,
                isClicked: true
            })),
            gen: 1,
            name: null,
            isPlay: true,
            speed: 1,
            randomIndex: 0.1
        };

        expect(GridReducer(state, GreetingFormActions.setReady())).toEqual(
            expectedState
        );
    });

    test('is correct case with low index "GREETINGFORM:READY_GREED"', () => {
        const mockMath = Object.create(global.Math);
        mockMath.random = () => 0.6;
        global.Math = mockMath;

        const expectedState = {
            axis: { x: x, y: y },
            cells: Array.from({ length: y * x }, (item, index) => ({
                index: index,
                isClicked: false
            })),
            gen: 1,
            name: null,
            isPlay: true,
            speed: 1,
            randomIndex: 0.1
        };

        expect(GridReducer(state, GreetingFormActions.setReady())).toEqual(
            expectedState
        );
    });
});
