const {users}=require("../teach1102/data")

const testArr = ['Apple', 'Each', 'Banana']

const testIndexOff=(arr)=>{
    const copyArr  = arr.slice()
    console.log(copyArr.indexOf("Banana"))
    return arr
}
const testLastIndexOf=(arr, searchElement) =>{
    const copyArr = arr.slice()

    return copyArr.indexOf(searchElement)
}

const testIncludes = (arr, searchElement) => {
    console.log(arr)

    const copyArr = arr.slice()


    return copyArr.includes(searchElement)
}

const acceptScores = ['4', '5']

const getPassingGrade = (arrScores, score) => {
    return arrScores.includes((score))
}

// console.log(getPassingGrade(acceptScores, "4"))

const testFind = (arr) => {
    const callBack = (elem) =>{
        return elem.firstName === "Cesar"
    }

    arr.find(function (elem, index) {
        console.log(index,elem)
        return elem.firstName === 'Cesar'
    })
}

// console.log(testFind(users))

const customFind=(array, callback)=>{
    for (const elem of array) {
    if (callback(elem)) {
        return elem
    }
    }
    return undefined
}
const getFirstName = (elem) => {

    // if (elem.firstName === "Harry") {
    //     console.log(elem)
    //     console.log(true)
    //     return
    // } else {
    //     console.log(false)
    // }
    return elem.firstName === 'Harry'
}

// console.log(customFind(users, getFirstName))

const testFindIndex = (arr) => {
    return arr.findIndex(el => el.firstName === "Ericka")
}

// console.log(testFindIndex(users))
// console.log(users[testFindIndex(users)])

function testFilter(arr){
    const copyArr = arr.slice()
    arr.filter((elem) => {
        console.log(elem.age < 50, elem.age)
        return elem.age < 50
    })
}

function getAllMale (arr){
    return arr.filter(el => el.gender === "male")

    return arr.filter((el) => {
        return el.gender === 'male'
    })
    return arr.filter(function (elem){
        if (elem.gender === 'male') {
            return true
        } else {
            return false

        }
    })
}

// console.log(getAllMale(users))
// console.log(testFilter(users))

function testMap(arr){
    return arr.map(el =>{
        return {...el, gender: el.gender === "female" ? 'ЖЕНЩИИИИИНААААААА': el.gender}

    }
    )
}

function sysObrazovanie(arr){
    return arr.map (el =>{
        return {...el, value: el.age > 50 ? ["1", "2", "3", "4", "5"]: [1, 2, 3]}
    })
}

function getAllName (arr){
    return arr.map(el => el.firstName)
}

console.log(getAllName(users).indexOf("Harry"))

// console.log(sysObrazovanie(users))
// console.log(testMap(users))

function sortByAge(arr){
    const copyArr = arr.slice()

        return copyArr.sort((a, b)=>{
            return a.age - b.age
        }
    )
}
console.log(sortByAge(users))