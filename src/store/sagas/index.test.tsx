import { expectSaga } from 'redux-saga-test-plan';
import { put, select, take } from 'redux-saga/effects';
import { watchStartGame, watchStartGameFromForm } from './index';
import { rootReducer } from '../rootReducer';

describe('sagas', () => {
    test('sh1', () => {
        return expectSaga(watchStartGame)
            .withReducer(rootReducer)
            .put({ type: 'CELLS:SIMULATE_LIFE' })
            .dispatch({ type: 'PLAYER:PLAY' })
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
