// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

function sortArray(arr){
  var result = arr
  // console.log("arr awal", result)
  
  for (var i = 0; i < result.length; i++){
      for (var j = 0; j < result.length - 1; j++){
        if(result[j] < result[j + 1]){
          var number = result[j]
          result[j] = result[j + 1]
          result[j+ 1] = number
        }
      }
  }
  return result
}

const input = [1, 2, 4, 3, 5, 3, 2, 1]
console.log(sortArray(input))
//console.log(input.sort().reverse())

module.exports = sortArray;