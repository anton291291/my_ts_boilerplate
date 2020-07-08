import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { EntranceForm } from '.';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';
describe('EntranceForm', () => {
    const mockPush = jest.fn();

    const historyMock: any = {
        push: mockPush,
        location: {},
        listen: jest.fn()
    };

    const output = mount(
        <Provider store={store}>
            <Router history={historyMock}>
                <EntranceForm />
            </Router>
        </Provider>
    );

    test('should render correctly', () => {
        expect(mountToJson(output.find('EntranceForm'))).toMatchSnapshot();
    });

    test('test handleForm should save to localStorage', () => {
        output.find('StyledInput').invoke('onChange')({
            target: { value: 'Anton' }
        });
        expect(localStorage.setItem).toHaveBeenCalledWith('name', 'Anton');
    });
    test('test handleStart push route', () => {
        output.find('StyledBtn').invoke('onClick')();
        expect(mockPush).toHaveBeenCalledWith('/game');
    });
});
