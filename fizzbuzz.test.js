const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
    test("Test 1 expect 1", () => {
        const result = FizzBuzz.say(1);
        expect(result).toEqual(1) // Assest function
    });

    test("Test 1 expect 1", () => {
        const result = FizzBuzz.say(3);
        expect(result).toEqual("Fizz") // Assest function
    });

    test("Test 1 expect 1", () => {
        const result = FizzBuzz.say(5);
        expect(result).toEqual("Buzz") // Assest function
    });

    test("Test 1 expect 1", () => {
        const result = FizzBuzz.say(15);
        expect(result).toEqual("FizzBuzz") // Assest function
    });

    test("test5mod5 ruturn0", () => {

    });

});