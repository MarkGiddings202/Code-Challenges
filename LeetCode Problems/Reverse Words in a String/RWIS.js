var reverseWords = function(s) {
    let newStr = s.split(" ").reverse('').join(' ').trim()
    

    console.log(newStr)
};

console.log(reverseWords("the sky is blue "))