const {users} = require('./data')
const getArrayCusum = (arr) => {
    let totalCount = 0
    for (const arrElement of arr){
        console.log(arrElement)
        totalCount ++
    }

    return totalCount
}

const getLenght = (arr) => {
    const arrCopy = {...arr}
    const reversArray = arrCopy.reverse()
    const firstReverseelement = reversArray[0]
    const index = arr.indexOf(firstReverseelement)
    return index + 1
}


function spliceSet(arr) {

    const arrCopy = [...arr]
    console.log('deleteElement', arrCopy.splice(1, 10, "1","2","3"))

    console.log(arr.length)
    console.log(arrCopy.length)
    return arrCopy

}

function removeSplice (arr) {

    const arrCopy = [...arr]
    const luser =
        {
            "firstName": "Jeffrey",
            "secondName": "Walter",
            "gender": "female",
            "city": "East Noble",
            "phoneNumver": "445.225.7502",
            "age": 93,
            "id": "16"
        }

    console.log("delete", arrCopy.splice(4, 3, luser))

    return arrCopy

}

function concatTest(arr){
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5 ,6]
    let newArr = []
    newArr = newArr.concat(arr1, arr2);


    return newArr
}

function testForEach (arr) {

    let totalSynAge = 0
    let countFemale = 0;
    let countMale = 0
    arr.forEach((user, index)=>{
    console.log(user.firstName, user.age);
    totalSynAge = totalSynAge + user.age;

    user.city='Astana';



    if (user.age > 55){
        user.isPensoParty = true
    }
    else {
        user.isPensoParty = false
    }
        if (user.gender === 'female'){
            countFemale++
        }

            if (user.gender === 'male'){
            countMale++

            }

    })
    console.log(".!.",countMale)
    console.log("(.)(.)",countFemale)
    const averageAge = totalSynAge/arr.length
    console.log(users)
}

console.log(testForEach(users))