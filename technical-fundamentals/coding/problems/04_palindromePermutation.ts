// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
  let dictionary: { [key: string]: number } = {}
  const letters = str.toLocaleLowerCase().replaceAll(' ', '')

  for (let c of letters) {
    if (!dictionary[c]) {
      dictionary[c] = 1
    } else {
      dictionary[c]++
    }
  }

  const oddLetters =
    Object.keys(dictionary).filter(key => dictionary[key] % 2 !== 0)

  return oddLetters.length <= 1 // Can be max 1 odd letter
}
