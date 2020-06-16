import { all } from 'redux-saga/effects';
import { watchStartGameFromForm, watchStartGame } from '.';

export function* rootSaga() {
    yield all([watchStartGameFromForm(), watchStartGame()]);
}
