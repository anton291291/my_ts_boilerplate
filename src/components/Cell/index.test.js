import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Cell } from './index';

describe('Cell', () => {
    const output = shallow(<Cell />);

    test('should render correctly', () => {
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    test('by default isClicked prop should be false', () => {
        expect(output.prop('isClicked')).toBe(false);
    });

    test('on Click the prop value should be true', () => {
        output.simulate('click');
        expect(output.prop('isClicked')).toBe(true);
    }); 
});
