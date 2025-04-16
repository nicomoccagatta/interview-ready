// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// const expected = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
// i = 0
// i = 0, j = 0 => i = 0, j = lengthIDX
// i = 0, j = 1 => i = 1, j = lengthIDX
// i = 0, j = 2 => i = 2, j = lengthIDX

// i = 1
// i = 1, j = 0 => i = 0, j = lengthIDX - i
// i = 1, j = 1 => i = 1, j = lengthIDX - i
// i = 1, j = 2 => i = 2, j = lengthIDX - i

// ...
export default function rotateMatrix (matrix: Matrix) {
  const N = matrix.length
  const Nidx = N - 1
  let result: number[][] = Array(N).fill("").map(() => Array(N).fill(0))

  // Fill the results matrix
  for (let i = 0; i < N; i++ ) {
    for (let j = 0; j < N; j++ ) {
      result[j][Nidx - i] = matrix[i][j]
    }
  }

  // Modify matrix in place?
  // @TODO: Search for the ideal solution for this
  for (let i = 0; i < N; i++ ) {
    for (let j = 0; j < N; j++ ) {
      matrix[i][j] = result[i][j]
    }
  }
}
