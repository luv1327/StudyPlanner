import problemStatus from "../config/status";
const { pending } = problemStatus;
const slidingWindow = [
  {
    name: "Maximum Average Subarray I",
    leetcodeLink: "https://leetcode.com/problems/maximum-average-subarray-i/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find the maximum average of a subarray of fixed size k in a given array.",
    tags: ["Array", "Sliding Window"],
    hints: [
      "Use a sliding window to maintain the sum of the current window and slide it through the array.",
    ],
    notes:
      "This problem can be solved using a straightforward sliding window approach.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Find All Anagrams in a String",
    leetcodeLink:
      "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find all the starting indices of the anagrams of a pattern in a given string.",
    tags: ["String", "Sliding Window"],
    hints: ["Use a sliding window to keep track of frequencies of characters."],
    notes: "Similar to the problem of finding permutations in a string.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Minimum Size Subarray Sum",
    leetcodeLink: "https://leetcode.com/problems/minimum-size-subarray-sum/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find the minimum size of a contiguous subarray whose sum is greater than or equal to a given target.",
    tags: ["Array", "Sliding Window"],
    hints: [
      "Use a sliding window approach to maintain the sum of the current window.",
    ],
    notes:
      "This problem can be solved efficiently using a two-pointer technique.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Longest Substring Without Repeating Characters",
    leetcodeLink:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find the length of the longest substring without repeating characters.",
    tags: ["String", "Sliding Window"],
    hints: [
      "Use a sliding window to track the characters in the current substring.",
    ],
    notes:
      "Hashing can be used to keep track of the last occurrence of each character.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Permutation in String",
    leetcodeLink: "https://leetcode.com/problems/permutation-in-string/",
    difficulty: "Medium",
    status: pending,
    description: "Check if one string is a permutation of another string.",
    tags: ["String", "Sliding Window"],
    hints: [
      "Use a sliding window to compare the frequency of characters in both strings.",
    ],
    notes: "Similar to the problem of finding all anagrams in a string.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Longest Repeating Character Replacement",
    leetcodeLink:
      "https://leetcode.com/problems/longest-repeating-character-replacement/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find the length of the longest substring that can be replaced to contain all the same characters.",
    tags: ["String", "Sliding Window"],
    hints: [
      "Use a sliding window to maintain the count of characters and the maximum repeat count.",
    ],
    notes:
      "This problem can be solved efficiently using a sliding window and maintaining a count of characters.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Sliding Window Maximum",
    leetcodeLink: "https://leetcode.com/problems/sliding-window-maximum/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find the maximum value in every window of size k in a given array.",
    tags: ["Array", "Sliding Window", "Deque"],
    hints: [
      "Use a deque to store indices of elements and maintain the maximum element in the window.",
    ],
    notes:
      "Deque data structure can be used to efficiently maintain the maximum in a sliding window.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Subarrays with K Different Integers",
    leetcodeLink:
      "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find the number of subarrays with exactly k different integers.",
    tags: ["Array", "Sliding Window"],
    hints: [
      "Use a sliding window to count the number of subarrays with exactly k distinct integers.",
    ],
    notes:
      "This problem involves extending the sliding window technique to count subarrays with exact k distinct integers.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Fruit Into Baskets",
    leetcodeLink: "https://leetcode.com/problems/fruit-into-baskets/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an array of integers representing the number of fruits in each basket, find the maximum number of fruits you can collect with two baskets.",
    tags: ["Array", "Sliding Window"],
    hints: [
      "Use a sliding window to maintain counts of different types of fruits.",
    ],
    notes:
      "This problem is similar to the problem of finding the longest substring with at most two distinct characters.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Minimum Window Substring",
    leetcodeLink: "https://leetcode.com/problems/minimum-window-substring/",
    difficulty: "Hard",
    status: pending,
    description:
      "Find the minimum window in S which will contain all the characters in T in complexity O(n).",
    tags: ["String", "Sliding Window"],
    hints: [
      "Use a sliding window approach combined with a hashmap to track characters.",
    ],
    notes:
      "This problem requires an efficient approach to find the minimum window substring containing all characters from another string.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
];

const twoPointers = [
  {
    name: "Two Sum II - Input array is sorted",
    leetcodeLink:
      "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find two numbers that add up to a specific target number in a sorted array.",
    tags: ["Array", "Two Pointers"],
    hints: ["Use two pointers approach to find the pair of numbers."],
    notes:
      "This problem can be efficiently solved using the two pointers technique.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Container With Most Water",
    leetcodeLink: "https://leetcode.com/problems/container-with-most-water/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find the maximum area of water that can be trapped between vertical lines given by an array of heights.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers approach to find the maximum area of water between the lines.",
    ],
    notes:
      "This problem is a classic example of using two pointers to optimize the solution.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "3Sum",
    leetcodeLink: "https://leetcode.com/problems/3sum/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find all unique triplets in the array which gives the sum of zero.",
    tags: ["Array", "Two Pointers"],
    hints: ["Sort the array first, then use two pointers to find the triplet."],
    notes:
      "This problem involves using the two pointers approach along with sorting to find triplets.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n^2)",
    githubLink: "",
  },
  {
    name: "4Sum",
    leetcodeLink: "https://leetcode.com/problems/4sum/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find all unique quadruplets in the array which gives the sum of target.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Sort the array first, then use two pointers to find the quadruplet.",
    ],
    notes:
      "This problem extends the concept of 3Sum and uses two pointers along with sorting.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n^3)",
    githubLink: "",
  },
  {
    name: "Remove Duplicates from Sorted Array",
    leetcodeLink:
      "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    difficulty: "Easy",
    status: pending,
    description:
      "Remove duplicates in-place such that each element appears only once and returns the new length.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers to track unique elements and remove duplicates in-place.",
    ],
    notes:
      "This problem can be solved with a two pointers approach in O(n) time complexity.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Remove Element",
    leetcodeLink: "https://leetcode.com/problems/remove-element/",
    difficulty: "Easy",
    status: pending,
    description:
      "Remove all instances of a value in-place and return the new length of the array.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers to track elements and overwrite elements to remove the specified value.",
    ],
    notes:
      "This problem can also be efficiently solved with a two pointers approach.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Squares of a Sorted Array",
    leetcodeLink: "https://leetcode.com/problems/squares-of-a-sorted-array/",
    difficulty: "Easy",
    status: pending,
    description:
      "Given an integer array sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers to compare squares of elements from both ends of the array.",
    ],
    notes:
      "This problem demonstrates the usage of two pointers in an array manipulation scenario.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Sort Colors",
    leetcodeLink: "https://leetcode.com/problems/sort-colors/",
    difficulty: "Medium",
    status: pending,
    description:
      "Sort an array containing 0, 1, and 2 in-place in O(n) time complexity.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers to partition the array into sections of 0s, 1s, and 2s.",
    ],
    notes:
      "This problem is a classic example of using two pointers to solve a sorting problem in linear time.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Move Zeroes",
    leetcodeLink: "https://leetcode.com/problems/move-zeroes/",
    difficulty: "Easy",
    status: pending,
    description:
      "Move all 0's to the end of the array while maintaining the relative order of the non-zero elements.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers to track non-zero elements and swap with zero elements.",
    ],
    notes:
      "This problem can be efficiently solved with a two pointers approach.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Valid Palindrome",
    leetcodeLink: "https://leetcode.com/problems/valid-palindrome/",
    difficulty: "Easy",
    status: pending,
    description:
      "Check if a string is a palindrome, considering only alphanumeric characters and ignoring cases.",
    tags: ["Two Pointers", "String"],
    hints: [
      "Use two pointers to compare characters from both ends of the string, ignoring non-alphanumeric characters.",
    ],
    notes:
      "This problem showcases the usage of two pointers in a string manipulation scenario.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
];

const fastSlowPointers = [
  {
    name: "Linked List Cycle",
    leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/",
    difficulty: "Easy",
    status: pending,
    description:
      "Check if a linked list has a cycle and return the node where the cycle begins.",
    tags: ["Linked List", "Two Pointers"],
    hints: ["Use fast and slow pointers; if they meet, there is a cycle."],
    notes:
      "This problem is a classic example of using fast and slow pointers to detect cycles in a linked list.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Linked List Cycle II",
    leetcodeLink: "https://leetcode.com/problems/linked-list-cycle-ii/",
    difficulty: "Medium",
    status: pending,
    description: "Find the node where the cycle begins in a linked list.",
    tags: ["Linked List", "Two Pointers"],
    hints: [
      "Use fast and slow pointers to find the meeting point, then move one pointer back to the head and advance both pointers to find the cycle start.",
    ],
    notes:
      "This problem extends the Linked List Cycle problem to find the starting node of the cycle.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Middle of the Linked List",
    leetcodeLink: "https://leetcode.com/problems/middle-of-the-linked-list/",
    difficulty: "Easy",
    status: pending,
    description: "Find the middle node of a singly linked list.",
    tags: ["Linked List", "Two Pointers"],
    hints: [
      "Use fast and slow pointers; when fast pointer reaches the end, slow pointer will be at the middle.",
    ],
    notes:
      "This problem demonstrates the use of fast and slow pointers to find the middle of a linked list efficiently.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Palindrome Linked List",
    leetcodeLink: "https://leetcode.com/problems/palindrome-linked-list/",
    difficulty: "Easy",
    status: pending,
    description: "Check if a singly linked list is a palindrome.",
    tags: ["Linked List", "Two Pointers"],
    hints: [
      "Use fast and slow pointers to find the middle of the list, reverse the second half, and compare.",
    ],
    notes:
      "This problem involves using fast and slow pointers along with reversing a linked list to check for palindrome.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Intersection of Two Linked Lists",
    leetcodeLink:
      "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find the node at which the intersection of two singly linked lists begins.",
    tags: ["Linked List", "Two Pointers"],
    hints: [
      "Use fast and slow pointers to determine the length of both lists, adjust pointers to start at the same distance from the end, then traverse to find the intersection.",
    ],
    notes:
      "This problem uses fast and slow pointers to align two linked lists for finding the intersection point.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(m + n)",
    githubLink: "",
  },
  {
    name: "Happy Number",
    leetcodeLink: "https://leetcode.com/problems/happy-number/",
    difficulty: "Easy",
    status: pending,
    description: "Determine if a number is happy.",
    tags: ["Math", "Two Pointers"],
    hints: [
      "Use fast and slow pointers to detect cycles in the sum of squares of digits until 1 is reached or a cycle is detected.",
    ],
    notes:
      "This problem involves using fast and slow pointers in a mathematical scenario to determine if a number is happy.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Find the Duplicate Number",
    leetcodeLink: "https://leetcode.com/problems/find-the-duplicate-number/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find the duplicate number in an array containing n+1 integers where each integer is between 1 and n.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use fast and slow pointers to detect the cycle in the array representation as a linked list.",
    ],
    notes:
      "This problem can be solved using the fast and slow pointers technique to detect cycles in an array representation.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Linked List Cycle III",
    leetcodeLink: "https://leetcode.com/problems/linked-list-cycle-iii/",
    difficulty: "Hard",
    status: pending,
    description:
      "Find the entry of the cycle in a linked list where cycle may be of any length.",
    tags: ["Linked List", "Two Pointers"],
    hints: [
      "Use fast and slow pointers to find the meeting point, then use additional pointers to find the entry of the cycle.",
    ],
    notes:
      "This problem is an extension of the Linked List Cycle II problem and involves finding the entry point of a cycle in a linked list.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Find the Missing Number",
    leetcodeLink: "https://leetcode.com/problems/missing-number/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find the missing number in an array containing n distinct numbers taken from 0, 1, 2, ..., n.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use the concept of sum of first n natural numbers and subtract the sum of the given array from it.",
    ],
    notes:
      "This problem can also be approached using XOR operation to find the missing number efficiently.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Merge Two Sorted Lists",
    leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
    difficulty: "Easy",
    status: pending,
    description:
      "Merge two sorted linked lists and return it as a new sorted list.",
    tags: ["Linked List", "Two Pointers"],
    hints: [
      "Use two pointers to compare elements from both lists and merge them into a new sorted list.",
    ],
    notes:
      "This problem involves merging two sorted linked lists using the two pointers technique.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(m + n)",
    githubLink: "",
  },
];

const mergeIntervals = [
  {
    name: "Merge Intervals",
    leetcodeLink: "https://leetcode.com/problems/merge-intervals/",
    difficulty: "Medium",
    status: pending,
    description: "Merge overlapping intervals and return the merged intervals.",
    tags: ["Array", "Sorting"],
    hints: ["Sort intervals by start time, then merge overlapping intervals."],
    notes:
      "This problem requires sorting intervals and then merging them in linear time.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Insert Interval",
    leetcodeLink: "https://leetcode.com/problems/insert-interval/",
    difficulty: "Hard",
    status: pending,
    description:
      "Insert a new interval into a list of non-overlapping intervals (merge if necessary).",
    tags: ["Array", "Sorting"],
    hints: [
      "Sort intervals, then iterate to merge or insert the new interval.",
    ],
    notes:
      "This problem involves inserting a new interval into a list of non-overlapping intervals and merging if necessary.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Non-overlapping Intervals",
    leetcodeLink: "https://leetcode.com/problems/non-overlapping-intervals/",
    difficulty: "Medium",
    status: pending,
    description:
      "Remove the minimum number of intervals to make the intervals non-overlapping.",
    tags: ["Array", "Greedy"],
    hints: [
      "Sort intervals by end time, then use a greedy approach to remove overlapping intervals.",
    ],
    notes:
      "This problem demonstrates the use of a greedy algorithm to solve a scheduling problem.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Interval List Intersections",
    leetcodeLink: "https://leetcode.com/problems/interval-list-intersections/",
    difficulty: "Medium",
    status: pending,
    description: "Find the intersection of two lists of closed intervals.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers to find intersections of intervals from both lists.",
    ],
    notes:
      "This problem involves finding intersections of intervals from two lists using two pointers.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(m + n)",
    githubLink: "",
  },
  {
    name: "Meeting Rooms II",
    leetcodeLink: "https://leetcode.com/problems/meeting-rooms-ii/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an array of meeting time intervals, find the minimum number of conference rooms required.",
    tags: ["Array", "Sorting", "Heap"],
    hints: [
      "Sort intervals by start time, use a min-heap to track end times of ongoing meetings.",
    ],
    notes:
      "This problem involves scheduling meetings and using data structures like heaps to track room availability.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Employee Free Time",
    leetcodeLink: "https://leetcode.com/problems/employee-free-time/",
    difficulty: "Hard",
    status: pending,
    description: "Find the list of time intervals when all employees are free.",
    tags: ["Array", "Sorting", "Heap"],
    hints: [
      "Sort intervals by start time, use a min-heap to track the end times of ongoing intervals.",
    ],
    notes:
      "This problem involves finding gaps (free time) between busy intervals using sorting and heap data structure.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Interval Intersection",
    leetcodeLink: "https://leetcode.com/problems/interval-list-intersections/",
    difficulty: "Medium",
    status: pending,
    description: "Find the intersection of two sorted interval lists.",
    tags: ["Array", "Two Pointers"],
    hints: [
      "Use two pointers to find intersections of intervals from both lists.",
    ],
    notes:
      "This problem involves finding intersections of intervals from two sorted lists using two pointers.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(m + n)",
    githubLink: "",
  },
  {
    name: "Range Module",
    leetcodeLink: "https://leetcode.com/problems/range-module/",
    difficulty: "Hard",
    status: pending,
    description:
      "Design a data structure to track ranges of variables and implement several operations on them.",
    tags: ["Array", "Sorting", "Binary Search"],
    hints: [
      "Use a sorted list of intervals and implement efficient range operations.",
    ],
    notes:
      "This problem involves designing a data structure to manage and operate on ranges of variables.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Data Stream as Disjoint Intervals",
    leetcodeLink:
      "https://leetcode.com/problems/data-stream-as-disjoint-intervals/",
    difficulty: "Hard",
    status: pending,
    description:
      "Design a data structure that maintains the summary of a data stream in the form of disjoint intervals.",
    tags: ["Array", "Sorting", "Design"],
    hints: [
      "Use a sorted list of intervals and maintain them as new data streams are added.",
    ],
    notes:
      "This problem involves designing a data structure to manage a data stream and keep track of disjoint intervals.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Teemo Attacking",
    leetcodeLink: "https://leetcode.com/problems/teemo-attacking/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find the total time covered by the attacking sequence of Teemo.",
    tags: ["Array", "Sorting"],
    hints: [
      "Sort intervals by start time, then merge overlapping intervals to find the total covered time.",
    ],
    notes:
      "This problem involves calculating the total covered time by intervals of poison attacks.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
];

const cyclicSort = [
  {
    name: "Find the Missing Number",
    leetcodeLink: "https://leetcode.com/problems/missing-number/",
    difficulty: "Easy",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Iterate through the array and place each number in its correct position based on its value.",
    ],
    notes:
      "This problem involves finding the missing number in an array using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Find All Duplicate Numbers",
    leetcodeLink:
      "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    difficulty: "Medium",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Iterate through the array and place each number in its correct position. Identify duplicates during placement.",
    ],
    notes:
      "This problem involves finding all duplicate numbers in an array using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Find the Duplicate Number",
    leetcodeLink: "https://leetcode.com/problems/find-the-duplicate-number/",
    difficulty: "Medium",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Use cyclic sort to find the duplicate number by treating the array indices and values as a linked list cycle.",
    ],
    notes:
      "This problem involves finding the duplicate number in an array using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Set Mismatch",
    leetcodeLink: "https://leetcode.com/problems/set-mismatch/",
    difficulty: "Easy",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Iterate through the array and place each number in its correct position. Identify the mismatch and duplicate during placement.",
    ],
    notes:
      "This problem involves finding the set mismatch (one number is duplicated, and one is missing) using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "First Missing Positive",
    leetcodeLink: "https://leetcode.com/problems/first-missing-positive/",
    difficulty: "Hard",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Use cyclic sort to place positive numbers in their correct positions and find the first missing positive integer.",
    ],
    notes:
      "This problem involves finding the first missing positive integer using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Sort Colors",
    leetcodeLink: "https://leetcode.com/problems/sort-colors/",
    difficulty: "Medium",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Use cyclic sort to arrange an array of 0s, 1s, and 2s in-place without using extra space.",
    ],
    notes:
      "This problem involves sorting an array of 0s, 1s, and 2s using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Find All Numbers Disappeared in an Array",
    leetcodeLink:
      "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    difficulty: "Easy",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Use cyclic sort to place each number in its correct position and identify missing numbers.",
    ],
    notes:
      "This problem involves finding all numbers that are missing in an array using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Missing Element in Sorted Array",
    leetcodeLink:
      "https://leetcode.com/problems/missing-element-in-sorted-array/",
    difficulty: "Medium",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Use cyclic sort to find the kth missing number in a sorted array.",
    ],
    notes:
      "This problem involves finding the kth missing number in a sorted array using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Find All Duplicates in an Array",
    leetcodeLink:
      "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    difficulty: "Medium",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Use cyclic sort to find all elements that appear twice in an array without using extra space and in linear time.",
    ],
    notes:
      "This problem involves finding all duplicate numbers in an array using cyclic sort.",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Sort an Array",
    leetcodeLink: "https://leetcode.com/problems/sort-an-array/",
    difficulty: "Medium",
    status: pending,
    tags: ["Cyclic Sort"],
    hints: [
      "Implement a sorting algorithm using cyclic sort to achieve O(n) time complexity.",
    ],
    notes:
      "This problem involves sorting an array of integers using cyclic sort.",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
];

const inPlaceReversalLinkedList = [
  {
    name: "Reverse Linked List",
    leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
    difficulty: "Easy",
    status: pending,
    description: "Reverse a singly linked list.",
    tags: ["Linked List", "In-place Reversal"],
    hints: ["Iteratively reverse the linked list by adjusting pointers."],
    notes:
      "This problem is a fundamental exercise in reversing a linked list in place.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Reverse Linked List II",
    leetcodeLink: "https://leetcode.com/problems/reverse-linked-list-ii/",
    difficulty: "Medium",
    status: pending,
    description: "Reverse a linked list from position m to n.",
    tags: ["Linked List", "In-place Reversal"],
    hints: [
      "Use in-place reversal techniques to reverse the sublist between positions m and n.",
    ],
    notes:
      "This problem involves reversing a specific segment of a linked list in place.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Rotate List",
    leetcodeLink: "https://leetcode.com/problems/rotate-list/",
    difficulty: "Medium",
    status: pending,
    description: "Rotate a linked list to the right by k places.",
    tags: ["Linked List", "In-place Reversal"],
    hints: [
      "Use in-place reversal techniques and modular arithmetic to rotate the linked list.",
    ],
    notes:
      "This problem involves rotating a linked list to the right by a specified number of places.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Palindrome Linked List",
    leetcodeLink: "https://leetcode.com/problems/palindrome-linked-list/",
    difficulty: "Easy",
    status: pending,
    description: "Check if a linked list is a palindrome.",
    tags: ["Linked List", "In-place Reversal"],
    hints: [
      "Reverse the second half of the linked list and compare with the first half.",
    ],
    notes:
      "This problem involves using in-place reversal techniques to check if a linked list is a palindrome.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Reverse Nodes in k-Group",
    leetcodeLink: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    difficulty: "Hard",
    status: pending,
    description: "Reverse nodes in k-group in a linked list.",
    tags: ["Linked List", "In-place Reversal"],
    hints: [
      "Use in-place reversal techniques to reverse nodes in groups of k in a linked list.",
    ],
    notes:
      "This problem involves reversing nodes in groups of k in a linked list using in-place reversal techniques.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Swap Nodes in Pairs",
    leetcodeLink: "https://leetcode.com/problems/swap-nodes-in-pairs/",
    difficulty: "Medium",
    status: pending,
    description: "Swap nodes in pairs in a linked list.",
    tags: ["Linked List", "In-place Reversal"],
    hints: [
      "Use in-place reversal techniques to swap nodes in pairs in a linked list.",
    ],
    notes:
      "This problem involves swapping nodes in pairs in a linked list using in-place reversal techniques.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Reverse Linked List between m and n",
    leetcodeLink: "https://leetcode.com/problems/reverse-linked-list-ii/",
    difficulty: "Medium",
    status: pending,
    description: "Reverse linked list between m and n in a singly linked list.",
    tags: ["Linked List", "In-place Reversal"],
    hints: [
      "Use in-place reversal techniques to reverse the sublist between positions m and n.",
    ],
    notes:
      "This problem involves reversing a specific segment of a linked list in place.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Reverse Words in a String",
    leetcodeLink: "https://leetcode.com/problems/reverse-words-in-a-string/",
    difficulty: "Medium",
    status: pending,
    description: "Reverse words in a string while trimming extra spaces.",
    tags: ["String", "In-place Reversal"],
    hints: [
      "Use in-place reversal techniques to reverse words in a string and trim extra spaces.",
    ],
    notes:
      "This problem involves reversing words in a string using in-place reversal techniques.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Reverse String",
    leetcodeLink: "https://leetcode.com/problems/reverse-string/",
    difficulty: "Easy",
    status: pending,
    description: "Reverse a string in-place.",
    tags: ["String", "In-place Reversal"],
    hints: [
      "Use in-place reversal techniques to reverse characters of the string.",
    ],
    notes:
      "This problem is a basic exercise in reversing a string in place using two pointers.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
];

const treeBFS = [
  {
    name: "Binary Tree Level Order Traversal",
    leetcodeLink:
      "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    difficulty: "Medium",
    status: pending,
    description:
      "Return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    tags: ["Tree", "BFS"],
    hints: ["Use BFS with a queue to traverse each level of the binary tree."],
    notes:
      "This problem demonstrates the use of BFS to traverse levels of a binary tree.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Binary Tree Zigzag Level Order Traversal",
    leetcodeLink:
      "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    difficulty: "Medium",
    status: pending,
    description:
      "Return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue and toggle direction for alternating levels.",
    ],
    notes:
      "This problem involves alternating the direction of traversal at each level using BFS.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Average of Levels in Binary Tree",
    leetcodeLink:
      "https://leetcode.com/problems/average-of-levels-in-binary-tree/",
    difficulty: "Easy",
    status: pending,
    description:
      "Return the average value of the nodes on each level in a binary tree.",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue to calculate the sum and count of nodes at each level.",
    ],
    notes:
      "This problem involves calculating the average of values at each level of a binary tree using BFS.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Binary Tree Right Side View",
    leetcodeLink: "https://leetcode.com/problems/binary-tree-right-side-view/",
    difficulty: "Medium",
    status: pending,
    description:
      "Return the right side view of a binary tree (the last node of each level from left to right).",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue to track and return the rightmost node at each level.",
    ],
    notes:
      "This problem involves capturing the rightmost nodes at each level of a binary tree using BFS.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Minimum Depth of Binary Tree",
    leetcodeLink: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    difficulty: "Easy",
    status: pending,
    description:
      "Find the minimum depth of a binary tree, which is the number of nodes along the shortest path from the root node down to the nearest leaf node.",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue to find the first leaf node, which determines the minimum depth.",
    ],
    notes:
      "This problem involves finding the minimum depth of a binary tree using BFS to handle leaf nodes efficiently.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Binary Tree Level Order Traversal II",
    leetcodeLink:
      "https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",
    difficulty: "Easy",
    status: pending,
    description:
      "Return the bottom-up level order traversal of its nodes' values (i.e., from left to right, level by level from leaf to root).",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue and reverse the result list to get bottom-up traversal.",
    ],
    notes:
      "This problem involves obtaining bottom-up level order traversal of a binary tree using BFS.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Populating Next Right Pointers in Each Node",
    leetcodeLink:
      "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    difficulty: "Medium",
    status: pending,
    description:
      "Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue to link nodes at the same level using next pointers.",
    ],
    notes:
      "This problem involves linking nodes at the same level in a binary tree using BFS and next pointers.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Binary Tree Level Order Traversal III",
    leetcodeLink:
      "https://leetcode.com/problems/binary-tree-level-order-traversal-iii/",
    difficulty: "Medium",
    status: pending,
    description:
      "Return the level order traversal of its nodes' values from bottom-up (i.e., from left to right, level by level from leaf to root).",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue and reverse the result list to get bottom-up traversal.",
    ],
    notes:
      "This problem involves obtaining bottom-up level order traversal of a binary tree using BFS.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Cousins in Binary Tree",
    leetcodeLink: "https://leetcode.com/problems/cousins-in-binary-tree/",
    difficulty: "Easy",
    status: pending,
    description: "Determine if two nodes in a binary tree are cousins.",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue to track parent nodes and depths of target nodes.",
    ],
    notes:
      "This problem involves determining if two nodes in a binary tree are cousins using BFS to track parent nodes and depths.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Check Completeness of a Binary Tree",
    leetcodeLink:
      "https://leetcode.com/problems/check-completeness-of-a-binary-tree/",
    difficulty: "Medium",
    status: pending,
    description:
      "Check if a binary tree is complete (every level, except possibly the last, is completely filled, and all nodes are as far left as possible).",
    tags: ["Tree", "BFS"],
    hints: [
      "Use BFS with a queue to verify the level order completeness of a binary tree.",
    ],
    notes:
      "This problem involves checking the completeness of a binary tree using BFS to verify level order properties.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
];

const treeDFS = [
  {
    name: "Maximum Depth of Binary Tree",
    leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    difficulty: "Easy",
    status: pending,
    description: "Find the maximum depth of a binary tree.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to traverse the binary tree and keep track of the maximum depth.",
    ],
    notes:
      "This problem involves finding the maximum depth of a binary tree using DFS recursion.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Minimum Depth of Binary Tree",
    leetcodeLink: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    difficulty: "Easy",
    status: pending,
    description: "Find the minimum depth of a binary tree.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to traverse the binary tree and find the first leaf node to determine the minimum depth.",
    ],
    notes:
      "This problem involves finding the minimum depth of a binary tree using DFS recursion.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Path Sum",
    leetcodeLink: "https://leetcode.com/problems/path-sum/",
    difficulty: "Easy",
    status: pending,
    description:
      "Determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to recursively check if there exists a path from root to leaf with the given sum.",
    ],
    notes:
      "This problem involves checking if there exists a path from root to leaf in a binary tree with a specified sum using DFS recursion.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Binary Tree Paths",
    leetcodeLink: "https://leetcode.com/problems/binary-tree-paths/",
    difficulty: "Easy",
    status: pending,
    description: "Return all root-to-leaf paths in a binary tree.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to recursively construct paths from root to leaf nodes in the binary tree.",
    ],
    notes:
      "This problem involves collecting all root-to-leaf paths in a binary tree using DFS recursion.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n * h)",
    githubLink: "",
  },
  {
    name: "Symmetric Tree",
    leetcodeLink: "https://leetcode.com/problems/symmetric-tree/",
    difficulty: "Easy",
    status: pending,
    description:
      "Check if a binary tree is symmetric (mirror image of itself around its center).",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to recursively check if the left and right subtrees are mirror images of each other.",
    ],
    notes:
      "This problem involves checking if a binary tree is symmetric using DFS recursion to compare subtrees.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Path Sum II",
    leetcodeLink: "https://leetcode.com/problems/path-sum-ii/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find all root-to-leaf paths where each path's sum equals the given sum.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to recursively find all paths from root to leaf nodes with the specified sum.",
    ],
    notes:
      "This problem involves finding all root-to-leaf paths in a binary tree where the path's sum equals a specified value using DFS recursion.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n * h)",
    githubLink: "",
  },
  {
    name: "Sum Root to Leaf Numbers",
    leetcodeLink: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to recursively compute the sum of all root-to-leaf numbers formed by each path.",
    ],
    notes:
      "This problem involves calculating the sum of all root-to-leaf numbers in a binary tree using DFS recursion.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Flatten Binary Tree to Linked List",
    leetcodeLink:
      "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    difficulty: "Medium",
    status: pending,
    description: "Flatten a binary tree into a linked list in-place.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to recursively flatten the binary tree into a linked list in-place.",
    ],
    notes:
      "This problem involves flattening a binary tree into a linked list using DFS recursion and modifying tree nodes in-place.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Binary Tree Maximum Path Sum",
    leetcodeLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    difficulty: "Hard",
    status: pending,
    description:
      "Find the maximum path sum in a binary tree. The path may start and end at any node in the tree.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS to recursively find the maximum path sum starting from any node to any node.",
    ],
    notes:
      "This problem involves finding the maximum path sum in a binary tree using DFS recursion.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Serialize and Deserialize Binary Tree",
    leetcodeLink:
      "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    difficulty: "Hard",
    status: pending,
    description:
      "Serialize and deserialize a binary tree into a string and back into a tree structure.",
    tags: ["Tree", "DFS"],
    hints: [
      "Use DFS for both serialization (preorder traversal) and deserialization (recursively reconstruct the tree from string).",
    ],
    notes:
      "This problem involves serializing and deserializing a binary tree using DFS traversal techniques.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
];

const twoHeaps = [
  {
    name: "Find Median from Data Stream",
    leetcodeLink: "https://leetcode.com/problems/find-median-from-data-stream/",
    difficulty: "Hard",
    status: pending,
    description:
      "Design a data structure that supports the following two operations: addNum(int num) - Add a integer number from the data stream to the data structure. findMedian() - Return the median of all elements so far.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Maintain two heaps (max-heap and min-heap) to keep track of elements and efficiently find the median.",
    ],
    notes:
      "This problem involves using two heaps to efficiently compute the median of a data stream.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n) for addNum, O(1) for findMedian",
    githubLink: "",
  },
  {
    name: "Sliding Window Median",
    leetcodeLink: "https://leetcode.com/problems/sliding-window-median/",
    difficulty: "Hard",
    status: pending,
    description:
      "Return the median of the sliding window. Given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use two heaps (max-heap and min-heap) to efficiently maintain elements in the sliding window and calculate median.",
    ],
    notes:
      "This problem involves using two heaps to efficiently compute the median in a sliding window of integers.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k) where k is the window size",
    githubLink: "",
  },
  {
    name: "Maximum Points You Can Obtain from Cards",
    leetcodeLink:
      "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    difficulty: "Medium",
    status: pending,
    description:
      "There are several cards arranged in a row, and each card has an associated number of points. You are given an integer array cardPoints and an integer k. You have to take exactly k cards from the left or the right end of the row to maximize the total points.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use a sliding window approach with two heaps to calculate the maximum points you can obtain from the cards.",
    ],
    notes:
      "This problem involves using two heaps to optimize the selection of cards for maximum points from either end of the row.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(k log k)",
    githubLink: "",
  },
  {
    name: "Kth Largest Element in a Stream",
    leetcodeLink:
      "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    difficulty: "Easy",
    status: pending,
    description:
      "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use a min-heap to efficiently keep track of the k largest elements seen so far in the stream.",
    ],
    notes:
      "This problem involves using a min-heap to maintain the k largest elements in a stream and efficiently find the kth largest element.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log k) for add operation, O(1) for findKthLargest",
    githubLink: "",
  },
  {
    name: "Smallest Range Covering Elements from K Lists",
    leetcodeLink:
      "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
    difficulty: "Hard",
    status: pending,
    description:
      "You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use a sliding window approach with two heaps to find the smallest range covering elements from k sorted lists.",
    ],
    notes:
      "This problem involves using two heaps to maintain the smallest range covering elements from k sorted lists.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "Sum of Elements Between K1th and K2th Smallest Elements",
    leetcodeLink:
      "https://leetcode.com/problems/sum-of-elements-between-k1th-and-k2th-smallest-elements/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an array, find the sum of all elements between the k1th and k2th smallest elements inclusive.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use two heaps (min-heap and max-heap) to efficiently find the k1th and k2th smallest elements and calculate the sum of elements between them.",
    ],
    notes:
      "This problem involves using two heaps to find the k1th and k2th smallest elements and calculate the sum of elements between them.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "Minimum Cost to Connect Sticks",
    leetcodeLink:
      "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
    difficulty: "Medium",
    status: pending,
    description:
      "You have some number of sticks with positive integer lengths. You can connect any two sticks of lengths x and y into one stick by paying a cost of x + y. Return the minimum cost of connecting all the given sticks into one stick in this way.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use a min-heap to repeatedly combine the smallest sticks until only one stick remains, minimizing the total cost.",
    ],
    notes:
      "This problem involves using a min-heap to efficiently connect sticks with minimum cost.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Last Stone Weight",
    leetcodeLink: "https://leetcode.com/problems/last-stone-weight/",
    difficulty: "Easy",
    status: pending,
    description:
      "We have a collection of stones, each stone has a positive integer weight. Each turn, we choose the two heaviest stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is: If x == y, both stones are totally destroyed. If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y - x. At the end, there is at most one stone left. Return the weight of this stone (or 0 if there are no stones left).",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use a max-heap to simulate the smashing of stones and find the last stone weight after all operations.",
    ],
    notes:
      "This problem involves simulating stone smashing operations using a max-heap to find the last remaining stone weight.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Top K Frequent Elements",
    leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a non-empty array of integers, return the k most frequent elements.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use a min-heap to keep track of the k most frequent elements based on their frequency in the array.",
    ],
    notes:
      "This problem involves using a min-heap to find the k most frequent elements in an array efficiently.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "Sort Characters By Frequency",
    leetcodeLink: "https://leetcode.com/problems/sort-characters-by-frequency/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a string, sort it in decreasing order based on the frequency of characters.",
    tags: ["Heap", "Two Heaps"],
    hints: [
      "Use a max-heap to sort characters based on their frequency in the string.",
    ],
    notes:
      "This problem involves sorting characters in a string based on their frequency using a max-heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
];

const subsets = [
  {
    name: "Subsets",
    leetcodeLink: "https://leetcode.com/problems/subsets/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an integer array nums, return all possible subsets (the power set).",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Use backtracking to generate all possible subsets of the given array.",
    ],
    notes:
      "This problem involves generating all subsets (power set) of a given array using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(2^n)",
    githubLink: "",
  },
  {
    name: "Subsets II",
    leetcodeLink: "https://leetcode.com/problems/subsets-ii/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a collection of integers that might contain duplicates, return all possible subsets (the power set).",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Sort the array to handle duplicates and use backtracking to generate all possible subsets without duplicates.",
    ],
    notes:
      "This problem involves generating all subsets (power set) of a collection with possible duplicates using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(2^n)",
    githubLink: "",
  },
  {
    name: "Generalized Abbreviation",
    leetcodeLink: "https://leetcode.com/problems/generalized-abbreviation/",
    difficulty: "Medium",
    status: pending,
    description:
      "Generate all possible word abbreviations of a word. The abbreviation should not begin with a number and the length of the abbreviation should be as short as possible.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Use backtracking to generate all possible abbreviations of the given word, including both letters and numbers.",
    ],
    notes:
      "This problem involves generating all possible abbreviations of a word using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(2^n)",
    githubLink: "",
  },
  {
    name: "Letter Case Permutation",
    leetcodeLink: "https://leetcode.com/problems/letter-case-permutation/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string. Return a list of all possible strings we could create.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Use backtracking to generate all possible letter case permutations of the given string.",
    ],
    notes:
      "This problem involves generating all possible permutations of letter cases in a string using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(2^n)",
    githubLink: "",
  },
  {
    name: "Combination Sum",
    leetcodeLink: "https://leetcode.com/problems/combination-sum/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a set of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Use backtracking to generate all unique combinations of candidate numbers that sum to the target.",
    ],
    notes:
      "This problem involves generating all unique combinations of candidate numbers that sum to a target using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(2^n)",
    githubLink: "",
  },
  {
    name: "Combination Sum II",
    leetcodeLink: "https://leetcode.com/problems/combination-sum-ii/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Sort the array to handle duplicates, and use backtracking to generate all unique combinations of candidate numbers that sum to the target.",
    ],
    notes:
      "This problem involves generating all unique combinations of candidate numbers (with duplicates) that sum to a target using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(2^n)",
    githubLink: "",
  },
  {
    name: "Palindrome Partitioning",
    leetcodeLink: "https://leetcode.com/problems/palindrome-partitioning/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Use backtracking to generate all possible palindrome partitionings of the given string.",
    ],
    notes:
      "This problem involves generating all possible palindrome partitionings of a string using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(2^n)",
    githubLink: "",
  },
  {
    name: "Word Search II",
    leetcodeLink: "https://leetcode.com/problems/word-search-ii/",
    difficulty: "Hard",
    status: pending,
    description:
      "Given an m x n board of characters and a list of words, find all words in the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Use backtracking to search for all words in the board that can be formed from the given list of words.",
    ],
    notes:
      "This problem involves using backtracking to find all words in a board of characters that can be constructed from a given list of words.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(m * n * 4^l) where l is the length of the longest word",
    githubLink: "",
  },
  {
    name: "Permutations",
    leetcodeLink: "https://leetcode.com/problems/permutations/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a collection of distinct integers, return all possible permutations.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Use backtracking to generate all possible permutations of the given collection of distinct integers.",
    ],
    notes:
      "This problem involves generating all possible permutations of distinct integers using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n!)",
    githubLink: "",
  },
  {
    name: "Permutations II",
    leetcodeLink: "https://leetcode.com/problems/permutations-ii/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a collection of numbers that might contain duplicates, return all possible unique permutations.",
    tags: ["Backtracking", "Subsets"],
    hints: [
      "Sort the array to handle duplicates, and use backtracking to generate all unique permutations of the given collection of numbers.",
    ],
    notes:
      "This problem involves generating all unique permutations of a collection of numbers (with duplicates) using backtracking.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n!)",
    githubLink: "",
  },
];

const modifiedBinarySearch = [
  {
    name: "Binary Search",
    leetcodeLink: "https://leetcode.com/problems/binary-search/",
    difficulty: "Easy",
    status: pending,
    description:
      "Implement binary search algorithm to find the position of a target value in a sorted array.",
    tags: ["Binary Search"],
    hints: [
      "Use binary search algorithm to efficiently find the target value in a sorted array.",
    ],
    notes: "This problem involves implementing the binary search algorithm.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Search in Rotated Sorted Array",
    leetcodeLink:
      "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    difficulty: "Medium",
    status: pending,
    description:
      "You are given an integer array nums sorted in ascending order (with distinct values), and an integer target. Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). You are given a target value to search. If found in the array return its index, otherwise return -1.",
    tags: ["Binary Search"],
    hints: [
      "Use modified binary search to find the target value in a rotated sorted array.",
    ],
    notes:
      "This problem involves using binary search to find the target value in a rotated sorted array.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Find Minimum in Rotated Sorted Array",
    leetcodeLink:
      "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    difficulty: "Medium",
    status: pending,
    description:
      "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of distinct integers, return the minimum element of this array.",
    tags: ["Binary Search"],
    hints: [
      "Use modified binary search to find the minimum element in a rotated sorted array.",
    ],
    notes:
      "This problem involves using binary search to find the minimum element in a rotated sorted array.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Find Peak Element",
    leetcodeLink: "https://leetcode.com/problems/find-peak-element/",
    difficulty: "Medium",
    status: pending,
    description:
      "A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",
    tags: ["Binary Search"],
    hints: ["Use modified binary search to find a peak element in an array."],
    notes:
      "This problem involves using binary search to find a peak element in an array.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Search Insert Position",
    leetcodeLink: "https://leetcode.com/problems/search-insert-position/",
    difficulty: "Easy",
    status: pending,
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    tags: ["Binary Search"],
    hints: [
      "Use binary search to find the position where the target would be inserted in a sorted array.",
    ],
    notes:
      "This problem involves using binary search to find the insertion position of a target in a sorted array.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Search a 2D Matrix",
    leetcodeLink: "https://leetcode.com/problems/search-a-2d-matrix/",
    difficulty: "Medium",
    status: pending,
    description:
      "Write an efficient algorithm that searches for a value in an m x n matrix. Integers in each row are sorted from left to right, and the first integer of each row is greater than the last integer of the previous row.",
    tags: ["Binary Search"],
    hints: [
      "Use modified binary search to efficiently search for a value in a 2D matrix.",
    ],
    notes:
      "This problem involves using binary search to search for a value in a sorted 2D matrix.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log(m * n))",
    githubLink: "",
  },
  {
    name: "Find First and Last Position of Element in Sorted Array",
    leetcodeLink:
      "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.",
    tags: ["Binary Search"],
    hints: [
      "Use binary search to find the first and last occurrence of a target value in a sorted array.",
    ],
    notes:
      "This problem involves using binary search to find the first and last occurrence of a target value in a sorted array.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Search in Sorted Array of Unknown Size",
    leetcodeLink:
      "https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an integer array sorted in ascending order, write a function to search target in nums. If target exists, then return its index, otherwise return -1.",
    tags: ["Binary Search"],
    hints: [
      "Use binary search to efficiently search for a target in a sorted array of unknown size.",
    ],
    notes:
      "This problem involves using binary search to search for a target in a sorted array of unknown size.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Peak Index in a Mountain Array",
    leetcodeLink:
      "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
    difficulty: "Easy",
    status: pending,
    description:
      "Let's call an array arr a mountain if the following properties hold: arr.length >= 3, there exists some i with 0 < i < arr.length - 1 such that: arr[0] < arr[1] < ... arr[i-1] < arr[i] > arr[i+1] > ... > arr[arr.length - 1]. Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i-1] < arr[i] > arr[i+1] > ... > arr[arr.length - 1].",
    tags: ["Binary Search"],
    hints: ["Use binary search to find the peak index in a mountain array."],
    notes:
      "This problem involves using binary search to find the peak index in a mountain array.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
  {
    name: "Find Minimum in Sorted Rotated Array II",
    leetcodeLink:
      "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
    difficulty: "Hard",
    status: pending,
    description:
      "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in the array. The array may contain duplicates.",
    tags: ["Binary Search"],
    hints: [
      "Use binary search to find the minimum element in a rotated sorted array with duplicates.",
    ],
    notes:
      "This problem involves using binary search to find the minimum element in a rotated sorted array with duplicates.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n)",
    githubLink: "",
  },
];

const topKElements = [
  {
    name: "Top K Frequent Elements",
    leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    tags: ["Top K Elements"],
    hints: [
      "Use a hashmap to count frequencies and a min-heap (priority queue) to keep track of the k most frequent elements.",
    ],
    notes:
      "This problem involves finding the k most frequent elements in an array using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "Kth Largest Element in an Array",
    leetcodeLink:
      "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    difficulty: "Medium",
    status: pending,
    description:
      "Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    tags: ["Top K Elements"],
    hints: [
      "Use a min-heap (priority queue) to efficiently find the kth largest element in an array.",
    ],
    notes:
      "This problem involves finding the kth largest element in an unsorted array using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "K Closest Points to Origin",
    leetcodeLink: "https://leetcode.com/problems/k-closest-points-to-origin/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).",
    tags: ["Top K Elements"],
    hints: [
      "Use a max-heap (priority queue) to maintain the k closest points to the origin.",
    ],
    notes:
      "This problem involves finding the k closest points to the origin using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "Sort Characters By Frequency",
    leetcodeLink: "https://leetcode.com/problems/sort-characters-by-frequency/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a string s, sort it in decreasing order based on the frequency of characters, and return the sorted string.",
    tags: ["Top K Elements"],
    hints: [
      "Use a hashmap to count character frequencies and a max-heap (priority queue) to sort characters by frequency.",
    ],
    notes:
      "This problem involves sorting characters in a string based on their frequency using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Find Median from Data Stream",
    leetcodeLink: "https://leetcode.com/problems/find-median-from-data-stream/",
    difficulty: "Hard",
    status: pending,
    description:
      "Design a data structure that supports the following two operations: void addNum(int num) - Add a integer number from the data stream to the data structure. double findMedian() - Return the median of all elements so far.",
    tags: ["Top K Elements"],
    hints: [
      "Use two heaps (a max-heap and a min-heap) to maintain the median of elements efficiently.",
    ],
    notes:
      "This problem involves finding the median of elements in a data stream using two heaps.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n) for addNum, O(1) for findMedian",
    githubLink: "",
  },
  {
    name: "Top K Largest Numbers in a Stream",
    leetcodeLink:
      "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    difficulty: "Easy",
    status: pending,
    description:
      "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    tags: ["Top K Elements"],
    hints: [
      "Use a min-heap (priority queue) to maintain the k largest elements in a stream efficiently.",
    ],
    notes:
      "This problem involves finding the kth largest element in a stream using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity:
      "O(log k) for add operation, O(1) for retrieving the kth largest element",
    githubLink: "",
  },
  {
    name: "Kth Smallest Element in a Sorted Matrix",
    leetcodeLink:
      "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.",
    tags: ["Top K Elements"],
    hints: [
      "Use a min-heap (priority queue) to find the kth smallest element efficiently.",
    ],
    notes:
      "This problem involves finding the kth smallest element in a sorted matrix using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(k log n)",
    githubLink: "",
  },
  {
    name: "Kth Largest Element in a Stream",
    leetcodeLink:
      "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    difficulty: "Easy",
    status: pending,
    description:
      "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    tags: ["Top K Elements"],
    hints: [
      "Use a min-heap (priority queue) to maintain the k largest elements in a stream efficiently.",
    ],
    notes:
      "This problem involves finding the kth largest element in a stream using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity:
      "O(log k) for add operation, O(1) for retrieving the kth largest element",
    githubLink: "",
  },
  {
    name: "Find All Duplicates in an Array",
    leetcodeLink:
      "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements that appear twice in this array.",
    tags: ["Top K Elements"],
    hints: [
      "Use the array itself to mark visited elements and find duplicates in linear time.",
    ],
    notes:
      "This problem involves finding all duplicates in an array using constant space and linear time.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n)",
    githubLink: "",
  },
  {
    name: "Top K Frequent Words",
    leetcodeLink: "https://leetcode.com/problems/top-k-frequent-words/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a non-empty list of words, return the k most frequent elements.",
    tags: ["Top K Elements"],
    hints: [
      "Use a hashmap to count word frequencies and a min-heap (priority queue) to keep track of the k most frequent words.",
    ],
    notes:
      "This problem involves finding the k most frequent words in a list using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
];

const kWayMerge = [
  {
    name: "Merge K Sorted Lists",
    leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
    difficulty: "Hard",
    status: pending,
    description:
      "Merge k sorted linked lists and return it as one sorted list.",
    tags: ["K-way Merge"],
    hints: [
      "Use a min-heap (priority queue) to efficiently merge k sorted lists.",
    ],
    notes: "This problem involves merging k sorted linked lists using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "Merge Intervals",
    leetcodeLink: "https://leetcode.com/problems/merge-intervals/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    tags: ["K-way Merge"],
    hints: [
      "Sort intervals by start time and then merge overlapping intervals.",
    ],
    notes: "This problem involves merging overlapping intervals in an array.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Smallest Range Covering Elements from K Lists",
    leetcodeLink:
      "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
    difficulty: "Hard",
    status: pending,
    description:
      "You have k lists of sorted integers in ascending order. Find the smallest range that includes at least one number from each of the k lists.",
    tags: ["K-way Merge"],
    hints: [
      "Use a min-heap (priority queue) to efficiently track the smallest range covering elements from k lists.",
    ],
    notes:
      "This problem involves finding the smallest range covering elements from k sorted lists using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
  {
    name: "Kth Smallest Number in M Sorted Lists",
    leetcodeLink:
      "https://leetcode.com/problems/find-kth-smallest-number-in-m-sorted-lists/",
    difficulty: "Hard",
    status: pending,
    description:
      "Given m sorted arrays, find the kth smallest number in their sorted order.",
    tags: ["K-way Merge"],
    hints: [
      "Use a min-heap (priority queue) to find the kth smallest number in m sorted lists.",
    ],
    notes:
      "This problem involves finding the kth smallest number in m sorted lists using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(k log m)",
    githubLink: "",
  },
  {
    name: "Minimum Number of Refueling Stops",
    leetcodeLink:
      "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
    difficulty: "Hard",
    status: pending,
    description:
      "A car travels from a starting position to a destination which is target miles east of the starting position. Along the way, there are gas stations. Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas. The car starts with an infinite tank of gas, which initially has startFuel liters of fuel. It uses 1 liter of gas per 1 mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car. What is the least number of refueling stops the car must make in order to reach its destination? If it cannot reach the destination, return -1.",
    tags: ["K-way Merge"],
    hints: [
      "Use a max-heap (priority queue) to keep track of the farthest reachable distance and refuel stops.",
    ],
    notes:
      "This problem involves finding the minimum number of refueling stops using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Find Median from Data Stream",
    leetcodeLink: "https://leetcode.com/problems/find-median-from-data-stream/",
    difficulty: "Hard",
    status: pending,
    description:
      "Design a data structure that supports the following two operations: void addNum(int num) - Add a integer number from the data stream to the data structure. double findMedian() - Return the median of all elements so far.",
    tags: ["K-way Merge"],
    hints: [
      "Use two heaps (a max-heap and a min-heap) to maintain the median of elements efficiently.",
    ],
    notes:
      "This problem involves finding the median of elements in a data stream using two heaps.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n) for addNum, O(1) for findMedian",
    githubLink: "",
  },
  {
    name: "Reorganize String",
    leetcodeLink: "https://leetcode.com/problems/reorganize-string/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.",
    tags: ["K-way Merge"],
    hints: [
      "Use a max-heap (priority queue) to rearrange characters so that no two adjacent characters are the same.",
    ],
    notes:
      "This problem involves rearranging characters in a string using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Find K Closest Elements",
    leetcodeLink: "https://leetcode.com/problems/find-k-closest-elements/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.",
    tags: ["K-way Merge"],
    hints: [
      "Use binary search and two pointers or a max-heap to find the k closest elements to x.",
    ],
    notes:
      "This problem involves finding the k closest elements to x in a sorted array using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(log n + k log k)",
    githubLink: "",
  },
  {
    name: "Sort Features by Popularity",
    leetcodeLink: "https://leetcode.com/problems/sort-features-by-popularity/",
    difficulty: "Hard",
    status: pending,
    description:
      "Given a list of reviews, a list of keywords, and an integer k, return the most popular k keywords in order of most to least frequently mentioned.",
    tags: ["K-way Merge"],
    hints: [
      "Use a min-heap (priority queue) to count keyword frequencies across reviews and return the top k keywords.",
    ],
    notes: "This problem involves sorting features by popularity using a heap.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log k)",
    githubLink: "",
  },
];

const topologicalSort = [
  {
    name: "Course Schedule",
    leetcodeLink: "https://leetcode.com/problems/course-schedule/",
    difficulty: "Medium",
    status: pending,
    description:
      "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
    tags: ["Topological Sort"],
    hints: [
      "Use a graph representation and topological sorting (Kahn's algorithm) to detect cycles and order courses.",
    ],
    notes:
      "This problem involves determining if all courses can be taken based on prerequisites using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(V + E)",
    githubLink: "",
  },
  {
    name: "Alien Dictionary",
    leetcodeLink: "https://leetcode.com/problems/alien-dictionary/",
    difficulty: "Hard",
    status: pending,
    description:
      "There is a new alien language that uses the English alphabet. However, the order among letters are unknown to you. You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order. If there is no solution, return an empty string. If there are multiple valid solutions, return any of them.",
    tags: ["Topological Sort"],
    hints: [
      "Use a graph and topological sorting to determine the order of characters in the alien language.",
    ],
    notes:
      "This problem involves determining the order of characters in an alien language using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(V + E)",
    githubLink: "",
  },
  {
    name: "Sequence Reconstruction",
    leetcodeLink: "https://leetcode.com/problems/sequence-reconstruction/",
    difficulty: "Medium",
    status: pending,
    description:
      "Check whether the original sequence org can be uniquely reconstructed from the sequences in seqs. The org sequence is a permutation of the integers from 1 to n, with 1 ≤ n ≤ 10^4. Reconstruction means building a shortest common supersequence of the sequences in seqs (i.e., a shortest sequence so that all sequences in seqs are subsequences of it). Determine whether there is only one sequence that can be reconstructed from seqs and it is the org sequence.",
    tags: ["Topological Sort"],
    hints: [
      "Use topological sorting to check if the original sequence can be uniquely reconstructed from subsequences.",
    ],
    notes:
      "This problem involves checking if the original sequence can be uniquely reconstructed using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(V + E)",
    githubLink: "",
  },
  {
    name: "Minimum Height Trees",
    leetcodeLink: "https://leetcode.com/problems/minimum-height-trees/",
    difficulty: "Medium",
    status: pending,
    description:
      "For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels. The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).",
    tags: ["Topological Sort"],
    hints: [
      "Use topological sorting to find the nodes that are closest to the center of the graph, which gives minimum height trees.",
    ],
    notes:
      "This problem involves finding minimum height trees using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(V + E)",
    githubLink: "",
  },
  {
    name: "Course Schedule II",
    leetcodeLink: "https://leetcode.com/problems/course-schedule-ii/",
    difficulty: "Medium",
    status: pending,
    description:
      "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return the ordering of courses you should take to finish all courses. If there are multiple valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
    tags: ["Topological Sort"],
    hints: [
      "Use topological sorting (Kahn's algorithm) to determine the order of courses to take, considering dependencies.",
    ],
    notes:
      "This problem involves determining the order of courses to take based on prerequisites using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(V + E)",
    githubLink: "",
  },
  {
    name: "Rank Teams by Votes",
    leetcodeLink: "https://leetcode.com/problems/rank-teams-by-votes/",
    difficulty: "Medium",
    status: pending,
    description:
      "In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition. The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the tie, and so on. Return a string of the teams sorted by ranks. Teams that tie should be ordered alphabetically.",
    tags: ["Topological Sort"],
    hints: [
      "Use a custom sorting criteria where votes are treated as preferences and sorted based on rankings.",
    ],
    notes:
      "This problem involves ranking teams based on votes using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Parallel Courses II",
    leetcodeLink: "https://leetcode.com/problems/parallel-courses-ii/",
    difficulty: "Hard",
    status: pending,
    description:
      "Given the integer n representing the number of courses at some university labeled from 1 to n, and the array dependencies where dependencies[i] = [xi, yi]  represents a prerequisite relationship, that is, the course xi must be taken before the course yi. Also, you are given the integer k. In one semester, you can take at most k courses as long as you have taken all the prerequisites for the courses you are taking. Return the minimum number of semesters needed to take all courses. It is guaranteed that you can take all courses.",
    tags: ["Topological Sort"],
    hints: [
      "Use topological sorting and a priority queue to simulate taking courses and completing dependencies.",
    ],
    notes:
      "This problem involves scheduling courses based on dependencies using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Rank Transform of a Matrix",
    leetcodeLink: "https://leetcode.com/problems/rank-transform-of-a-matrix/",
    difficulty: "Hard",
    status: pending,
    description:
      "Given an m x n matrix, return a new matrix answer where answer[row][col] is the rank of matrix[row][col]. The rank is an integer that represents how large an element is compared to other elements. It is calculated using the following rules: The rank is an integer starting from 1. If two elements p and q are in the same row or column, then: If p < q then rank(p) < rank(q). If p == q then rank(p) == rank(q). If two elements p and q are in the same row and column, then: rank(p) == rank(q). Return the answer matrix answer after calculating the rank of every element.",
    tags: ["Topological Sort"],
    hints: [
      "Use topological sorting to handle dependencies between matrix elements and calculate ranks accordingly.",
    ],
    notes:
      "This problem involves calculating ranks of matrix elements using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(m * n * log(m * n))",
    githubLink: "",
  },
  {
    name: "Valid Path",
    leetcodeLink:
      "https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/",
    difficulty: "Medium",
    status: pending,
    description:
      "Given a m x n grid, where each cell represents a street, return true if there exists a path in the grid to move from the top-left cell to the bottom-right cell that meets the following conditions: The path can only start from the top-left cell and end at the bottom-right cell. The path should not contain any cycles in the four possible directions (up, down, left, right).",
    tags: ["Topological Sort"],
    hints: [
      "Represent the grid as a graph and use topological sorting to validate the path from the top-left to the bottom-right cell.",
    ],
    notes:
      "This problem involves checking for a valid path in a grid using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(m * n)",
    githubLink: "",
  },
  {
    name: "Smallest String With Swaps",
    leetcodeLink: "https://leetcode.com/problems/smallest-string-with-swaps/",
    difficulty: "Medium",
    status: pending,
    description:
      "You are given a string s, and an array of pairs of indices in the string pairs where pairs[i] = [a, b] indicates 2 indices (0-indexed) of the string. You can swap the characters at any pair of indices in the given pairs any number of times. Return the lexicographically smallest string that s can be changed to after using the swaps.",
    tags: ["Topological Sort"],
    hints: [
      "Treat each pair of indices as edges in a graph and use topological sorting to determine connected components that can be rearranged.",
    ],
    notes:
      "This problem involves finding the smallest lexicographical string using swaps represented by pairs of indices.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(n log n)",
    githubLink: "",
  },
  {
    name: "Alien Dictionary II",
    leetcodeLink: "https://leetcode.com/problems/alien-dictionary-ii/",
    difficulty: "Hard",
    status: pending,
    description:
      "There is a new alien language that uses the English alphabet. However, the order among letters are unknown to you. You are given a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.",
    tags: ["Topological Sort"],
    hints: [
      "Use topological sorting to determine the order of characters in the alien language based on the given dictionary of words.",
    ],
    notes:
      "This problem involves determining the order of characters in an alien language using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(V + E)",
    githubLink: "",
  },
  {
    name: "Sort Items by Groups Respecting Dependencies",
    leetcodeLink:
      "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/",
    difficulty: "Hard",
    status: pending,
    description:
      "There are n items each belonging to zero or one of m groups where group[i] is the group that the i-th item belongs to and it's equal to -1 if the i-th item belongs to no group. The items and groups are zero-indexed. A group can have no item belonging to it. Return a sorted list of the items such that: The items that belong to the same group are next to each other in the sorted list. Items belonging to no group are sorted in the list such that their relative ordering between each other is the same as in the input list.",
    tags: ["Topological Sort"],
    hints: [
      "Use topological sorting to order items by groups and respect their dependencies based on the provided inputs.",
    ],
    notes:
      "This problem involves sorting items by groups and respecting dependencies using topological sort.",
    solution: "",
    dateSolved: "",
    timeComplexity: "O(V + E)",
    githubLink: "",
  },
];

const allProblems = [
  ...slidingWindow,
  ...twoPointers,
  ...fastSlowPointers,
  ...mergeIntervals,
  ...cyclicSort,
  ...inPlaceReversalLinkedList,
  ...treeBFS,
  ...treeDFS,
  ...twoHeaps,
  ...subsets,
  ...modifiedBinarySearch,
  ...topKElements,
  ...kWayMerge,
  ...topologicalSort,
];

export default allProblems;
