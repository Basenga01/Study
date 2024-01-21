const {isAdult}= require('./index2')

describe("test isAdult", () => {
    test("isAdult должен быть true", () => {
        expect(isAdult(18)).toEqual(true)
        expect(isAdult(19)).toEqual(true)
    })
    test("isAdult должен быть false", () => {
        expect(isAdult(12)).toEqual(false)
    })
    test("isAdult негативные сценарии", () => {
        expect(isAdult(-1)).toEqual("Не корректные данные")
        expect(isAdult(0)).toEqual("Не корректные данные")
        expect(isAdult()).toEqual("Введите значение")
        expect(isAdult("ddasd")).toEqual("Введите число")
    })
})