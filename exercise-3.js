// Melakukan Looping Data Array

var input = [
                  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

var label = ['Nomor ID' , 'Nama Lengkap' , 'TTL' , 'Hobi']
var output = ''


function dataHandling(arr,arr2) {
      for (var i = 0 ; i < arr.length ; i++) {
            for (var j = 0 ; j < arr[i].length-1 ; j ++){
                  if ( j == 2 ){
                        output += arr2[2] + ': ' + arr[i][j] + ', ' + arr[i][j+1];
                        output += '\n';
                  }
                  else if (j == 3 ){
                        output += arr2[j] + ': ' + arr[i][j+1];
                        output += '\n';
                  }
                  else{
                  output += arr2[j] + ': ' + arr[i][j];
                  output += '\n';
                  }
            }
            output += '\n';      
      }
      console.log(output);            
}

dataHandling(input,label)

