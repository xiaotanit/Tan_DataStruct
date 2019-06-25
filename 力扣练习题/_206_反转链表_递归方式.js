/*
 反转一个单链表。 使用递归方式实现
 示例:
 输入: 1->2->3->4->5->NULL
 输出: 5->4->3->2->1->NULL

 力扣测试得分：
 执行用时 :80 ms, 在所有 JavaScript 提交中击败了95.56%的用户
 内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了5.03%的用户
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
    return getNewNode(head).first;
}

/**
 * 递归，好绕啊：
 * 推演：加入2->3->4->5 递归：
 * @param node
 */
function getNewNode(node){

    if (!node) return {first: null, cur: null };

    var cur = new ListNode(node.val);

    ////一直递归递归，拿到原链表最后一个元素开始返回
    var res = getNewNode(node.next);

    if (res.first) {
        res.cur.next = cur; //设置

        return {
            first: res.first, //反转链表的第一个元素
            cur: cur
        }
    }

    console.log("666_node.val: ", node.val);
    /**
     * 原链表最后一个元素会执行到这里，最后一个元素作为反转链表的第一个元素返回
     */

    return {
        first: cur, //反转链表的第一个元素
        cur: cur    //每次递归返回的一个元素
    };
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