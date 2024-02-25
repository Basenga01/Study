const sumToN = (n) => {

    for (let i = 1; i <= n; i++){
        if (i === 1 || i === n){
            console.log(i)
        }
        }
}


function countdown(n){
    for (let i = 1; i <= n; n--){
        console.log(n)
        if (i === 1 || i === n) {
            console.log(n)
        }
    }
}

function calculateFactorial(n) {
    for(let i = n; --i; ) {
        n *= i;
    }
}

function createRepeatedString(char, n){
    for (let i = 1; i <= n; i++){
        if (i === n) {
            let string = char.repeat(n)
            console.log(string)
        }
    }
}

function findLongestWord(sentence) {
    let stringi = sentence.split(' ');
    let longer = 0;
    for(let i = 0; i < stringi.length; i++){
        if(stringi[i].length > longer){
            console.log(longer)
            longer = stringi[i].length;
        }
    }
    console.log(longer)
}
console.log(findLongestWord("abiba aefvbbf eiegsigmespim boba"))

function countdownTimer(duration){
    let i = 0
    while (duration != 0){
        duration--
        console.log(duration)
    }
}

console.log(countdownTimer(60))

function convertMinutesToHours(minute){
    let time = 0
    while (minute != time){
        if (minute - 60){
            time++
        }

    }
    console.log(time, minute)
}

console.log(convertMinutesToHours(130))