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
 

const intersection = (a, b) => {
    const result = [];
    for (let item of b) {
        if (a.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[j] === 5) {
            j -= 1;
        } else if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i += 1;
        } else {
            i += 1;
        }
    }

    return nums;
};

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
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

const fiveSort = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[j] === 5) {
            j -= 1;
        } else if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i += 1;
        } else {
            i += 1;
        }
    }

    return nums;
};

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
};

const linkedListFind = (head, target) => {
    let current = head;
    while (current !== null) {
        if (current.val === target) return true;
        current = current.next;
    }
    return false;
};

const reverseList = (head) => {
    let current = head;
    let prev = null;
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

const zipperLists = (head1, head2) => {
    const head = head1;
    let tail = head;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;

    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return head;
};

const mergeLists = (head1, head2) => {
    let dummyHead = new Node(null);
    let tail = dummyHead;
    let current1 = head1;
    let current2 = head2;

    while (current1 !== null && current2 !== null) {
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return dummyHead.next;
};