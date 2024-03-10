const {convertUser} = require ("./classnayaRabota")

describe("tests for convertUserData", () => {
    test("result should be Иван Иванов", () => {
        expect(convertUser("иван", "иванов")).toEqual("Иван Иванов")
        expect(convertUser(" иван", "иванов ")).toEqual("Иван Иванов")
        expect(convertUser(" Иван", "иванов ")).toEqual("Иван Иванов")
        expect(convertUser("", "иванов ")).toEqual("Иванов")
        expect(convertUser("Иванов", "")).toEqual("Иванов")
    })
})