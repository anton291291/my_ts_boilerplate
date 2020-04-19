import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import HelloWorld from './index';
import { StyledBtn } from '../StyledComponents';

describe('HelloWorld', () => {
    test('should render correctly', () => {
        const output = shallow(<HelloWorld />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    test('should handle the click event', () => {
        window.alert = jest.fn();
        const output = shallow(<HelloWorld />);
        output.simulate('click');
        expect(window.alert).toHaveBeenCalledWith('Click!');
    });

    it('testing props', () => {
        const output = shallow(<HelloWorld username='Peter' />);
        expect(output.find(StyledBtn).prop('width')).toBe(100);
    });
});
