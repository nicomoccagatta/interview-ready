// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression (str: string) : string {
  if (!str) {
    return str
  }

  let probableOutput = ""
  let currentChar = str[0]
  let counter = 0

  for (const char of str) {
    if (char === currentChar) {
      counter++
    } else {
      probableOutput += currentChar + counter
      currentChar = char
      counter = 1
    }
  }
  probableOutput += currentChar + counter

  return probableOutput.length < str.length ? probableOutput : str
}
