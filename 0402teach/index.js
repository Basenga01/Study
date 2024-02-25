const fruits = ["banana", 'lemonka', 'each']

fruits[127]="дуриан"

console.log(fruits)

const student = [
    {id:1, name:'Ivan', kurs:3, hello: () =>{
        return "negr"
        }},
    {id:2, name:'Vanya', kurs:1},
]

console.log(student[0])
console.log('name', student[0].name)
console.log(student[0].hello())

//получение последнего элемента

console.log("Последний элемент", student[student.length -1]);
console.log("Последний элемент", student.at(-1));
fruits.push('kivi')
console.log(fruits)
fruits.pop()
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(i)
    console.log(fruits[i])
}

for (const fruit of fruits){
    console.log(fruit)
}
