import React from 'react';
import { mount, shallow } from 'enzyme';
import { mountToJson, shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { EntranceForm } from '.';
import { GridContext } from '../../hooks/contextHooks';

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
            speed: 1
        },
        setState: setState
    };

    const output = mount(
        <GridContext.Provider value={value}>
            <EntranceForm />
        </GridContext.Provider>
    );

    test('should render correctly', () => {
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    test('EntranceBtn onClick func  should open Modal', () => {
        output.find('EntranceBtn').simulate('click');
        expect(output.find('ForwardRef(Modal)').prop('open')).toBeTruthy();
    });

    test('Modal onClose prop should close it', () => {
        output.find('ForwardRef(Modal)').invoke('onClose')();
        expect(output.find('ForwardRef(Modal)').prop('open')).toBeFalsy();
    });

    test('test handleForm', () => {
        const mockPersist = jest.fn();
        output.find('StyledInput').invoke('onChange')({ persist: mockPersist });
        expect(setState).toHaveBeenCalled();
        expect(mockPersist).toHaveBeenCalled();
    });

    test('test handlePlay', () => {
        output.find('StartBtn').invoke('onClick');
        expect(setState).toHaveBeenCalled();
    });
});
