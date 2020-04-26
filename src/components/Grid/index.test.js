import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson, { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import { Grid, Container } from './index';

describe('Grid', () => {
    test('should render correctly', () => {
        const output = shallow(<Grid />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    test('by default width prop should be 10', () => {
        const output = shallow(<Grid />);
        expect(output.prop('width')).toBe(10);
        expect(output.prop('height')).toBe(10);
    });

    test('by default it should have 100 children', () => {
        const output = shallow(<Grid />);
        expect(output.children()).toHaveLength(100);
    });

    test('by default with props = 10 , it should have width and height = 260px ', () => {
        const output = shallow(<Grid />);
        expect(output.find(Container)).toHaveStyleRule('width', '260px');
        expect(output.find(Container)).toHaveStyleRule('height', '260px');
    });
});
