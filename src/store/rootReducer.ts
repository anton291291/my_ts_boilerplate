import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { GridReducer } from './reducers/index';

export default combineReducers({
    form: formReducer,
    grid: GridReducer
});
