// string строка
const str = "1234"

//number число 2^53-1
const num = 1234

//boolean логическая
const boolTrue = true
const boolFalse = false

// null неизвестное значение
const nullValue = null

//undefined неприсвоенное значение
let undefinedValue = undefined

// bigint - целые числа произвольной длинны
const bigNumber = BigInt(5)
//symbol - уникальные идентификаторы

const symbol = Symbol(2)
//object - сложные структуры данных {}
const obj = {a: "1", b: "2"}

/*console.log("num", typeof (num))
console.log("str", typeof (str))
console.log("boolFalse", typeof (boolFalse))
console.log("nullValue", typeof (nullValue))
console.log("undefinedValue", typeof (undefinedValue))
console.log("bigint", typeof (bigNumber))
console.log("symbol", typeof (symbol))*/
const chel={
    firstName:"Ivan",
    surnameName:"Ivanov",
    age: 29,
    location: {
        city: "Zajopinsk",
        street: "Lenina, 35",
        index: 228777
    }
}
const myFirstObj = {
    a: 1,
    b: 2,
    c: 3,
    'la9': 228,
    obj: {
        a: 2123,
        b: 1352768,
        c: []
    }
}
const arr = [1, 2, 3, 4]
const arr2 = ["1", '2', '3']
const arr3 = [chel, chel, chel]
console.log(`Чел с фамилией ${chel.surnameName}`, `в городе ${chel.location.city}`);
console.log(arr[1])
console.log(arr2[0, 1])
console.log(arr3[2])