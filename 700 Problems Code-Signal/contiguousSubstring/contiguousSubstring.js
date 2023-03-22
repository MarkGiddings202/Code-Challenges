function solution(source) {
    // create two pointers
    let left = 0;
    let right = 0;
    let obj = {}
    // object to update the values of max and char
    let max = 0
    let char = ''
    // run this loop so long as right is less than the string's length
    console.log(source[right])
    while(right < source.length){
        if(source[right] != source[left]){
            obj= {}
            left = right
        }
        else{
            
            if(obj[source[right]]) obj[source[right]]++
            
            else obj[source[right]] = 1
            
            if(obj[source[right]] >= max){
                
                max = obj[source[right]]
                
                char = source[right]
            }
            right++
        }
    }
    return char + max
}


/*
Input:
source: "bbacccdbbab"
Output:
"c3"
Expected Output:
"c3"
Console Output:
b
Error Output:
Empty


Input:
source: "ccooodddeeesiiiignalll"
Output:
"i4"
Expected Output:
"i4"
Console Output:
c

Input:
source: "iiiiiuuuuuuuuuuuuuuu"
Output:
"u15"
Expected Output:
"u15"
Console Output:
i
*/

/*

function solution(source) {
if(source.length === 1) return source+1;
    let count = 1;
    let maxCount = 1;
    let curString = '';
    for(let i = 0; i < source.length; i++) {
        if(source[i] === source[i+1]) {
            count++; 
        }
        if(source[i] !== source[i+1]){
            if(maxCount <= count) {
                maxCount = count;
                curString = source[i];
            }
            count = 1;
            console.log(curString);
        }
    }
    return curString + maxCount;
}


*/