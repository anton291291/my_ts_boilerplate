import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import { Cell } from './index';

describe('Cell', () => {
    test('should render correctly', () => {
        const output = shallow(<Cell />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    test('by default isClicked prop should be false', () => {
        const output = shallow(<Cell />);
        expect(output.prop('isClicked')).toBe(false);
    });

    test('on Click the prop value should be true', () => {
        const output = shallow(<Cell />);
        output.simulate('click');
        expect(output.prop('isClicked')).toBe(true);
    });
});
