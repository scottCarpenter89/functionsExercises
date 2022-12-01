const difference = (num1, num2) => {
    return num1 - num2;
}

console.log(difference(0,2));

const product = (num1, num2) => {
    return num1 * num2;
}

console.log(product(3,2));

const printDay = dayOfWeek => {
    let day;

    switch (dayOfWeek) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3: 
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5: 
            day = "Thursday";
            break; 
        case 6: 
            day = "Friday";
            break;
        case 7: 
            day = "Saturday";
            break;
        default:
            day = undefined;
    }
    return day; 
}

console.log(`Day 3 is a ${printDay(3)}.`);

const lastElement = array1 => {
    let result; 
    if (array1 === 0) {
        result = undefined;
    }
    result = array1.pop();
    return result;
}

console.log(lastElement([1,2,3,4]));

const numberCompare = (num1, num2) => {
    if (num1 > num2) {
        console.log("The first number is greater.");
    } else if (num1 < num2) {
        console.log("The second number is greater.");
    } else {
        console.log("The numbers are equal in value.");
    }
}

numberCompare(1,1);
numberCompare(2,1);
numberCompare(1,2);

const singeLetterCount = (sentence, letter) => {
    const sentenceNoCase = sentence.toUpperCase();
    const letterNoCase = letter.toUpperCase();
    let count = 0;
    let instance = {letterNoCase: count}

    for (let index = 0; index < sentenceNoCase.length; index++) {
        let currentLetter = sentenceNoCase[index];

        if (currentLetter === letterNoCase) {
            count++;
            instance.letterNoCase = count;
        }
    }
    return instance.letterNoCase;
}

console.log(singeLetterCount("Black Rifle Coffee delivers coffee via mortars.", "o"));


const multipleLetterCount = string => {
    let resultObject = {};
   
    for (let index = 0; index < string.length; index++) {
        let char = string[index].toLowerCase();
        let keyArray = Object.keys(resultObject);
       
        if (resultObject[char] === undefined) {
            resultObject[char] = 1;
        } else {
            resultObject[char]++;
        }
        // if (!keyArray.includes(char)) {
        //     resultObject[char] = 1;
        // } else {
           
        //     resultObject[char]++;
        // }
    }
        return resultObject;
}

console.log(multipleLetterCount("The quick brown dog jumped over the log."));