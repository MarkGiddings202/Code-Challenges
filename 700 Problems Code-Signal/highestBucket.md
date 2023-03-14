Suppose you are logged in to some virtual environment, where just two types of commands can be executed:

goto <bucket_name> - move to the specified bucket bucket_name.
You can assume the specified bucket always exists.
create <filename> - create a new file named filename in the current bucket.
If the file with the same name already exists in the current bucket, the command does nothing.
Your task is to process all provided commands and return the bucket name that contains the largest number of files at the end. It is guaranteed that there is no tie for the largest bucket name.

Notes:

It is guaranteed that the first command is goto
It is guaranteed that there is at least one create command
Example

For

commands = [
  "goto bucketA",
  "create fileA",
  "create fileB",
  "create fileA",
  "goto bucketB",
  "goto bucketC",
  "create fileA",
  "create fileB",
  "create fileC"
]
the output should be solution(commands) = "bucketC".

Explanation:

Command 0: goto bucketA changes the current bucket to bucketA
Commands 1, 2: The next two commands create fileA and fileB files, so bucketA contains 2 files
Command 3: Creating fileA in bucketA fails, as this file already exists there, so nothing happens
Command 4: goto bucketB switches the current bucket to bucketB
Command 5: goto bucketC switches the current bucket to bucketC
Commands 6, 7, 8: The last three commands create fileA, fileB, and fileC in the bucketC
After all commands processed, here is the state of the filesystem:

bucketA contains files fileA and fileB
bucketB is empty
bucketC contains files fileA, fileB, and fileC
As you can see, the bucket with largest number of files is bucketC.

For

commands = [
  "goto bar",
  "create foo",
  "goto foo",
  "create bar",
  "create bar",
  "goto bar",
  "create bar"
]
the output should be solution(commands) = "bar".

Explanation:
After all commands processed, here is the state of the filesystem:

Bucket foo contains a single file bar
Bucket bar contains files foo and bar
Thus, the bucket with the largest number of files is bar