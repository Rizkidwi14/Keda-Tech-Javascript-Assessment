const maxSubarraySum = require("../question2");

describe("maxSubarraySum", () => {
    test("should return the maximum subarray sum", () => {
        expect(maxSubarraySum([100, 200, 300, 400], 2))
            .toBe(700);
    });

    test("should handle negative numbers", () => {
        expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
            .toBe(5);
    });
});