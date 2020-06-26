import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DatePickerComponent from '../../src/components/DatePickerComponent';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
    setErrorMock = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("DatePickerComponent", () => {
    it("renders", () => {
        const initialDate = {toLocaleDateString: () => jest.fn()};
        shallow(<DatePickerComponent initialDate={initialDate}/>);
    })
    
    it("not render DateTimePicker", () => {
        const initialDate = {toLocaleDateString: () => jest.fn()};
        const wrapper = shallow(<DatePickerComponent initialDate={initialDate}/>);
        const node = wrapper.findWhere(n => n.prop('testID') === "dateTimePicker").at(0);
        expect(node.exists()).toBeFalsy();
    })

    it("render DateTimePicker", () => {
        const initialDate = {toLocaleDateString: () => jest.fn()};
        const wrapper = shallow(<DatePickerComponent initialDate={initialDate}/>);
        wrapper.find("TouchableOpacity").at(0).simulate("press");
        const node = wrapper.findWhere(n => n.prop('testID') === "dateTimePicker").at(0);
        expect(node.exists()).toBeTruthy();
    })
    
}) 