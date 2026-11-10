const sumEvenNumbers = require("../question3");

describe("sumEvenNumbers", () => {
    test("should sum even numbers in nested objects", () => {
        const input = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        };

        expect(sumEvenNumbers(input)).toBe(6);
    });
});