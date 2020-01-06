function isPalindrome(nr) {
    let rev = 0;                    // the reversed number
    let x = nr;                     // store the default value (it will be changed)
    while (x > 0) {
        rev = 10 * rev + x % 10;
        x /= 10;
        break;
    }
    if( nr == rev) {
       return true;// returns true if the number is palindrome
    }               
    else{
        return false
    }
}

function main(){
    let max=-1;
    for ( let i = 999 ; i >= 100 ; i--) {
        for (let j = 999 ; j >= 100 ; j-- ) {
            let p = i * j;
            if ( max < p && isPalindrome(p)) {
                max = p;
                console.log(i,j)
            }
        }
    }
    
}


main();