const loopWhile=() =>{
    console.log("Amoga")
    let i = 0

    while (i <= 10){
        i = i + 1
        console.log("Привет")

    }
}


const loopWhile2 = (value, stopSlovo)=>{
    let i = 0
    console.log(i)
    i = i + 1
    while (true){
        if (i === value){
            continue
        }
        if (i === stopSlovo){
            break
        }



    }
}

function loopDoWhile(stopValue){
    console.log("Start loop")
    let count = 0
    do {

        if (count === 0) {
            console.log("Один раз отработал")
        } else {
            console.log(count)
        }
        count = count + 1
    } while (count < stopValue)
    console.log("End loop")
}

const loopSlider= (numbersPict) => {

    console.log("Looooop")

    let  count = 0
    let totalCount = 0

    while (true){

        count = count +1
        console.log(`Slider show ${count}`)
        totalCount = totalCount + 1
        if (count === numbersPict + 1) {
            count = 0
            console.log("again")
        }
        else if(totalCount === 50){
            break
        }
    }

}

function loopFor() {
    for (let i = 0; i <= 3; i++) {
        console.log("Holla", i)
    }
}

function loopFor2(startValue, stopValue, step){
    console.log("Start loopforo")

    for (let i = startValue; i <= stopValue; i = i + step){
        console.log("end loopooo")
    }

    console.log("end looooooooooooopooooooooooooooo")
}

function printEvenNumber(startNum, stopNum){
    console.log('start')
    for (let i = startNum; i <= stopNum; i++){
        if (!(i % 2)){
            console.log("Чёт", i)
        }
    }
    console.log("end")
}

function getTotalSum(startValue, stopValue){
    console.log("Start")
    let sum = 0
    for (let i = startValue; i < stopValue; i++) {
        sum = sum + i

        console.log(`oldSum=${sum}, i=${sum} newSum=oldSum-${sum} + i-${sum} ${sum + 1}`)
        sum = sum + i
    }
}

function loopInLoop(){
    for (let i = 0; i < 10; i++){
        console.log(`i ${i}`)
        for (let j = 0; j < 10; j++){
            console.log(`j ${j}`)
        }
            for (let k = 0; k < 10; k++){
                console.log(`k ${k}`)
            }
    }

}

const isPrime = (value) => {
    if (value === 0){
        return false
    }
    let count = 0
    for (let i = 1; i <= value; i++){
        if (i === 1 || i === value){
            continue
        }
        if (value % i === 0){
            console.log("оно живое")
            count = count + 1
            return false

        }
    }
    return true
}

console.log(isPrime(24))