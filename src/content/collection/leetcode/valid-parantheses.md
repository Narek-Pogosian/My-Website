---
isDraft: false
title: "Valid Parantheses"
slug: "valid-parantheses"
description: "A solution to the first algorithm problem on LeetCode"
priority: 5
tags: ["leetcode", "javascript"]
publishDate: 2024-07-05
---

## Problem

> Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

> An input string is valid if:
>
> - Open brackets must be closed by the same type of brackets.
> - Open brackets must be closed in the correct order.
> - Every close bracket has a corresponding open bracket of the same type.

## Solution

The key to solving this problem is to understand that as soon as we encounter a closing bracket e.g ")", "]" or "}" we need to check that the latest encountered opening bracket matches the closing one. But we also need to remember the previous encountered opnening brackets so a good way to do it is to use a stack data structure. Everytime we encounter an opening bracket as we traverse the string we push it to the stack and as we get to a closing one we pop the top one from the stack and check if it matches.

```js
function isValid(str) {
  const stack = [];
  const matches = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const char of str) {
    if (matches.has(char)) {
      const latestOpen = stack.pop();
      if (latestOpen !== matches.get(char)) return false;
    } else {
      stack.push(char);
    }
  }

  if (stack.length === 0) return true;

  return false;
}
```
