//Target Terdekat

function targetTerdekat(arr) {

    postO = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            postO.push(i)
        }
    }

    postX = []
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] === 'x') {
            postX.push(j)
        }
    }

    if (postX.length === 0) {
        return 0
    } else if (postO[0] > postX[postX.length - 1]) {
        return postO[0] - postX[postX.length - 1]
    } else if (postO.length < postX.length) {
        return postX[0] - postO[0]
    }

}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

  