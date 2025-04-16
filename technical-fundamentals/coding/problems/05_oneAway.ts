// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false
  }

  let diffCount = 0
  for (let i = 0, j = 0; i < str1.length; i++, j++) {
    // if strings are different at current index
    if (str1[i] !== str2[j]) {
      diffCount++

      if (str1[i] === str2[j+1]) { // removal in str1
        j++
      } else if(str1[i+1] === str2[j]) { // addition in str1
        i++
      } else {
        // replacement - do nothing
      }
    }
  }

  return diffCount <= 1
}
