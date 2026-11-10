// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

function maxSubarraySum(arr, num) {
    if (num <= 0 || num > arr.length) {
        return "error";
    }

    var maxSum = 0;

    for (var i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    var currentSum = maxSum;

    for (var i = num; i < arr.length; i++) {
        currentSum = currentSum - arr[i - num] + arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

var input1 = [100, 200, 300, 400];
var input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
var input3 = [-3, 4, 0, -2, 6, -1];

console.log(maxSubarraySum(input1, 2));
// console.log(maxSubarraySum(input2, 4));
// console.log(maxSubarraySum(input3, 2));


module.exports = maxSubarraySum;