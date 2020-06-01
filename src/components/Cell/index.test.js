import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';

import { Cell } from './index';
import { Provider } from 'react-redux';
import store from '@/store/store';

describe('Cell', () => {
    const output = mount(
        <Provider store={store}>
            <Cell />
        </Provider>
    );

    test('should render correctly', () => {
        expect(mountToJson(output)).toMatchSnapshot();
    });
});
