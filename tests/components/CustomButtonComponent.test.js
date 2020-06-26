import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomButton from '../../src/components/CustomButton';
import { TouchableOpacity } from 'react-native';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
    setErrorMock = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("CustomButtonComponent", () => {
    it("renders", () => {
        shallow(<CustomButton />);
    })

    it("press the button", () => {
        const onPress = jest.fn();
        const wrapper = shallow(<CustomButton onPress={onPress}/>);
        wrapper.find(TouchableOpacity).simulate("press");
        expect(onPress).toHaveBeenCalled();
    })
}) 