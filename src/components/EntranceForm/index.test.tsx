import React from 'react';
import { mount, shallow } from 'enzyme';
import { mountToJson, shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { EntranceForm } from '.';
import { GridContext } from '../../hooks/contextHooks';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
describe('EntranceForm', () => {
    const y = 15;
    const x = 30;

    const setState = jest.fn();

    const value = {
        state: {
            axis: { x: x, y: y },
            cells: Array.from({ length: y * x }, (item, index) => ({
                index: index,
                isClicked: false
            })),
            gen: 1,
            name: '',
            intervalID: null,
            isPlay: false,
            speed: 1,
            randomIndex: null
        },
        setState: setState
    };

    const history = createMemoryHistory();

    const output = mount(
        <GridContext.Provider value={value}>
            <Router history={history}>
                <EntranceForm />
            </Router>
        </GridContext.Provider>
    );

    test('should render correctly', () => {
        expect(mountToJson(output)).toMatchSnapshot();
    });

    test('test handleForm should save to localStorage', () => {
        output.find('StyledInput').invoke('onChange')({
            target: { value: 'Anton' }
        });
        expect(localStorage.setItem).toHaveBeenCalledWith('name', 'Anton');
    });


    test('test handleStart', () => {     
        output.find('StyledBtn').simulate('click');
        expect(setState).toHaveBeenCalled();
        expect(setState).toHaveBeenCalledTimes(3);

    });
});
