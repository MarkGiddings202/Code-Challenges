var romanToInt = function (s) {
  // Create object to hold roman numerals
  let romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // create a counter to store our value
  let results = 0;

  for (let i = 0; i < s.length; i += 1) {
    // determin if the roman numeral infront is less than the number in front of it.
    if (romanNum[s[i]] < romanNum[s[i + 1]]) {
        // if so then we subtract from our count
      results -= romanNum[s[i]];
    } else {
        // if not then we add to out count
      results += romanNum[s[i]];
    }
  }
  // return our results counter
  return results;
};

console.log(romanToInt("III"));
/*
Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:
*/
