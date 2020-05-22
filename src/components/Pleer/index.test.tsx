import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { GridProvider } from '../../hooks/contextHooks';
import { Pleer } from '.';
import { shallowToJson, mountToJson } from 'enzyme-to-json';

describe('Pleer', () => {
    const output = mount(
        <GridProvider>
            <Pleer />
        </GridProvider>
    );

    test('should render correctly', () => {
        expect(mountToJson(output)).toMatchSnapshot();
    });

    test('Checking generation default state', () => {
        expect(output.find('GenField').text()).toEqual('Generation: 1');
    });

    test('Checking Pleer  Play/Pause btns', () => {
        output.find('Random').simulate('click');
        output.find('Play').simulate('click');
        expect(output.find('Pause').exists()).toBeTruthy;
        output.find('Pause').simulate('click');
        expect(output.find('Play').exists()).toBeTruthy;
    });
  
});
