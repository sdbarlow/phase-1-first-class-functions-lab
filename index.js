// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2);
}
 
const returnLastTwoDrivers = (array) => {
    return array.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    const newNum = fare
    return function(newNum){
        const finalNum = newNum * fare
        return finalNum;
    }
}

const fareDoubler = (finalNum) => {
    return finalNum * 2;
}

const fareTripler = (finalNum) => {
    return finalNum * 3;
}

function selectDifferentDrivers(array, input) {
    if (input === returnFirstTwoDrivers) {
        return array.slice(0,2);
    } else if (input === returnLastTwoDrivers) {
        return array.slice(2,4);
    }
}



const newNum = createFareMultiplier(3)
createFareMultiplier()
console.log(newNum(3));