/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 示例 1：

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null
  return lists.reduce(mergeTwoLists)
}

// 合并两个链表
var mergeTwoLists = function (list1, list2) {
  const head = new ListNode()
  let list = head
  while (list1 && list2) {
    if (list1.val < list2.val) {
      list.next = list1
      list1 = list1.next
    } else {
      list.next = list2
      list2 = list2.next
    }
    list = list.next
  }
  if (list1) {
    list.next = list1
  }
  if (list2) {
    list.next = list2
  }
  return head.next
}
// @lc code=end
