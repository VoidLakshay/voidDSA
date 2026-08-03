function toggleCharacters(str) {
    let toggled = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        // Uppercase letters are 65-90, lowercase are 97-122
        if (charCode >= 65 && charCode <= 90) {
            toggled += String.fromCharCode(charCode + 32);
        } else if (charCode >= 97 && charCode <= 122) {
            toggled += String.fromCharCode(charCode - 32);
        } else {
            toggled += str[i]; // Non-alphabetic characters remain the same
        }
    }
    return toggled;
}

const str = "HeLlO WoRlD!";
console.log("Original string:", str);
console.log("Toggled string:", toggleCharacters(str));
