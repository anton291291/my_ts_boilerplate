import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { Player } from '.';
import { mountToJson } from 'enzyme-to-json';
import store from '@/store/store';
import { Provider } from 'react-redux';

describe('Player', () => {
    const output = mount(
        <Provider store={store}>
            <Player />
        </Provider>
    );

    test('should render correctly', () => {
        expect(mountToJson(output)).toMatchSnapshot();
    });

    test('Checking generation default state', () => {
        expect(output.find('GenField').text()).toEqual('Generation: 1');
    });

    test('Checking Player  Play/Pause btns', () => {
        output.find('Random').simulate('click');
        output.find('Play').simulate('click');
        expect(output.find('Pause').exists()).toBeTruthy;
        output.find('Pause').simulate('click');
        expect(output.find('Play').exists()).toBeTruthy;
    });
});
