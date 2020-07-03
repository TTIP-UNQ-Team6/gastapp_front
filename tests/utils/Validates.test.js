import { validateEmail, validateUsername, validatePassword, validateAmount } from '../../src/utils/Validates';

let setErrorMock;

beforeEach(() => {
    setErrorMock = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("Email validation", () => {
    it("should be true", () => {
        const validEmail = "mail@mail.com";
        expect(validateEmail(validEmail, setErrorMock)).toBeTruthy();
    })

    it("should be false", () => {
        const invalidEmail = "an invalid email";
        expect(validateEmail(invalidEmail, setErrorMock)).toBeFalsy();
        expect(setErrorMock).toHaveBeenCalled();
    })
}) 

describe("Username validation", () => {
    it("should be true", () => {
        const validUsername = "Username";
        expect(validateUsername(validUsername, setErrorMock)).toBeTruthy();
    })

    it("should be false", () => {
        const invalidUsername = "u";
        expect(validateUsername(invalidUsername, setErrorMock)).toBeFalsy();
        expect(setErrorMock).toHaveBeenCalled();
    })
}) 

describe("Email validation", () => {
    it("should be true", () => {
        const validPassword = "password123";
        expect(validatePassword(validPassword, setErrorMock)).toBeTruthy();
    })

    it("should be false", () => {
        const invalidPassword = "123";
        expect(validatePassword(invalidPassword, setErrorMock)).toBeFalsy();
        expect(setErrorMock).toHaveBeenCalled();
    })
}) 

describe("Email validation", () => {
    it("should be true", () => {
        const validAmount = "120";
        expect(validateAmount(validAmount, setErrorMock)).toBeTruthy();
    })

    it("should be false", () => {
        const invalidAmount = "0";
        expect(validateAmount(invalidAmount, setErrorMock)).toBeFalsy();
        expect(setErrorMock).toHaveBeenCalled();
    })

    it("should be false", () => {
        const invalidAmount = "amount";
        expect(validateAmount(invalidAmount, setErrorMock)).toBeFalsy();
        expect(setErrorMock).toHaveBeenCalled();
    })
}) 