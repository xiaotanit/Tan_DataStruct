/*
 反转一个单链表。 使用递归方式实现
 示例:
 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL

力扣官方例子：
 力扣测试得分：
 执行用时 :92 ms, 在所有 JavaScript 提交中击败了81.17%的用户
 内存消耗 :35.6 MB, 在所有 JavaScript 提交中击败了11.32%的用户
 * */

function ListNode(val){
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head == null || head.next == null) return head;
    var p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

//测试
var node = new ListNode(2);
node.next = new ListNode(3);
node.next.next = new ListNode(4);
node.next.next.next = new ListNode(5);
console.log("\n\n*****原链表****")
console.log(node);
console.log("......反转.....")
console.log(reverseList(node));