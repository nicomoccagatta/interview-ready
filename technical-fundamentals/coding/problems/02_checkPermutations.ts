// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

type itemType = {[key: string]: number}

export default function checkPermutations(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false
  } 

  let chars: itemType = {}
  for (let c of s1) {
    if (!chars[c]) {
      chars[c] = 1
    } else {
      chars[c]++
    }
  }

  for (let c of s2) {
    if (!chars[c]) {
      return false
    } else {
      chars[c]--
    }
  }

  return !Object.keys(chars).find(c => chars[c] !== 0)?.length
}
