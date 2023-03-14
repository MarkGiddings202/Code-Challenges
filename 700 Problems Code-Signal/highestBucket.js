// commands
const input1 = ["goto bucketA", 
 "create fileA", 
 "create fileB", 
 "create fileA", 
 "goto bucketB", 
 "goto bucketC", 
 "create fileA", 
 "create fileB", 
 "create fileC"]
//  output "bucketC"

const input2 = ["goto bar", 
"create foo", 
"goto foo", 
"create bar", 
"create bar", 
"goto bar", 
"create bar"]
// output bar
let Input3 = ["goto foo", 
 "create bar"]
// Expected Output: "foo"

/*
P: Execute a set of commands, then determine which bucket has the most items. then return the name of that bucket.
There will always be one bucket and always be at least one file.
There will never be a tie for the largest bucket.

E:
highestBucket = bucketC
    {
        bucketA : [fileA, fileB]
        bucketB : []
        bucketC : [fileA,fileB,fileC]*
    }
    return highestBucket
D:
A:
initizalizing varaibles 
buckets variable,
highestBucket variable 
pointer variable.

iterate through the commands
for each command seperate the name/command and the path/argument.
if the command is "Goto" 
goto the bucket that is stated by the argument/it's pointing to.
    check in the bucket obj if the arguement exist
    if it doesn't create 
    create a key named arguement the value of an empty array
    if it does do nothing.
    after this, set the pointer to the current argument.
    _________________________
if the command is "Create"
    check to see if the current bucket contains the argument. 
        if it does continue looping.
        if it doesn't then add the argument to the current bucket.
        if the highest bucket hasn't been set or is equal to an empty string, 
            then set the pointer to be the highest bucket.
        check to see if the current bucket is larger than the highest bucket.
        if it is then set the pointer to be the highest bucket.
        
    return highetbucket
C:
*/

function solution(commands) {
    const buckets = {}
    // initalize a variable named highestBucket with the value of a ""
    // initalize a pointer/ pointer being the name of the bucket.
    let highestBucket = ""
    let pointer = ""
    for(let command of commands){
        let currentCommand = command.split(' ')
        cmd = currentCommand[0];
        arg = currentCommand[1];
        // console.log(cmd , arg)
        
        if(cmd == "goto"){
            // if the bucket doesnt exist create a bucket
            // if it doesn't exist then dont create a bucket
            // set a pointer to the current bucket
            if(!buckets[arg]){
                buckets[arg] = []
            } 
            pointer = arg 
        }
        /*
        if() cmd === create {
         check the array based off of where the pointer is pointing too.
         if it does, do nothing? continue
         if it doesn't then add the name of file to the array
         as an element 
        }
        */ 
        if(cmd === "create"){
            let currentBucket = buckets[pointer] // array
            console.log("currentBucket", pointer) // this is the key/bucket
            if(currentBucket.includes(arg)){
                continue    
            } else {
                // dot notiation doesn't work on this. Reason?...
                buckets[pointer].push(arg)
                //is the current bucket size bigger than the highest bucket if it is then change the highest bucket to the next iteration
                if(highestBucket === '') {
                    highestBucket = pointer
                }
                if(buckets[pointer].length > buckets[highestBucket].length ){
                    highestBucket = pointer
                }
                
            }
        }
    }
    return highestBucket 
}
