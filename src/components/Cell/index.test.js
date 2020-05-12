import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Cell } from './index';

describe('Cell', () => {
    const output = shallow(<Cell />);

    test('should render correctly', () => {
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
