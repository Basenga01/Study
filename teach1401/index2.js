function isAdult(age) {

    if (typeof age !== "number" && !age) {
        return "Введите значение"
    }
    if (typeof age !== "number") {
        return "Введите число"
    }

    if (age <= 0) {
        return "Не корректные данные"
    }
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

module.exports = {isAdult}