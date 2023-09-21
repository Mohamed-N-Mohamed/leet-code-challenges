const longestCommonPrefix = function (strs) {
  //14. Longest Common Prefix
  let start = strs[0];

  if (strs.length === 0) {
    return "";
  }

  for (let i = 1; i < strs.length; i++) {
    // console.log(strs[i].indexOf('w'))
    while (strs[i].indexOf(start) !== 0) {
      start = start.substring(0, start.length - 1);
    }
  }

  console.log(start);
};

longestCommonPrefix(["flower", "flow", "flight"]);
