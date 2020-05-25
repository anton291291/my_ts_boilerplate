import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import { DasboardBtn } from './index';
import { GridProvider } from '../../hooks/contextHooks';

describe('DashboardBtn', () => {
    const output = mount(
        <GridProvider>
            <DasboardBtn />
        </GridProvider>
    );

    test('should render correctly', () => {
        expect(toJson(output)).toMatchSnapshot();
    });

    test('the drawer should open on button click', () => {
        output.find('Btn').simulate('click');
        expect(output.find('StyledDrawer').prop('open')).toBe(true);
    });

    test('the drawer should close on an onClose prop function execution', () => {
        output.find('StyledDrawer').invoke('onClose')();
        expect(output.find('StyledDrawer').prop('open')).toBe(false);
    });

    test('X coordinate slider onChange function  should change value with smaller argument then default value ', () => {
        output.find('SizeSlider').at(1).invoke('onChange')({}, 20);
        expect(output.find('SizeSlider').at(1).prop('value')).toBe(20);
    });

    test('X coordinate slider onChange function should change value with bigger argument then default value', () => {
        output.find('SizeSlider').at(1).invoke('onChange')({}, 100);
        expect(output.find('SizeSlider').at(1).prop('value')).toBe(100);
    });

    test('Y coordinate slider onChange functionp should change value with smaller argument then default value', () => {
        output.find('SizeSlider').at(0).invoke('onChange')({}, 20);
        expect(output.find('SizeSlider').at(0).prop('value')).toBe(20);
    });
    test('Y coordinate slider onChange function  should change value with bigger argument then default value', () => {
        output.find('SizeSlider').at(0).invoke('onChange')({}, 10);
        expect(output.find('SizeSlider').at(0).prop('value')).toBe(10);
    });
    test('Speed slider onChange function  should change value with bigger argument then default value', () => {
        output.find('SizeSlider').at(2).invoke('onChange')({}, 30);
        expect(output.find('SizeSlider').at(2).prop('value')).toBe(30);
    });
    test('Random Index slider onChange function  should change value ', () => {
        output.find('SizeSlider').at(3).invoke('onChange')({}, 0.5);
        expect(output.find('SizeSlider').at(3).prop('value')).toBe(0.5);
    });
});
