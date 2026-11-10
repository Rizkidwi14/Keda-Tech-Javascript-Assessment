const sortArray = require("../question1");

describe("sortArray", () => {
    test("should sort numbers in descending order", () => {
        expect(sortArray([1, 2, 4, 3, 5]))
            .toEqual([5, 4, 3, 2, 1]);
    });

    test("should handle an empty array", () => {
        expect(sortArray([])).toEqual([]);
    });
});