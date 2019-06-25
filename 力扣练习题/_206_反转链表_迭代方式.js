/*
 反转一个单链表。使用迭代方式实现
 示例:
 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL

 力扣中测试执行用时 : 76 ms, 在所有 JavaScript 提交中击败了97.74%的用户
 内存消耗 :36 MB, 在所有 JavaScript 提交中击败了6.92%的用户
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
    let newHead = null;
    while(head){
        let tmpNode= newHead;
        newHead = new ListNode(head.val);
        newHead.next = tmpNode;
        head = head.next;
    }
    return newHead;
}


////测试
var node = new ListNode(9);
node.next = new ListNode(99);
node.next.next = new ListNode(999);
node.next.next.next = new ListNode(33);

console.log("原链表：", node);
console.log(".....反转....")
console.log(reverseList(node))