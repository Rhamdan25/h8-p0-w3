// // Mengakses Nilai Dalam Array


// function balikString(str) {
//       var result = ''
//       for (var i = str.length-1 ; i >= 0 ; i--) {
//         result += str[i]
//       }
//       console.log(result);
// }

// balikString('hello world!')


// //input "hello world!"
// //output
// // "!dlrow olleh"


function balikString(str){
  var result ='';
  
  for(var i = str.length-1 ; i >= 0  ; i --){
      result += str[i];
  }
  return result;
}

console.log (balikString("hello world!"))