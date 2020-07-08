import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';

import { Cell } from './index';
import store from '@/store/store';
import { Provider } from 'react-redux';

describe('Cell', () => {
    const output = mount(
        <Provider store={store}>
            <Cell index={0} isClicked={false} />
        </Provider>
    );

    test('should render correctly', () => {
        expect(mountToJson(output)).toMatchSnapshot();
    });
});
