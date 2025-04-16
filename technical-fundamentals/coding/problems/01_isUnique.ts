// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
  // 1. Implement an algorithm to determine if a string has all unique characters.
  // let dictionary : string[] = []

  // for (const c of str) {
  //   if (dictionary.includes(c)) {
  //     return false
  //   }
  //   dictionary.push(c)
  // }
  // return true

  // 2. What if you cannot use additional data structures?
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = (i + 1); j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}
