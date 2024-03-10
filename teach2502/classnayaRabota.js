// function testSearch(str){
//     console.log(str)
//     console.log(str.indexOf("a"))
//     console.log(str.lastIndexOf("о"))
//     let count = 0
//     const target = "k"
//     let pos = 0
//     while (true){
//         let foundPos = str.indexOf(target, pos)
//         console.log("Position" + foundPos)
//         pos = foundPos + 1
//         if (foundPos === -1){
//             break
//         }
//         count ++
//     }
//     console.log(count)
// }
//
// testSearch("aaaaajjjjjooooofffffkkfksfdskmv")
//
// function trimAndUpper (str){
//     if (!str){
//         return ""
//     }
//     const trimStr = str.trim()
//     const firstLetter = trimStr[0].toUpperCase()
//     const resultStr =  `${firstLetter}${trimStr.slice(1)}`
//     return `${firstLetter}${trimStr.slice(1)}`
// }
//
// function convertUser (firstName, lastName){
//     // const result = `${trimAndUpper(firstName)}${trimAndUpper(lastName)}`
//     // return firstName ? result : result.trim()
//     const args = [firstName, lastName]
//     const result = []
//     args.forEach((el => {
//         result.push(trimAndUpper(el))
//     }))
//     return result.join(" ").trim()
//
// }
//
// function testSplit(str){
//     return str.split(" ").join(" - ")
// }
//
// console.log (testSplit("qawdf3e eafsrgdtfyug6i7 f4wadefgrfhthtf"))
//
// console.log(convertUser(" Иван", " Иванов"))

// const sravnenie = () =>{
//     const a = "a"
//     const z = "z"
//     console.log(a > z)
// }
// console.log(sravnenie())

const isPasswordStrong = (pass) => {
    let countSmallLetter = 0
    let countBigLetter = 0
    let countNumber = 0
    const includeInRangeSmallLetter = (number) => {
        if (number >= 95 && number <= 122) {
            return true
        } else {
            return false
        }
    }
    const includeInRangeBigLetter = (number) => {
        if (number >= 65 && number <= 90) {
            return true
        } else {
            return false
        }
    }
    const includeInRangeChislo = (number) => {
        if (number >= 48 && number <= 57) {
            return true
        } else {
            return false
        }
    }

    for (const elem of pass) {

        if (includeInRangeSmallLetter(elem.codePointAt(0))) {
            countSmallLetter++
        }

        if (includeInRangeBigLetter(elem.codePointAt(0))) {
            countBigLetter++
        }

        if (includeInRangeChislo(elem.codePointAt(0))) {
            countNumber++
        }
    }
    console.log(countSmallLetter)
    console.log(countBigLetter)
    console.log(countNumber)
    return true
}

isPasswordStrong("123Pqa38r")

//65-90 glav
//97-122 mal
//48-57 chisl

// module.exports = {convertUser}