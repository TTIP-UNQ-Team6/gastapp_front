import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {act} from 'react-dom/test-utils';
import { RegisterScreen } from '../../src/screens/RegisterScreen';
import { AuthContext } from '../../src/context/AuthContext';

Enzyme.configure({ adapter: new Adapter() });

const value = {
    register: jest.fn(),
}
const registerScreen = <AuthContext.Provider value={value}> <RegisterScreen/> </AuthContext.Provider>

afterEach(() => {
    jest.clearAllMocks();
});

describe('RegisterScreen', () => {
    it('renders', () => {
        shallow(registerScreen);
    })
    
    it('should call the register method', () => {
        const wrapper = mount(registerScreen);
        act(() => {
            wrapper.find('TextInput').at(0).instance().props.onChangeText("usuario")
            wrapper.find('TextInput').at(2).instance().props.onChangeText("email@mail.com")
            wrapper.find('TextInput').at(4).instance().props.onChangeText("contraseña123")
        })

        wrapper.find("TouchableOpacity").at(0).simulate('click');
        expect(value.register).toHaveBeenCalledTimes(1); 
    })

    it('should not call the register method', () => {
        const wrapper = mount(registerScreen);
        act(() => {
            wrapper.find('TextInput').at(0).instance().props.onChangeText("u")
            wrapper.find('TextInput').at(2).instance().props.onChangeText("invalid email")
            wrapper.find('TextInput').at(4).instance().props.onChangeText("p")
        })

        wrapper.find("TouchableOpacity").at(0).simulate('click');
        expect(value.register).toHaveBeenCalledTimes(0); 
    })
});

