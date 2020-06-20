import { PlayerActions } from './index';
import configureStore from 'redux-mock-store';

describe('test actions', () => {
    const mockStore = configureStore([]);
    const store = mockStore();
    beforeEach(() => {
        store.clearActions();
    });
    it('should create an action play', () => {
        const expectedAction = [
            {
                payload: true,
                type: 'PLAYER:PLAY'
            }
        ];

        store.dispatch(PlayerActions.setIsPlay());
        expect(store.getActions()).toMatchSnapshot();
    });
});
