import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { GridReducer } from './reducers/index';

export const rootReducer = combineReducers({
    form: formReducer,
    grid: GridReducer
});

export type RootState = ReturnType<typeof rootReducer>;

