import React from 'react';
import {shallow, render} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LoginScreen } from '../../src/screens/LoginScreen';

Enzyme.configure({ adapter: new Adapter() });
let useContextMock;

beforeEach(() => {
    useContextMock = React.useContext = jest.fn();
    useContextMock.mockReturnValue("Test Value");
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('LoginScreen', () => {
    it('renders', () => {
        shallow(<LoginScreen/>);
    })
});

