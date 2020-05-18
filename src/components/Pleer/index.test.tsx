import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { GridProvider } from '../../hooks/contextHooks';

describe('Pleer', () => {
    const output = mount(
        <GridProvider>
            <div />
        </GridProvider>
    );

    test('should render correctly', () => {
        expect(toJson(output)).toMatchSnapshot();
    });

    test('', () => {
        console.log(toJson(output));
    });
});
