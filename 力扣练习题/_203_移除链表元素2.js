/**
 删除链表中等于给定值 val 的所有节点。
 示例:
 输入: 1->2->6->3->4->5->6, val = 6
 输出: 1->2->3->4->5

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 第二种写法
 * 在力扣中得分：耗时112ms, 打败Javascript中90.28%； 内存消耗37.5M, 打败JavaScript中24.79%
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;

    let newHead = new ListNode(-1);
    newHead.next = head; //把head作为newHead的下一个
    let tmpNode = newHead;

    while(tmpNode.next){
        if (tmpNode.next.val == val){
            tmpNode.next = tmpNode.next.next;
        }
        else{
            tmpNode = tmpNode.next;
        }
    }
    return newHead.next; //返回newHead的下一个，就是我们想要的结果
}

function ListNode(val){
    this.val = val;
    this.next = null;
}


//测试
console.log(">>>>移除链表元素测试》》》")
var node = new ListNode(1);
node.next = new ListNode(2);
// node.next.next = new ListNode(5);
// node.next.next.next = new ListNode(4);
// node.next.next.next.next = new ListNode(6);
// node.next.next.next.next.next = new ListNode(8);
// node.next.next.next.next.next.next = new ListNode(4);

// var newNode = removeElements(node, 6);
// console.log(newNode);

var newNode = removeElements(node, 2);
console.log(newNode);