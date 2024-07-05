---
isDraft: false
title: "Two Sum"
slug: "two-sum"
description: "A solution to the first algorithm problem on LeetCode"
priority: 10
tags: ["leetcode", "javascript"]
publishDate: 2024-07-02
---

## Problem

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

## Solution

```js
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }

    seen.set(nums[i], i);
  }
}
```
