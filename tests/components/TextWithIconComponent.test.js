import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextWithIconComponent from '../../src/components/TextWithIconComponent';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
    setErrorMock = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("TextWithIconComponent", () => {
    it("renders", () => {
        shallow(<TextWithIconComponent />);   
    })

    it("changes the text", () => {
        const onChange = jest.fn();
        const text = "nuevo texto";
        const wrapper = shallow(<TextWithIconComponent onChange={onChange}/>);
        wrapper.find("TextInput").simulate("changeText", text);
        expect(onChange).toHaveBeenCalledWith(text);
    })
}) 