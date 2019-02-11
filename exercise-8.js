function pasanganTerbesar(num) {
  // you can only write your code here!
    var numSet = num.toString()
    var result = 0
    for (var i = 0 ; i < numSet.length; i ++){
        if (numSet[i] + numSet[i+1] > result){
            result = Number (numSet[i] + numSet[i+1])
        }
    }
    return result;


  // var numSet = num.toString()
  // var result = 0
  // for (var i = 0; i < numSet.length; i++) {
  //   if (numSet[i]+numSet[i+1] > result ) {
  //       result = Number(numSet[i]+numSet[i+1])
  //   }
  
  // }
  // return result

}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99