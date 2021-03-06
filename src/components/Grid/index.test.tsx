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

    test('by default Cell components isClicked prop should be false', () => {
        expect(output.find('Cell').at(0).prop('isClicked')).toBe(false);
    });

    test('Cell component onClick  the isClicked prop value should be true', () => {
        output.find('Cell').at(0).simulate('click');
        expect(output.find('Cell').at(0).prop('isClicked')).toBe(true);
    });
});
