/**
 * 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
 如果有两个中间结点，则返回第二个中间结点。

 示例 1：
 输入：[1,2,3,4,5]
 输出：此列表中的结点 3 (序列化形式：[3,4,5])
 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
 ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

 示例 2：
 输入：[1,2,3,4,5,6]
 输出：此列表中的结点 4 (序列化形式：[4,5,6])
 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
  

 提示：
 给定链表的结点数介于 1 和 100 之间。

 力扣得分：
 执行用时 :120 ms, 在所有 JavaScript 提交中击败了12.22%的用户
 内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了11.11%的用户

 官方答案，官方这个确实简洁：
 let slow = fast = head;
 while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
 return slow;

 官方力扣得分：
 执行用时 :64 ms, 在所有 JavaScript 提交中击败了99.44%的用户
 内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了11.11%的用户

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

/** 用快慢指针来处理下
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // let slow = head, fast = head;
    // while(slow){
    //     if (fast){
    //         fast = fast.next;
    //         if (fast){
    //             fast = fast.next;
    //         }
    //         else{
    //             return slow;
    //         }
    //     }
    //     else{
    //         return slow;
    //     }
    //     slow = slow.next;
    // }
    // return head;

    //官方答案：简洁明了
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

//测试
var obj = new ListNode(1), temp = obj;
for (let i = 0; i < 6; i++){
    temp.next = new ListNode(2+i);
    temp = temp.next;
}
console.log(obj);
console.log("获取中间节点：")
console.log(middleNode(obj));

obj = new ListNode(90), temp = obj;
for (let i = 0; i < 5; i++){
    temp.next = new ListNode(91+i);
    temp = temp.next;
}
console.log(obj);
console.log("获取中间节点：")
console.log(middleNode(obj));