import React from 'react';
import { Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { LogoutBtn } from '.';

describe('LogoutBtn', () => {
    const mockPush = jest.fn();

    const historyMock = { push: mockPush, location: {}, listen: jest.fn() };

    const output = mount(
        <Router history={historyMock}>
            <LogoutBtn />
        </Router>
    );

    test('should render correctly', () => {
        expect(toJson(output)).toMatchSnapshot();
    });

    test('handelLogout func should delete from localStorage', () => {
        output.simulate('click');
        expect(localStorage.removeItem).toHaveBeenCalledWith('name');
    });

    test('handelLogout should push the history', () => {
        expect(mockPush).toHaveBeenCalledWith('/');
    });
});
