function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const str1 = "racecar";
const str2 = "hello";
console.log(`Is "${str1}" a palindrome?`, isPalindrome(str1));
console.log(`Is "${str2}" a palindrome?`, isPalindrome(str2));
