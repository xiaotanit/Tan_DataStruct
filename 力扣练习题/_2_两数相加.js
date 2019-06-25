/**
 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 示例：
 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let ele = new ListNode(0), tmpEle = ele, moreNine = false, sum = 0;

    while(l1){
        sum = l1.val + l2.val + (moreNine ? 1 : 0);
        tmpEle.val = sum % 10;

        moreNine = sum > 9;  //是否大于9，大于9下一次循环计算sum需要往高位进1
        l1 = l1.next, l2 = l2.next;

        if (l1&&!l2){ //说明l1链表长度 大于 l2链表长度
            l2 = new ListNode(0);
        }
        else if(!l1 && l2){ //说明l1链表长度 小于 l2链表长度
            l1 = new ListNode(0);
        }

        if (l1 || l2){
            tmpEle.next = new ListNode(0);
            tmpEle = tmpEle.next;
        }
        else{
            //处理最后一个节点
            if (moreNine) tmpEle.next = new ListNode(1);
        }
    }

    return ele;
}

//测试
console.log(">>>>>测试。。。")
let node1 = new ListNode(6);
node1.next = new ListNode(8);
node1.next.next = new ListNode(9);

let node2 = new ListNode(5);
node2.next = new ListNode(1);
node2.next.next = new ListNode(3);
node2.next.next.next = new ListNode(9);

let res = addTwoNumbers(node1, node2);
console.log("res: ", res);
/**
 * 6 --> 8 --> 9
 * 5 --> 1 --> 3 --> 9
 * 1 --> 0 --> 3 --> 0 --> 1
 * 986 + 9315 = 10301
 */

