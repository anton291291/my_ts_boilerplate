import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { styleSheetSerializer } from 'jest-styled-components';

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(styleSheetSerializer);
