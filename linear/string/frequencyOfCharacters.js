function charFrequency(str) {
    let freqMap = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freqMap[char]) {
            freqMap[char]++;
        } else {
            freqMap[char] = 1;
        }
    }
    
    for (let char in freqMap) {
        console.log(`'${char}': ${freqMap[char]}`);
    }
}

const str = "hello world";
console.log("Frequency of each character:");
charFrequency(str);
