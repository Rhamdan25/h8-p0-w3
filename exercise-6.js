function numPalindrome(num) {
    var chkPalindrome = false
    while (chkPalindrome === false) {
        num++
        numString = String(num)
        numRev = ''
        for (var i = numString.length - 1; i >=0; i--) {
            numRev += numString[i]
        }
        numCheck = Number(numRev)
        if (numCheck == num) {
            return num;
            chkPalindrome = true;
        }
    }
}


// TEST CASES
console.log(numPalindrome(8)); // 9
console.log(numPalindrome(10)); // 11
console.log(numPalindrome(117)); // 121
console.log(numPalindrome(175)); // 181
console.log(numPalindrome(1000)); // 1001

