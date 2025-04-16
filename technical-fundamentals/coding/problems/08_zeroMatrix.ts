// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
  const rows = matrix.length
  const cols = matrix[0].length

  let rowsWithZero = []
  let colsWithZero = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowsWithZero.push(i)
        colsWithZero.push(j)
      }
    }
  }

  for (const i of rowsWithZero) {
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0
    }
  }

  for (const j of colsWithZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][j] = 0
    }
  }

  return matrix
}
