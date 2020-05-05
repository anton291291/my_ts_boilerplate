import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import 'jest-styled-components';

import { Grid } from './index';
import { GridProvider } from '../../hooks/contextHooks';

describe('Grid', () => {
    const output = mount(
        <GridProvider>
            <Grid />
        </GridProvider>
    );
    test('should render correctly', () => {
        expect(toJson(output)).toMatchSnapshot();
    });

    test('by default width prop should be 50 and height should be 15', () => {
        expect(output.find(Grid).children().prop('width')).toBe(50);
        expect(output.find(Grid).children().prop('height')).toBe(15);
    });

    test('by default it should have 750 children', () => {
        expect(output.find('Container').prop('children')).toHaveLength(750);
    });

  /*   test('by default with props = 50 , it should have width and height = 1300px ', () => {
        expect(output.find('Container')).toHaveStyleRule('width', '1300px');
        expect(output.find('Container')).toHaveStyleRule('height', '390px');
    }); */
});
