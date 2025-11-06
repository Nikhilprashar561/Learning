// JavaScript Coding Interview — 100 Problems with Solutions and Explanations
// Each problem: comment title, solution, and inline comments explaining why lines are used

// 2. Check if a string is a palindrome
// Why: Normalize and use two-pointer technique for O(n) time and O(1) extra space.
function isPalindrome(s) {
  const normalized = s.replace(/[^a-z0-9]/gi, "").toLowerCase(); // remove non-alphanum and lowercase
  let i = 0,
    j = normalized.length - 1;
  while (i < j) {
    if (normalized[i] !== normalized[j]) return false;
    i++;
    j--;
  }
  return true;
}

// 3. Two Sum (return indices)
// Why: Hash map provides O(n) time by storing complements.
function twoSum(nums, target) {
  const map = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i]; // found pair
    map.set(nums[i], i); // store index for future complements
  }
  return null;
}

// 4. Remove duplicates from array (keep order)
// Why: Set tracks seen values and preserves first-seen order in result.
function removeDuplicates(arr) {
  const seen = new Set();
  const res = [];
  for (const x of arr) {
    if (!seen.has(x)) {
      seen.add(x);
      res.push(x);
    }
  }
  return res;
}

// 5. Max subarray sum (Kadane)
// Why: Kadane's algorithm keeps current max ending at position and global max.
function maxSubArray(nums) {
  let maxSoFar = nums[0],
    current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]); // extend or start new at nums[i]
    maxSoFar = Math.max(maxSoFar, current);
  }
  return maxSoFar;
}

// 6. Merge two sorted arrays
// Why: Two-pointer merge is O(n+m) and stable.
function mergeSorted(a, b) {
  const res = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }
  while (i < a.length) res.push(a[i++]);
  while (j < b.length) res.push(b[j++]);
  return res;
}

// 7. Flatten nested array (one level)
// Why: reduce+concat is concise for one-level flattening.
function flattenOne(arr) {
  return arr.reduce((acc, v) => acc.concat(v), []);
}

// 8. Anagrams check
// Why: Character count avoids sorting O(n log n) and is O(n).
function areAnagrams(a, b) {
  if (a.length !== b.length) return false;
  const count = new Map();
  for (let ch of a) count.set(ch, (count.get(ch) || 0) + 1);
  for (let ch of b) {
    if (!count.has(ch)) return false;
    count.set(ch, count.get(ch) - 1);
    if (count.get(ch) === 0) count.delete(ch);
  }
  return count.size === 0;
}

// 9. Fibonacci iterative
// Why: Iterative uses O(1) space and O(n) time versus exponential recursion.
function fib(n) {
  if (n < 2) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

// 10. Balanced parentheses
// Why: Stack matches opening and closing in linear time.
function isBalanced(s) {
  const stack = [];
  const pairs = { ")": "(", "]": "[", "}": "{" };
  for (const ch of s) {
    if ("([{".includes(ch)) stack.push(ch);
    else if (")]}".includes(ch)) {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}

// 11. Implement map
// Why: Demonstrates higher-order functions and expected behavior.
function myMap(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) res.push(fn(arr[i], i, arr));
  return res;
}

// 12. Count occurrences in array
// Why: Map frequency table is flexible and efficient.
function countOccurrences(arr) {
  const freq = new Map();
  for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);
  return freq;
}

// 13. Palindrome number
// Why: Numeric reversal avoids string conversion edge cases.
function isPalindromeNumber(x) {
  if (x < 0) return false;
  let rev = 0,
    orig = x;
  while (x > 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return rev === orig;
}

// 14. Remove falsy values
// Why: Boolean in filter filters falsy values concisely.
function compact(arr) {
  return arr.filter(Boolean);
}

// 15. Sum of digits
// Why: Use modulo/divide to extract digits without strings.
function sumDigits(n) {
  let sum = 0;
  n = Math.abs(n);
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

// 16. Unique characters in string
// Why: Set deduplicates while preserving first-seen order when converting back.
function uniqueChars(s) {
  return Array.from(new Set(s.split(""))).join("");
}

// 17. Rotate array by k
// Why: Three-reverse technique rotates in-place O(n) time O(1) space.
function rotate(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  function reverse(a, i, j) {
    while (i < j) [a[i++], a[j--]] = [a[j], a[i]];
  }
}

// 18. Intersection of two arrays
// Why: Sets provide fast membership checks and uniqueness.
function intersection(a, b) {
  const setA = new Set(a);
  return Array.from(new Set(b.filter((x) => setA.has(x))));
}

// 19. Longest substring without repeating characters
// Why: Sliding window with map tracks last index seen for O(n) time.
function lengthOfLongestSubstring(s) {
  const map = new Map();
  let left = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= left) left = map.get(s[i]) + 1;
    map.set(s[i], i);
    max = Math.max(max, i - left + 1);
  }
  return max;
}

// 20. Group anagrams
// Why: Sorting characters creates identical keys for anagram groups.
function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return Array.from(map.values());
}

// 21. Product of array except self
// Why: Prefix and suffix products avoid division and achieve O(n).
function productExceptSelf(nums) {
  const n = nums.length;
  const res = Array(n).fill(1);
  let left = 1;
  for (let i = 0; i < n; i++) {
    res[i] *= left;
    left *= nums[i];
  }
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
}

// 22. Validate BST
// Why: Propagate min/max ranges to ensure BST property across subtrees.
function isValidBST(root) {
  function dfs(node, min = -Infinity, max = Infinity) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }
  return dfs(root);
}

// 23. Binary search iterative
// Why: Logarithmic search on sorted data.
function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (arr[m] === target) return m;
    if (arr[m] < target) l = m + 1;
    else r = m - 1;
  }
  return -1;
}

// 24. Find missing number 1..n
// Why: Sum formula or XOR avoids extra space.
function missingNumber(nums) {
  const n = nums.length;
  let total = (n * (n + 1)) / 2;
  for (const v of nums) total -= v;
  return total;
}

// 25. Valid palindrome with one deletion
// Why: Two-pointer with helper to allow skipping one character.
function validPalindrome(s) {
  function check(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  }
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return check(i + 1, j) || check(i, j - 1);
    i++;
    j--;
  }
  return true;
}

// 26. Kth largest (quickselect)
// Why: Quickselect gives average O(n) without full sort.
function findKthLargest(nums, k) {
  function partition(left, right) {
    const pivot = nums[right];
    let i = left;
    for (let j = left; j < right; j++)
      if (nums[j] < pivot) [nums[i++], nums[j]] = [nums[j], nums[i]];
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }
  function select(left, right, kSmallest) {
    if (left === right) return nums[left];
    const pIndex = partition(left, right);
    if (kSmallest === pIndex) return nums[pIndex];
    return kSmallest < pIndex
      ? select(left, pIndex - 1, kSmallest)
      : select(pIndex + 1, right, kSmallest);
  }
  return select(0, nums.length - 1, nums.length - k);
}

// 27. Merge intervals
// Why: Sort by start then merge overlapping intervals.
function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (const [s, e] of intervals.slice(1)) {
    const last = res[res.length - 1];
    if (s <= last[1]) last[1] = Math.max(last[1], e);
    else res.push([s, e]);
  }
  return res;
}

// 28. Minimum window substring
// Why: Variable-size sliding window with frequency map tracks needed chars.
function minWindow(s, t) {
  const need = new Map();
  for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);
  let missing = t.length,
    left = 0,
    start = 0,
    minLen = Infinity;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if ((need.get(c) || 0) > 0) missing--;
    need.set(c, (need.get(c) || 0) - 1);
    while (missing === 0) {
      if (right - left + 1 < minLen) {
        start = left;
        minLen = right - left + 1;
      }
      const cl = s[left++];
      need.set(cl, (need.get(cl) || 0) + 1);
      if (need.get(cl) > 0) missing++;
    }
  }
  return minLen === Infinity ? "" : s.slice(start, start + minLen);
}

// 29. Serialize/deserialize binary tree (preorder)
// Why: Use markers for null to reconstruct exact structure.
function serialize(root) {
  const res = [];
  function dfs(node) {
    if (!node) {
      res.push("#");
      return;
    }
    res.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return res.join(",");
}
function deserialize(data) {
  const vals = data.split(",");
  function dfs() {
    const v = vals.shift();
    if (v === "#") return null;
    const node = { val: Number(v), left: null, right: null };
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  return dfs();
}

// 30. Lowest Common Ancestor in BST
// Why: Use BST properties to search for split point efficiently.
function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) root = root.left;
    else if (p.val > root.val && q.val > root.val) root = root.right;
    else return root;
  }
  return null;
}

// 31. Detect cycle in linked list (Floyd)
// Why: Fast and slow pointers detect cycles in O(n) time O(1) space.
function hasCycle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// 32. Reverse linked list
// Why: Iterative pointer reversal in-place O(n) time O(1) space.
function reverseList(head) {
  let prev = null,
    curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// 33. Count islands in 2D grid
// Why: DFS flood-fill marks visited to avoid repeated traversals.
function numIslands(grid) {
  if (!grid.length) return 0;
  const rows = grid.length,
    cols = grid[0].length;
  let count = 0;
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] !== "1") return;
    grid[i][j] = "0";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++)
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
  return count;
}

// 34. Word Ladder (BFS shortest path)
// Why: BFS finds shortest transformation sequence level by level.
function ladderLength(beginWord, endWord, wordList) {
  const dict = new Set(wordList);
  if (!dict.has(endWord)) return 0;
  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, steps] = queue.shift();
    if (word === endWord) return steps;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        const newW =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (dict.has(newW)) {
          dict.delete(newW);
          queue.push([newW, steps + 1]);
        }
      }
    }
  }
  return 0;
}

// 35. Trapping Rain Water
// Why: Two-pointer maintains borders and computes trapped water O(n).
function trap(height) {
  let left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0,
    res = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
      right--;
    }
  }
  return res;
}

// 36. LRU Cache design (Map)
// Why: Map preserves insertion order and allows O(1) get/put via delete+set trick.
class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value);
  }
}

// 37. Word Break (DP)
// Why: DP records reachable prefixes to avoid exponential recursion.
function wordBreak(s, wordDict) {
  const n = s.length;
  const dp = Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (const w of wordDict) {
      const len = w.length;
      if (i >= len && dp[i - len] && s.slice(i - len, i) === w) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
}

// 38. Object to query string
// Why: encodeURIComponent avoids breaking URL with special chars.
function toQuery(obj) {
  const parts = [];
  for (const k in obj) {
    if (obj[k] === undefined) continue;
    parts.push(
      encodeURIComponent(k) + "=" + encodeURIComponent(String(obj[k]))
    );
  }
  return parts.join("&");
}

// 39. Median of two sorted arrays (binary partition)
// Why: Binary search on smaller array partitions gives O(log min(m,n)).
function findMedianSortedArrays(a, b) {
  if (a.length > b.length) [a, b] = [b, a];
  const m = a.length,
    n = b.length;
  let imin = 0,
    imax = m,
    half = (m + n + 1) >> 1;
  while (imin <= imax) {
    const i = Math.floor((imin + imax) / 2);
    const j = half - i;
    if (i < m && b[j - 1] > a[i]) imin = i + 1;
    else if (i > 0 && a[i - 1] > b[j]) imax = i - 1;
    else {
      const maxLeft =
        i === 0 ? b[j - 1] : j === 0 ? a[i - 1] : Math.max(a[i - 1], b[j - 1]);
      if ((m + n) % 2 === 1) return maxLeft;
      const minRight = i === m ? b[j] : j === n ? a[i] : Math.min(a[i], b[j]);
      return (maxLeft + minRight) / 2;
    }
  }
  return 0;
}

// 40. Wildcard regex match ('.' and '*') using DP + memo
// Why: Recursive DP with memo avoids exponential blowup of naive recursion.
function isMatch(s, p) {
  const memo = new Map();
  function dp(i, j) {
    const key = i + "," + j;
    if (memo.has(key)) return memo.get(key);
    if (j === p.length) return i === s.length;
    const first = i < s.length && (p[j] === s[i] || p[j] === ".");
    let ans;
    if (j + 1 < p.length && p[j + 1] === "*")
      ans = dp(i, j + 2) || (first && dp(i + 1, j));
    else ans = first && dp(i + 1, j + 1);
    memo.set(key, ans);
    return ans;
  }
  return dp(0, 0);
}

// 41. Coin change ways (DP)
// Why: DP counts combinations by iterating coins first to avoid duplicate permutations.
function coinChangeWays(coins, amount) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const c of coins) for (let i = c; i <= amount; i++) dp[i] += dp[i - c];
  return dp[amount];
}

// 42. Sliding window maximum (deque)
// Why: Monotonic deque provides O(n) time window maximums.
function maxSlidingWindow(nums, k) {
  const res = [],
    dq = []; // store indices
  for (let i = 0; i < nums.length; i++) {
    while (dq.length && dq[0] <= i - k) dq.shift();
    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();
    dq.push(i);
    if (i >= k - 1) res.push(nums[dq[0]]);
  }
  return res;
}

// 43. Trie for autocomplete (insert + prefix search)
// Why: Trie enables efficient prefix operations at cost of memory.
class TrieNode {
  constructor() {
    this.next = {};
    this.end = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.next[ch]) node.next[ch] = new TrieNode();
      node = node.next[ch];
    }
    node.end = true;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.next[ch]) return [];
      node = node.next[ch];
    }
    const res = [];
    function dfs(n, path) {
      if (n.end) res.push(path);
      for (const c in n.next) dfs(n.next[c], path + c);
    }
    dfs(node, prefix);
    return res;
  }
}

// 44. Skyline problem (sweep line explanation)
// Why: Sweep line + heap handles active buildings to produce skyline key points.
// Implementation is long; algorithms use events sorted by x and a max-heap to track active heights.

// 45. Implement Promise.all
// Why: Combine promises into one that resolves when all resolve, preserving order.
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const res = [];
    let completed = 0;
    if (promises.length === 0) return resolve([]);
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          res[i] = val;
          completed++;
          if (completed === promises.length) resolve(res);
        })
        .catch(reject);
    });
  });
}

// 46. Clone graph (DFS)
// Why: Use a map to avoid cycles and duplicate clones.
function cloneGraph(node) {
  if (!node) return null;
  const map = new Map();
  function dfs(n) {
    if (map.has(n)) return map.get(n);
    const copy = { val: n.val, neighbors: [] };
    map.set(n, copy);
    for (const nb of n.neighbors) copy.neighbors.push(dfs(nb));
    return copy;
  }
  return dfs(node);
}

// 47. Count subarrays sum = k (prefix sum + map)
// Why: Prefix sums + hashmap count in O(n) time all subarrays equal to k.
function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0,
    count = 0;
  for (const n of nums) {
    sum += n;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// 48. Evaluate Reverse Polish Notation
// Why: Stack evaluation matches postfix semantics.
function evalRPN(tokens) {
  const stack = [];
  for (const t of tokens) {
    if (["+", "-", "*", "/"].includes(t)) {
      const b = Number(stack.pop()),
        a = Number(stack.pop());
      let r;
      if (t === "+") r = a + b;
      else if (t === "-") r = a - b;
      else if (t === "*") r = a * b;
      else r = Math.trunc(a / b);
      stack.push(r);
    } else stack.push(Number(t));
  }
  return stack.pop();
}

// 49. KMP string search (build LPS)
// Why: KMP avoids re-checking characters enabling O(n+m) search.
function buildLPS(p) {
  const lps = Array(p.length).fill(0);
  let len = 0,
    i = 1;
  while (i < p.length) {
    if (p[i] === p[len]) lps[i++] = ++len;
    else if (len) len = lps[len - 1];
    else lps[i++] = 0;
  }
  return lps;
}

// 50. Edmonds-Karp (max flow) explanation
// Why: Breadth-first augmenting paths on residual graph to compute max flow; implementation is long.
// Use BFS to find augmenting path, update residual capacities, repeat until no path.

// 51. Longest Increasing Subsequence (n log n method)
// Why: Patience sorting method with binary search achieves O(n log n).
function lengthOfLIS(nums) {
  const tails = [];
  for (const x of nums) {
    let i = 0,
      j = tails.length;
    while (i < j) {
      const m = Math.floor((i + j) / 2);
      if (tails[m] < x) i = m + 1;
      else j = m;
    }
    tails[i] = x;
  }
  return tails.length;
}

// 52. LRU Cache (doubly linked list + map)
// Why: For true O(1) operations, use map + doubly-linked-list to track MRU/LRU.
class LRUNode {
  constructor(k, v) {
    this.k = k;
    this.v = v;
    this.prev = null;
    this.next = null;
  }
}
class LRU {
  constructor(cap) {
    this.cap = cap;
    this.map = new Map();
    this.head = new LRUNode(null, null);
    this.tail = new LRUNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  _add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._add(node);
    return node.v;
  }
  put(key, val) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    const node = new LRUNode(key, val);
    this._add(node);
    this.map.set(key, node);
    if (this.map.size > this.cap) {
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.k);
    }
  }
}

// 53. Implement Promise.allSettled
// Why: Wait until all promises settle and report statuses.
function promiseAllSettled(promises) {
  return Promise.all(
    promises.map((p) =>
      Promise.resolve(p).then(
        (v) => ({ status: "fulfilled", value: v }),
        (e) => ({ status: "rejected", reason: e })
      )
    )
  );
}

// 54. Detect cycle in directed graph (DFS)
// Why: Use DFS with recursion stack to detect back-edges indicating cycles.
function hasCycleDirected(n, edges) {
  const g = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) g[u].push(v);
  const visited = Array(n).fill(0); // 0 unvisited, 1 visiting, 2 visited
  function dfs(u) {
    if (visited[u] === 1) return true;
    if (visited[u] === 2) return false;
    visited[u] = 1;
    for (const v of g[u]) if (dfs(v)) return true;
    visited[u] = 2;
    return false;
  }
  for (let i = 0; i < n; i++) if (dfs(i)) return true;
  return false;
}

// 55. Deep clone (handles arrays/objects)
// Why: Recursion with type checks copies nested structures; doesn't handle special objects like Date/Map by default.
function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (seen.has(obj)) return seen.get(obj);
  if (Array.isArray(obj)) {
    const res = [];
    seen.set(obj, res);
    for (const v of obj) res.push(deepClone(v, seen));
    return res;
  }
  const copy = {};
  seen.set(obj, copy);
  for (const k in obj)
    if (Object.prototype.hasOwnProperty.call(obj, k))
      copy[k] = deepClone(obj[k], seen);
  return copy;
}

// 56. Top K frequent elements (heap alternative)
// Why: Use bucket sort for integer keys or a heap for arbitrary frequencies; here use bucket approach.
function topKFrequent(nums, k) {
  const map = new Map();
  for (const n of nums) map.set(n, (map.get(n) || 0) + 1);
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);
  for (const [num, freq] of map) buckets[freq].push(num);
  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--)
    res.push(...buckets[i]);
  return res.slice(0, k);
}

// 57. Flatten deeply nested array (recursive)
// Why: Recursively concatenate nested arrays to flatten all levels.
function flattenDeep(arr) {
  return arr.reduce(
    (acc, v) => acc.concat(Array.isArray(v) ? flattenDeep(v) : v),
    []
  );
}

// 58. Memoization utility
// Why: Cache function results to speed up repeated calls.
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
}

// 59. Binary search recursive
// Why: Recursive binary search is clear and demonstrates divide-and-conquer.
function binarySearchRec(arr, target) {
  function bs(l, r) {
    if (l > r) return -1;
    const m = Math.floor((l + r) / 2);
    if (arr[m] === target) return m;
    return arr[m] < target ? bs(m + 1, r) : bs(l, m - 1);
  }
  return bs(0, arr.length - 1);
}

// 60. Debounce function
// Why: Debounce delays invocation until events settle to reduce work.
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 61. Throttle function
// Why: Throttle ensures function runs at most once per interval.
function throttle(fn, interval) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= interval) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// 62. Find first missing positive
// Why: Use index placement trick to achieve O(n) time O(1) space.
function firstMissingPositive(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const tmp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = tmp;
    }
  }
  for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1;
  return n + 1;
}

// 63. Product of array except self (alternate)
// Why: Show alternate implementation with prefix/suffix arrays explicitly.
function productExceptSelfAlt(nums) {
  const n = nums.length;
  const left = [1],
    right = Array(n).fill(1);
  for (let i = 1; i < n; i++) left[i] = left[i - 1] * nums[i - 1];
  for (let i = n - 2; i >= 0; i--) right[i] = right[i + 1] * nums[i + 1];
  return nums.map((_, i) => left[i] * right[i]);
}

// 64. Find duplicate number (Floyd's tortoise and hare)
// Why: Treat index values as pointers to detect duplicate using cycle detection.
function findDuplicate(nums) {
  let tortoise = nums[0],
    hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);
  tortoise = nums[0];
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }
  return hare;
}

// 65. Alien dictionary (topological sort)
// Why: Build graph of precedence and topologically sort to infer order.
function alienOrder(words) {
  const adj = new Map();
  const indeg = new Map();
  for (const w of words)
    for (const ch of w) {
      if (!adj.has(ch)) adj.set(ch, new Set());
      if (!indeg.has(ch)) indeg.set(ch, 0);
    }
  for (let i = 0; i < words.length - 1; i++) {
    const a = words[i],
      b = words[i + 1];
    let found = false;
    for (let j = 0; j < Math.min(a.length, b.length); j++) {
      if (a[j] != b[j]) {
        if (!adj.get(a[j]).has(b[j])) {
          adj.get(a[j]).add(b[j]);
          indeg.set(b[j], indeg.get(b[j]) + 1);
        }
        found = true;
        break;
      }
    }
    if (!found && a.length > b.length) return "";
  }
  const q = [];
  for (const [k, v] of indeg) if (v === 0) q.push(k);
  const res = [];
  while (q.length) {
    const u = q.shift();
    res.push(u);
    for (const v of adj.get(u)) {
      indeg.set(v, indeg.get(v) - 1);
      if (indeg.get(v) === 0) q.push(v);
    }
  }
  return res.length === adj.size ? res.join("") : "";
}

// 66. Minimum window subsequence (DP)
// Why: DP tracks start indices for subsequence matches; alternative two-pointer solutions exist.
function minWindowSubsequence(S, T) {
  const m = S.length,
    n = T.length;
  let ans = "";
  const dp = Array(m).fill(-1);
  for (let i = 0; i < m; i++) {
    if (S[i] === T[0]) dp[i] = i;
    for (let j = 1; j < n; j++) {
      let prev = -1;
      for (let k = 0; k < i; k++) {
        if (dp[k] !== -1 && S[i] === T[j] && dp[k] < i) {
          prev = dp[k];
          break;
        }
      }
    }
  }
  return ans; // full implementation is lengthy
}

// 67. Binary indexed tree (Fenwick) - sum/query/update
// Why: Fenwick tree supports prefix sums and point updates in O(log n).
function Fenwick(n) {
  this.n = n;
  this.bit = Array(n + 1).fill(0);
}
Fenwick.prototype.update = function (i, delta) {
  for (; i <= this.n; i += i & -i) this.bit[i] += delta;
};
Fenwick.prototype.query = function (i) {
  let s = 0;
  for (; i > 0; i -= i & -i) s += this.bit[i];
  return s;
};

// 68. Segment tree (range sum)
// Why: Segment trees handle range queries and updates in O(log n).
function buildSeg(arr) {
  const n = arr.length;
  const seg = Array(4 * n).fill(0);
  function build(idx, l, r) {
    if (l === r) {
      seg[idx] = arr[l];
      return;
    }
    const mid = (l + r) >> 1;
    build(idx * 2, l, mid);
    build(idx * 2 + 1, mid + 1, r);
    seg[idx] = seg[idx * 2] + seg[idx * 2 + 1];
  }
  build(1, 0, n - 1);
  return seg;
}

// 69. Word search (DFS backtracking)
// Why: Backtracking explores board paths marking visited to avoid reuse.
function exist(board, word) {
  const m = board.length,
    n = board[0].length;
  function dfs(i, j, k) {
    if (k === word.length) return true;
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[k])
      return false;
    const tmp = board[i][j];
    board[i][j] = "#";
    const res =
      dfs(i + 1, j, k + 1) ||
      dfs(i - 1, j, k + 1) ||
      dfs(i, j + 1, k + 1) ||
      dfs(i, j - 1, k + 1);
    board[i][j] = tmp;
    return res;
  }
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (dfs(i, j, 0)) return true;
  return false;
}

// 70. Serialize N-ary tree
// Why: Preorder with child counts can represent N-ary trees.
function serializeN(root) {
  const res = [];
  function dfs(n) {
    if (!n) return;
    res.push(n.val);
    res.push(n.children.length);
    for (const c of n.children) dfs(c);
  }
  dfs(root);
  return res.join(",");
}

// 71. Maximal rectangle (histogram trick)
// Why: Convert each row to histogram and compute largest rectangle using stack.
function maximalRectangle(matrix) {
  if (!matrix.length) return 0;
  const m = matrix.length,
    n = matrix[0].length;
  const heights = Array(n).fill(0);
  let maxA = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0;
    maxA = Math.max(maxA, largestRectangleArea(heights));
  }
  return maxA;
  function largestRectangleArea(h) {
    const stack = [];
    h.push(0);
    let area = 0;
    for (let i = 0; i < h.length; i++) {
      while (stack.length && h[i] < h[stack[stack.length - 1]]) {
        const height = h[stack.pop()];
        const left = stack.length ? stack[stack.length - 1] : -1;
        area = Math.max(area, height * (i - left - 1));
      }
      stack.push(i);
    }
    h.pop();
    return area;
  }
}

// 72. Find median in data stream (two heaps)
// Why: Maintain two heaps (max-heap for lower half, min-heap for upper half) to get median in O(log n).
// JavaScript doesn't have built-in heaps; implement using arrays and comparator wrappers or use libraries in practice.

// 73. Design Twitter (post, follow, timeline)
// Why: Use maps of users to sets and priority queue for timeline. Full design is lengthy.
// Core operations: postTweet(userId, tweetId), follow(follower, followee), getNewsFeed(user)

// 74. Regex match optimization (Aho-Corasick idea)
// Why: Aho-Corasick builds automaton for many-patterns search in linear time relative to text length.
// Implementation is sizable; conceptually build trie of patterns + fail links and run over text.

// 75. Palindrome partitioning (backtracking)
// Why: Backtracking with palindrome check enumerates partitions; prune with DP.
function partition(s) {
  const res = [];
  const path = [];
  function isPal(l, r) {
    while (l < r) {
      if (s[l++] !== s[r--]) return false;
    }
    return true;
  }
  function dfs(i) {
    if (i === s.length) {
      res.push(path.slice());
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPal(i, j)) {
        path.push(s.slice(i, j + 1));
        dfs(j + 1);
        path.pop();
      }
    }
  }
  dfs(0);
  return res;
}

// 76. Merge k sorted lists (heap)
// Why: Use min-heap to always pick smallest head among k lists, O(N log k).
// In JS, implement heap or use priority queue utility for production.

// 77. Shortest path (Dijkstra)
// Why: Dijkstra finds shortest paths from single source with non-negative edges using min-heap.
// Implement with adjacency lists and heap. Full code omitted for brevity.

// 78. Topological sort (Kahn's algorithm)
// Why: Kahn processes zero-indegree nodes producing valid topological order if DAG.
function topoSort(n, edges) {
  const g = Array.from({ length: n }, () => []);
  const indeg = Array(n).fill(0);
  for (const [u, v] of edges) {
    g[u].push(v);
    indeg[v]++;
  }
  const q = [];
  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);
  const res = [];
  while (q.length) {
    const u = q.shift();
    res.push(u);
    for (const v of g[u]) {
      indeg[v]--;
      if (indeg[v] === 0) q.push(v);
    }
  }
  return res.length === n ? res : [];
}

// 79. Number of islands II (union-find)
// Why: Union-Find manages dynamic connectivity when adding lands.
function numIslands2(m, n, positions) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const parent = {};
  const rank = {};
  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  function union(a, b) {
    const ra = find(a),
      rb = find(b);
    if (ra === rb) return false;
    if (rank[ra] < rank[rb]) parent[ra] = rb;
    else if (rank[ra] > rank[rb]) parent[rb] = ra;
    else {
      parent[rb] = ra;
      rank[ra]++;
    }
    return true;
  }
  const grid = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  const res = [];
  let count = 0;
  for (const [r, c] of positions) {
    if (grid[r][c] === 1) {
      res.push(count);
      continue;
    }
    grid[r][c] = 1;
    const id = r * n + c;
    parent[id] = id;
    rank[id] = 0;
    count++;
    for (const [dr, dc] of dirs) {
      const nr = r + dr,
        nc = c + dc;
      if (nr < 0 || nc < 0 || nr >= m || nc >= n || grid[nr][nc] === 0)
        continue;
      const nid = nr * n + nc;
      if (union(id, nid)) count--;
    }
    res.push(count);
  }
  return res;
}

// 80. Regex engine basics (Thompson NFA)
// Why: Thompson's construction compiles regex to NFA which can be simulated; more advanced than backtracking.
// Implementation is advanced; mention concept and tradeoffs with backtracking engines.

// 81. Design URL shortener
// Why: Generate unique shortcodes with collision handling, map to long URLs; discuss DB sharding and TTL.
// Core: encode id in base62 to create short path; store mappings in DB/redis.

// 82. LRU cache with TTL
// Why: Combine LRU eviction with time-to-live expiration for practical caches.
// Approach: store timestamps in nodes and lazily remove expired entries on access or via background sweeper.

// 83. Serialize/deserialize graph (adj list)
// Why: Save adjacency lists as JSON or custom format; need to handle node ids and edges.
function serializeGraph(nodes) {
  return JSON.stringify(
    nodes.map((n) => ({ id: n.id, neighbors: n.neighbors.map((x) => x.id) }))
  );
}

// 84. Design rate limiter (token bucket)
// Why: Token bucket smooths bursts and enforces sustained rate limits; implement counters with time.
// Implementation: track tokens, refill based on elapsed time, allow or deny requests.

// 85. Find articulation points (Tarjan)
// Why: Tarjan's DFS finds critical nodes whose removal increases component count.
// Implementation uses discovery times and low-link values.

// 86. Find bridges in graph
// Why: Similar to articulation points, use low-link values to detect edges critical for connectivity.

// 87. Implement publish-subscribe (observer)
// Why: Decouple senders and receivers allowing multiple subscribers to react to events.
function PubSub() {
  this.map = new Map();
}
PubSub.prototype.subscribe = function (event, cb) {
  if (!this.map.has(event)) this.map.set(event, new Set());
  this.map.get(event).add(cb);
  return () => this.map.get(event).delete(cb);
};
PubSub.prototype.publish = function (event, data) {
  if (!this.map.has(event)) return;
  for (const cb of this.map.get(event)) cb(data);
};

// 88. Implement debounce (immediate option)
// Why: Support immediate invocation on leading edge and trailing edge.
function debounceAdvanced(fn, wait, immediate = false) {
  let timer;
  return function (...args) {
    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(this, args);
    }, wait);
    if (callNow) fn.apply(this, args);
  };
}

// 89. Implement deep equals
// Why: Compare structures recursively handling primitives and objects; handle cycles with WeakMap.
function deepEqual(a, b, seen = new WeakMap()) {
  if (a === b) return true;
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  )
    return false;
  if (seen.has(a) && seen.get(a) === b) return true;
  seen.set(a, b);
  const ka = Object.keys(a),
    kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (const k of ka) if (!deepEqual(a[k], b[k], seen)) return false;
  return true;
}

// 90. Async iterator from array
// Why: Create async iterable to consume values with for-await-of
async function* asyncFromArray(arr, delay = 0) {
  for (const v of arr) {
    if (delay) await new Promise((r) => setTimeout(r, delay));
    yield v;
  }
}

// 91. Concurrent promise pool (limit concurrency)
// Why: Limit in-flight promises to avoid resource exhaustion.
function promisePool(tasks, n) {
  const results = [];
  let i = 0;
  const runner = async () => {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  };
  const workers = Array(n)
    .fill()
    .map(() => runner());
  return Promise.all(workers).then(() => results);
}

// 92. Implement async retry with backoff
// Why: Retry transient failures with exponential backoff to improve robustness.
async function retry(fn, attempts = 3, delay = 100) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === attempts - 1) throw e;
      await new Promise((r) => setTimeout(r, delay * Math.pow(2, i)));
    }
  }
}

// 93. Boyer-Moore majority vote
// Why: Find majority element in O(n) time O(1) space.
function majorityElement(nums) {
  let count = 0,
    candidate = null;
  for (const n of nums) {
    if (count === 0) candidate = n;
    count += candidate === n ? 1 : -1;
  }
  return candidate;
}

// 94. Find longest palindromic substring (Manacher)
// Why: Manacher's algorithm runs in linear time; implementation is complex but valuable for interviews.
// Provide reference: transform string with separators and expand centers tracking rightmost palindrome.

// 95. Convert BST to sorted doubly linked list
// Why: In-order traversal links nodes in sorted order; adjust pointers in-place.
function treeToDoublyList(root) {
  if (!root) return null;
  let first = null,
    last = null;
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    if (last) {
      last.right = node;
      node.left = last;
    } else first = node;
    last = node;
    dfs(node.right);
  }
  dfs(root);
  first.left = last;
  last.right = first;
  return first;
}

// 96. Find skyline (detailed implementation omitted)
// Why: Sweep-line with heap needed; complexity O(n log n).
// Implementation exists in many references; include if needed.

// 97. V8 hidden classes & optimizations (explain)
// Why: Understanding engine internals helps write performance-friendly JS: avoid shape changes, use monomorphic calls, etc.
// This is conceptual, not code.

// 98. Implement async semaphore
// Why: Control concurrent access to resources using acquire/release with promises.
class Semaphore {
  constructor(max) {
    this.max = max;
    this.counter = 0;
    this.queue = [];
  }
  acquire() {
    if (this.counter < this.max) {
      this.counter++;
      return Promise.resolve();
    }
    return new Promise((res) => this.queue.push(res));
  }
  release() {
    this.counter--;
    if (this.queue.length) {
      this.counter++;
      const res = this.queue.shift();
      res();
    }
  }
}

// 99. Design a simple in-memory key-value store with expiration
// Why: Useful for caching; use Map and timers or lazy expiration on access.
class InMemoryStore {
  constructor() {
    this.map = new Map();
  }
  set(key, value, ttl = null) {
    const record = { value, expires: ttl ? Date.now() + ttl : null };
    this.map.set(key, record);
  }
  get(key) {
    const r = this.map.get(key);
    if (!r) return null;
    if (r.expires && r.expires < Date.now()) {
      this.map.delete(key);
      return null;
    }
    return r.value;
  }
}

// 100. Performance optimization checklist
// Why: Not a code problem but essential for production readiness:
// - minimize DOM reflows, batch updates, use virtual DOM or requestAnimationFrame,
// - avoid unnecessary allocations, reuse objects,
// - profile with DevTools, optimize hot paths, use proper data structures, memoize expensive computations,
// - offload heavy work to web workers,
// - monitor memory and prevent leaks.
