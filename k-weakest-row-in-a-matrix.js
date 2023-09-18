const kWeakestRows = (mat, k) => {
  //1337. The K Weakest Rows in a Matrix

  let obj = {};
  for (let i = 0; i < mat.length; i++) {
    obj[i] = mat[i].filter((ele) => ele === 1).length;
  }

  const answer = Object.keys(obj)
    .sort((a, b) => obj[a] - obj[b])
    .slice(0, k);

  console.log(answer);
};

const matrix = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];

kWeakestRows(matrix, 3);
