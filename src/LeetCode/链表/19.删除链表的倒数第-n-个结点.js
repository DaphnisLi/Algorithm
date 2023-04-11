/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例 1：

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// ? 用 list 主要是为了防止删除头节点
var removeNthFromEnd = function (head, n) {
  const list = new ListNode()
  list.next = head
  let fast = list
  let slow = list
  while (fast) {
    if (n < 0) {
      slow = slow.next
    } else {
      n--
    }
    fast = fast.next
  }
  slow.next = slow.next.next
  console.log(head)
  return list.next
}
// @lc code=end
