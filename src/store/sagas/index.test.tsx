/* eslint-disable jest/expect-expect */
import { expectSaga } from 'redux-saga-test-plan';
import { watchStartGame, watchStartGameFromForm } from './index';
import { rootReducer } from '../rootReducer';

describe('sagas', () => {
    test('check watchStartGame saga', () => {
        return expectSaga(watchStartGame)
            .withReducer(rootReducer)
            .put({ type: 'CELLS:SIMULATE_LIFE' })
            .dispatch({ type: 'PLAYER:PLAY', payload: true })
            .run();
    });
    test('check watchStartGameFromForm saga ', () => {
        return expectSaga(watchStartGameFromForm)
            .withReducer(rootReducer)
            .put({ type: 'GREETINGFORM:READY_GREED' })
            .put({ type: 'CELLS:SIMULATE_LIFE' })
            .dispatch({ type: 'GREETINGFORM:START_GAME' })
            .run();
    });
});
