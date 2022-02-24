const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String(num), s[i]);
      }
      i = j;
    }
  }
  
  return result.join('');
};

const mostFrequentChar = (s) => {
    const count = {};

    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }
        count[char] += 1
    }

    let best = null;
    for (let char of s) {
        if (best === null || count[char] > count[best]) {
            best = char;
        }
    }
    return best;
};

const pairSum = (numbers, targetSum) => {
    const previousNums = {};
    for (let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        const complement = targetSum - num;
        if (complement in previousNums) return [i, previousNums[complement]];

        previousNums[num] = i;
    }
};


const anagrams = (s1, s2) => {
    // todo
    let hash1 = {}
    for (let i = 0; i < s1.length; i += 1) {
        hash1[s1[i]] += 1
    }

    let hash2 = {}
    for (let i = 0; i < s1.length; i += 1) {
        hash2[s2[i]] += 1
    }

    return hash1 === hash2
};
 

const pairProduct = (numbers, targetProduct) => {
    const previousNums = {};
    for (let i = 0; i < numbers.length; i += 1) {
        const num = numbers[i];
        const complement = targetProduct / num;

        if (complement in previousNums) return [previousNums[complement], i];

        previousNums[num] = i;
    }
};
 