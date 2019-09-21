class FizzBuzz {
    // static say(number) {
    //     if (number % 3 === 0 && number % 5 === 0)
    //         return "FizzBuzz";
    //     else if (number % 3 === 0)
    //         return "Fizz";
    //     else if (number % 5 === 0)
    //         return "Buzz";
    //     else return number;
    // }
    // let b1 = (number % 3 === 0);
    // let b2 = (number % 5 === 0);
    static Say(number) {
        // switch (true) {
        //     case true && true:
        //         return "FizzBuzz";
        //         break;
        //     case true && false:
        //         return "Fizz";
        //         break;
        //     case false && true:
        //         return "Buzz";
        //         break;
        //     default:
        //         return number;
        // }
    }

    static mod(number, base) {
        while (number > base) {
            nunber -= base;
        }
        return number;

    }
}
module.exports = FizzBuzz;