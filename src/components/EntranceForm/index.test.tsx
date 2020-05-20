import React from 'react';
import { mount, shallow } from 'enzyme';
import { mountToJson, shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { EntranceForm } from '.';
import { GridProvider } from '../../hooks/contextHooks';

describe('EntranceForm', () => {
    const output = mount(
        <EntranceForm />,

        {
            wrappingComponent: GridProvider
        }
    );

    test('should render correctly', () => {
        expect(mountToJson(output)).toMatchSnapshot();
    });

    test('EntranceBtn onClick func  should open Modal', () => {
        output.find('EntranceBtn').simulate('click');
        expect(output.find('ForwardRef(Modal)').prop('open')).toBeTruthy();
    });

    test('Modal onClose prop should close it', () => {
        output.find('ForwardRef(Modal)').invoke('onClose')();
        expect(output.find('ForwardRef(Modal)').prop('open')).toBeFalsy();
    });

});
