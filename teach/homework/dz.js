// function findMax(num1, num2) {
//     if (typeof num1 !== 'number' && typeof num2 !== 'number') {
//         console.log("Введите число")
//         return false
//     }
//     if (num1, num2 <= 0) {
//         console.log("Не корректные данные")
//         return false
//     }
//     if (num1 > num2) {
//         console.log(`число ${num1} больше`)
//         return num1
//         return true
//     } if (num1 < num2) {
//         console.log(`число ${num2} больше`)
//         return num2
//         return true
//     } if (num1 == num2) {
//         console.log("Они равны")
//         return false
//     }
//     else {
//         console.log("aboba")
//         return false
//     }
// }
// findMax(4, 2)

// function convertScoreToGrade(score) {
//     if (typeof score !== 'string') {
//         console.log("неверное значение")
//         return false
//     }
//     if (score == "кол") {
//         console.log('ваша оценка 1')
//         return true
//     }
//     if (score == "два") {
//         console.log('ваша оценка 2')
//         return true
//     }
//     if (score == "три") {
//         console.log('ваша оценка 3')
//         return true
//     }
//     if (score == "четыре") {
//         console.log('ваша оценка 4')
//         return true
//     }
//     if (score == "пять") {
//         console.log('ваша оценка 5')
//         return true
//     }
//     else{
//         console.log('неверное значение')
//     }
// }
// convertScoreToGrade(1)

// function conventator(num) {
//     if (typeof num !== 'number') {
//         console.log('неверное значение')
//     }
//     else {
//         console.log("от 0 до 9")
//     }
//     if (num == 0) {
//         console.log("нуль")
//     } else if (num == 1){
//         console.log("адын")
//     } else if (num == 2){
//         console.log("два")
//     } else if (num == 3) {
//         console.log("three")
//     } else if (num == 4){
//         console.log("four")
//     } else if (num == 5) {
//         console.log("five")
//     } else if (num == 6){
//         console.log("six")
//     } else if (num == 7) {
//         console.log("sev")
//     } else if (num == 8){
//         console.log("eight")
//     } else if (num == 9){
//         console.log("nine")
//     }
//
// }
// conventator(2)

// function convertKbMbGb(size, unit){
//     if (typeof unit !== 'string'){
//         console.log('Неверное значение')
//     }
//     if (typeof size !== 'number'){
//         console.log('Неверное значение')
//     }
//     if (unit == "Кб"){
//         let n = size * 1024
//         console.log(`перевод Кб в байт = ${n}`)
//     } else if (unit == "Мб"){
//         let n = size * 1024
//         console.log(`перевод Мб в Кб = ${n}`)
//     } else if (unit == "Гб"){
//     let n = size * 1024
//     console.log(`перевод Гб в Мб = ${n}`)
// }
// }
//
// convertKbMbGb(1024, 123)

// function middle(num1, num2, num3){
//     if (typeof num1 !== 'number', typeof num2 !== 'number', typeof num3 !== 'number'){
//         console.log("неверное значение")
//     }
//     if (num1 > num2 && num1 > num3 && num2 > num3){
//         console.log(num2)
//     } else if(num2 > num1 && num2 > num3 && num1 > num3){
//         console.log(num3)
//     }
// }
//
// middle(2, 3, 1)

// function applyDiscount(price, discount) {
//     if (typeof price !== 'number'){
//         console.log("Неверное значение")
//     }
//     if (typeof discount !== 'number'){
//         console.log("Неверное значение")
//     }
//     if (price >= 10000){
//         let summ = price * discount / 100
//         let summ2 = price - summ
//         console.log(summ2)
//     }
//     else {
//         console.log(price)
//     }
// }
//
// applyDiscount(10000, 10)

// function isPasswordStrong(password){
//     if (password.length < 6) {
//         console.log("Пароль должен быть больше 6 символов");
//     } else if (password.search(/\d/) == -1) {
//         console.log("Пароль должен содержать цифру");
//     } else{
//         console.log("Принято")
//     }
// }
//
// isPasswordStrong("заыуа")

// function classifyTemperature(temp){
//     if (temp < 0){
//         console.log("Холодно")
//     }
//     else if (temp > 0 && temp <= 20){
//         console.log("Тепло")
//     }
//     else if (temp > 20){
//         console.log("Жарко")
//     }
// }
//
// classifyTemperature(21)

// function isEven(number){
//     if (typeof number !== "number"){
//         console.log("feasryuio")
//     }
//     if (number % 2){
//         console.log("нечёт")
//         return false
//     }
//     if (!(number % 2)){
//         console.log("чёт")
//         return true
//     }
// }
//
// isEven(3)

// function calculateDeliveryCost(distance, isFragile){
//     if (typeof distance !== "number"){
//         console.log("Неверное значение")
//     }
//     if (typeof isFragile !== "string"){
//         console.log("Неверное значение")
//     }
//     if (distance > 0 && isFragile == "да"){
//         let summ = distance * 5 + 10
//         console.log(summ)
//     } else if(distance > 0 && isFragile == "нет"){
//         let summ2 = distance * 5
//         console.log(summ2)
//     }
// }
//
// calculateDeliveryCost(100, "нет")

// function ageRange(age){
//     if (typeof age !== 'number'){
//         console.log("не правильна")
//     }
//     if (age < 12){
//         console.log("Подросток")
//     }
//     else if (age >= 12 && age <= 65){
//         console.log("Взрослый")
//     }
//     else if (age > 65){
//         console.log("Пенсионер")
//     }
// }
//
// ageRange(124)

// function getSeason(month){
//     let season = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//     if (typeof month !== "number"){
//         console.log("afegsjfgh")
//     }
//     if (month === season[11] || month === season[0] || month === season[1]){
//         console.log("Зима")
//     } else if(month === season[2] || month === season[3] || month === season[4]){
//         console.log("Весна")
//     } else if(month === season[5] || month === season[6] || month === season[7]){
//         console.log("Лето ")
//     } else if(month === season[8] || month === season[9] || month === season[10]){
//         console.log("Осень ")
//     }
// }
//
// getSeason(8)

// function isHollidayHere(day){
//     if (typeof day !== 'number'){
//         console.log('awdefsrdyfugko;kdj')
//     } if (day == 6 || day == 7){
//         console.log("Holliday is here!")
//         return true
//     }
//     if (day <= 5 && day > 0){
//         console.log("Another bad day")
//         return false
//     }
//     else {
//         console.log(":P")
//     }
// }
//
// isHollidayHere(6)

// function getSomeHelp(nalog, cost){
//     let summ = cost * nalog / 100
//     let summ2 = cost - summ
//     return summ2
// }
// function cuntDiscribe(cost){
//     if (typeof cost !== 'number'){
//         console.log("Неверное значение")
//     }
//     if (cost < 10000 && cost > 0){
//         console.log(`сумма налога составит ${getSomeHelp(17, cost)}`)
//     } else if(cost > 10000){
//         console.log(`сумма налога составит ${getSomeHelp(20, cost)}`)
//     }
//     else {
//         console.log(cost)
//     }
// }
//
// cuntDiscribe(10001)

// function discountAge(age, summa){
//     if (typeof age !== 'number'){
//         console.log("не правильна")
//     }
//     if (typeof summa !== 'number'){
//         console.log("не правильна")
//     }
//     if (age < 7 && age >= 0){
//         let summ = summa * 15 / 100
//         let summ2 = summa - summ
//         console.log(`Вы ребёнок, ваша скидка 15%. К оплате ${summ2}`)
//     }
//     else if (age >= 7 && age <= 17){
//         let summ = summa * 10 / 100
//         let summ2 = summa - summ
//         console.log(`Вы школьник, ваша скидка 10%. К оплате ${summ2}`)
//     }
//     else if (age >= 18 && age <= 65){
//         console.log(`Вы взрослый, вам без скидки, лошара)))). К оплате ${summa}`)
//     }
//     else if (age > 65){
//         let summ = summa * 20 / 100
//         let summ2 = summa - summ
//         console.log(`Вы пенсионер, ваша скидка 20%. К оплате ${summ2}`)
//     }
// }
//
// discountAge(66, 1000)

// function filmClass(rate){
//     if (typeof rate !== 'string'){
//         console.log('wrong')
//     }
//     if (rate == "G"){
//         console.log("for all")
//     } else if (rate == "PG"){
//         console.log("children with adult")
//     }else if (rate == "PG-13"){
//         console.log("for children older when 13")
//     }else if (rate == "R"){
//         console.log("for adult")
//     }
// }
//
// filmClass("PG-13")



module.exports = {}