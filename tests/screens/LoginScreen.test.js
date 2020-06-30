import React from 'react';
import {shallow, mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {act} from 'react-dom/test-utils';
import { LoginScreen } from '../../src/screens/LoginScreen';
import { AuthContext } from '../../src/context/AuthContext';

Enzyme.configure({ adapter: new Adapter() });

const value = {
    login: jest.fn(),
}
const loginScreen = <AuthContext.Provider value={value}> <LoginScreen/> </AuthContext.Provider>

afterEach(() => {
    jest.clearAllMocks();
});

describe('LoginScreen', () => {
    it('renders', () => {
        shallow(loginScreen);
    })

    it('should call the login method', () => {
        const wrapper = mount(loginScreen);
        act(() => {
            wrapper.find('TextInput').at(0).instance().props.onChangeText("email@mail.com")
            wrapper.find('TextInput').at(2).instance().props.onChangeText("contraseña123")
        })

        wrapper.find("TouchableOpacity").at(0).simulate('click');
        expect(value.login).toHaveBeenCalledTimes(1); 
    })

    
    it('should not call the login method', () => {
        const wrapper = mount(loginScreen);
        act(() => {
            wrapper.find('TextInput').at(0).instance().props.onChangeText("email invalido")
            wrapper.find('TextInput').at(2).instance().props.onChangeText("a")
        })

        wrapper.find("TouchableOpacity").at(0).simulate('click');
        expect(value.login).toHaveBeenCalledTimes(0); 
    })
});

