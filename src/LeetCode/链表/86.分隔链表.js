/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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

// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

// 你应当 保留 两个分区中每个节点的初始相对位置。

// 示例 1：

// 输入：head = [1,4,3,2,5,2], x = 3
// 输出：[1,2,2,4,3,5]

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const head1 = new ListNode()
  let list1 = head1
  const head2 = new ListNode()
  let list2 = head2
  while (head) {
    if (head.val < x) {
      list1.next = head
      list1 = list1.next
    } else {
      list2.next = head
      list2 = list2.next
    }
    head = head.next
  }
  list2.next = null // 防止循环链表 ?
  list1.next = head2.next
  return head1.next
}
// @lc code=end
