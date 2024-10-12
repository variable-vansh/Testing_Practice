function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function reverseString(s) {
    let r = "";
    for (let i = s.length - 1; i >= 0; i--) {
        r = r + s.charAt(i)
    }

    return r;
}

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
}

function caesarCipher(s, sf) {
    let r = '';
    let newAscii = 0;

    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);
        if ((ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123))
            if (((ascii < 91) && (ascii + sf > 90)) || ((ascii < 123) && (ascii + sf > 122))) {
                newAscii = ascii - (26 - sf);
            } else {
                newAscii = ascii + sf;
            }
        else {
            newAscii = ascii;
        }
        let newChar = String.fromCharCode(newAscii);
        r = r + newChar;
    }

    return r;
}

function analyzeArray(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let avg = sum / len;


    let output = {
        average: avg,
        min: min,
        max: max,
        length: len
    }

    return output;
}


module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
