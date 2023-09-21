var isValid = function (s) {
  //20. Valid Parentheses

  const pairs = [];

  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const chars of s) {
    if (brackets[chars]) {
      const top = pairs.pop();
      console.log(top);

      if (top !== brackets[chars]) {
        return false;
      }
    } else {
      pairs.push(chars);
    }
  }

  const answer = pairs.length === 0;

  console.log(answer);
};

isValid("(");
