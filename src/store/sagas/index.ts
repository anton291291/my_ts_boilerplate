import { select, put, takeLatest, delay } from 'redux-saga/effects';
import { speedSelector, isPlaySelector } from '../selectors';
import { PlayerActions, GreetingFormActions, CellsActions } from '../actions';

export function* startSimulateLife() {
    const speed = yield select(speedSelector);
    while (yield select(isPlaySelector)) {
        yield put(CellsActions.simulateLife());
        yield delay(speed * 100);
    }
}

export function* startGameFromForm() {
    yield put(GreetingFormActions.setReady());
    yield startSimulateLife();
}

export function* watchStartGame() {
    yield takeLatest(PlayerActions.setIsPlay().type, startSimulateLife);
}

export function* watchStartGameFromForm() {
    yield takeLatest(GreetingFormActions.setStart().type, startGameFromForm);
}
