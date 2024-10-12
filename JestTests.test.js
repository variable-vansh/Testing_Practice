const functions = require('./functions');


test('takes in "vansh", gives out "Vansh"', () => {
    expect(functions.capitalize('vansh')).toBe('Vansh')
})

test('takes in "vansh", gives out "hsnav"', () => {
    expect(functions.reverseString('vansh')).toBe('hsnav')
})

test('calculator add(2,3)=5', () => {
    expect(functions.calculator.add(2, 3)).toBe(5)
})

test('calculator subtract(2,3)=-1', () => {
    expect(functions.calculator.subtract(2, 3)).toBe(-1)
})

test('calculator multiply(2,3)=6', () => {
    expect(functions.calculator.multiply(2, 3)).toBe(6)
})

test('calculator divide(3,2)=1.5', () => {
    expect(functions.calculator.divide(3, 2)).toBe(1.5)
})

test('caesarCipher for ("xyz, 3") is "abc"', () => {
    expect(functions.caesarCipher("xyz", 3)).toBe("abc")
})

test('caesarCipher for ("HeLLo", 3) is "KhOOr"', () => {
    expect(functions.caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

test('caesarCipher for ("Hello, World!", 3) is "Khoor, Zruog!"', () => {
    expect(functions.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})

test('analyze array [1,8,3,4,2,6]', () => {
    expect(functions.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})




