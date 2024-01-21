const {findMax, convertScoreToGrade}= require('./dz')

describe("test findMax", () => {
    test("findMax должен быть true", () => {
        expect(findMax(4,2)).toEqual(4)
        expect(findMax(2)).toEqual(true)
    })
    test("findMax должен быть false", () => {
        expect(findMax(0)).toEqual(false)
        expect(findMax(-1)).toEqual(false)
    })
})

describe("test convertScoreToGrade", () =>{

})