function printReverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}

const str = "hello";
console.log("String in reverse order:");
printReverse(str);
