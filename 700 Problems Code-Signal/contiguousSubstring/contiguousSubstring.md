You are given a string source consisting of lowercase English letters. Your task is to find the longest contiguous substring consisting of the same character. If there are several substrings of the same length that meet this condition, find the rightmost one. Return a string consisting of this character concatenated with its number of occurrences in the longest contiguous substring (i.e., the length of the substring).

Example

For source = "bbacccdbbab", the output should be solution(source) = "c3".

Explanation:

There are two contiguous substrings consisting of the character "a", both have a length of 1.
There are three contiguous substrings consisting of the character "b", two have a length of 2 and one has a length of 1.
There is just one contiguous substring consisting of the character "c", which has a length of 3. So, this is the longest contiguous substring and hence the answer is "c3".
For source = "bbaacaa", the output should be solution(source) = "a2".

Explanation:
There are three different contiguous substrings with a length of 2, so the answer should be the rightmost one — "a2".