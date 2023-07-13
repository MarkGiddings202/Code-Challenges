var reverseWords = function(s) {
    return s.split(" ").filter(char=> char !== '').reverse().join(' ')
};

console.log(reverseWords("the sky is blue "))