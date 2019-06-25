/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 示例 1:
 输入: 1->1->2
 输出: 1->2

 示例 2:
 输入: 1->1->2->3->3
 输出: 1->2->3

 力扣得分：
 执行用时 :108 ms, 在所有 JavaScript 提交中击败77.12%的用户
 内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了5.03%的用户
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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    let virHead = new ListNode(0); //增加一个虚拟节点
    virHead.next = head;
    let temp = virHead, obj = {};

    while(temp.next){
        if (obj[temp.next.val]){ //表示为重复节点，删除这个节点
            temp.next = temp.next.next;
        }
        else{ //
            obj[temp.next.val] = 1;
            temp = temp.next;
        }
    }
    return virHead.next;
}

//测试
var obj = new ListNode(1);
obj.next = new ListNode(2);
obj.next.next = new ListNode(1);
obj.next.next.next = new ListNode(3);
obj.next.next.next.next = new ListNode(1);
obj.next.next.next.next.next = new ListNode(2);
obj.next.next.next.next.next.next = new ListNode(3);
console.log(obj);
console.log(".>>>>>>删除重复节点：")
console.log(deleteDuplicates(obj));