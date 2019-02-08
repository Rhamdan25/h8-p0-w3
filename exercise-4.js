// Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

function dataHandling2 (arr) {
    arr.splice (1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    arr.splice (4, 1, "Pria", "SMA Internasional Metro");
    console.log (arr);
    
    var tanggal = arr[3];
    var timeSplit = tanggal.split ("/");
    var bulan = ""

    switch (timeSplit[1]) {
        case "01":
            bulan = "Januari";
            break;
        case "02":
            bulan = "Februari";
            break;
        case "03":
            bulan = "Maret";
            break;
        case "04":
            bulan = "April";
            break;
        case "05":
            bulan = "Mei";
            break;
        case "06":
            bulan = "Juni";
            break;
        case "07":
            bulan = "Juli";
            break;
        case "08":
            bulan = "Agustus";
            break;
        case "09":
            bulan = "September";
            break;
        case "10":
            bulan = "Oktober"; 
            break;
        case "11":
            bulan = "November";
            break;
        case "12":
            bulan = "Desember";
            break;
        default:
            bulan = "Bulan"
            break;
    }

    console.log (bulan);

    console.log (timeSplit.sort (function(a,b){return (b-a)}));
    
    
    timeSplit = tanggal.split ("/");
    var timeJoin = timeSplit.join ("-");
    console.log (timeJoin);

    var name = input[1];
    var nameSlice = name.slice(0,14);
    console.log(nameSlice);

}

dataHandling2 (input)


