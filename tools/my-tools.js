function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
}
const arr1 = [1,2,3,4];

const shuffleTheArray = (arr) => {
    // let prevArr = arr.slice(0, arr.length);
    let prevArr = [...arr];
  let shuffledArr = [];
    for (let i = 0; i<4; i++) {
        const index = getRandomInt(0, prevArr.length - 1);
        shuffledArr.push(prevArr[index]);
        prevArr.splice(index, 1);
    }
    return (shuffledArr)
}

const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

module.exports = {
    getRandomInt,
    shuffleTheArray,
    add,
    subtract
};