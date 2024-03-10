let user = new Object()
const user1 = {}

const student = {
    name: 'Ivan',
    name1: undefined,
    age: 19,
    isStudent: true,
    voice: function (a) {
        return 'Привет!' + a
    },
    "like birds": false
}

console.log(student.voice("7"))

student.from = {city: "London"}

const getValue = (key, value) =>{
    const newStudent = {
        key:value
    }
    return student[key]
}

const setValue = (key, value) =>{
    const newStudent = {
        [key]:value
    }
    return student[key]
}

// console.log(setValue('name', 'Ivan'))
// console.log(setValue('age', 7))
//
// console.log((getValue('name', 'Ivan')))
//
// console.log(getValue('voice')("/"))

function mapperUserArray() {
    const users = [
        {id: 'User1', name: 'James'},
        {id: 'User2', name: 'John'},
        {id: 'User3', name: 'Jack'},
    ]
    const result = {
        user1:  {id: 'User1', name: 'James1'},
        user2:  {id: 'User2', name: 'John1'},
        user3:  {id: 'User3', name: 'Jack1'},
    }
    const mappedUser = {}
        users.forEach((user) =>{
            console.log(user.id, user)
            mappedUser[user.id] = user
    })
    console.log(mappedUser)
}
const createObj = (name, age) => {
    return{
        name,
        age,
        city: 'Moscow'
    }
}
console.log('name' in student)

const isValue = () =>{
    console.log('name' in student)
    console.log('name1' in student)
}

// const getAllValue = (obj) => {
//     for (const key in obj) {
//         console.log(key)
//         console.log(obj[key])
//     }
// }
// getAllValue(student)

const copyObj = () =>{
    const user = {
        name: 'Bob',
        age:12,
    }

    const str = 'Hello'
    let newStr = str
    newStr = 'Goodbye'
    const newUser = user
    newUser.city = 'Moscow'
    console.log(user)
    console.log(newUser)
}

console.log(copyObj())

const copyObj2 = () =>{
    const user = {
        name: 'Bob',
        age: 12,
        from: {
            city: 'Rostov'
        }
    }
    const newUser = {}
        for (const userKey in user){
            newUser [userKey] = user[userKey]
    }

}

const copyObj3 = () =>{
    const user = {
        name: 'Bob',
        age: 12,
        from: {
            city: 'Rostov'
        }
    }
    const newUser = {}
    Object.assign(newUser, user)
    user.from.city = 'Magadan'
    console.log(user)
    console.log(newUser)

}

copyObj3()

function optionsChain() {
    const user = {
        name: 'Bob',
        age: 12,
        voice:()=>{
           return  'hello'
        },
        student:{
            address:{
                street:{
                    name:"steet uwu"
                }
            }
        },
        from: {
            city: 'Rostov'
        }
    }
    if (user.student){
        if (user.student.address){

            if (user.student.address.street){
                console.log(user.student.address.street.name)
            }
        }
    } else {
        console.log("123thf")
    }
    console.log(user.student?.address?.street?.name)
    console.log(user.voice?.())
}
optionsChain()