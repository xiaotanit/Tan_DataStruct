/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //快慢指针，快指针每次走两步，慢指针每次走一步
    let obj1 = head, obj2 = head; //obj1快指针，obj2为慢指针

    while(obj2){
      obj2 = obj2.next;

      if (obj1){
          obj1 = obj1.next;
      }

      if (obj1){
          obj1 = obj1.next;
      }

      if (obj2 == obj1 && obj1) return true;
    }
    return false;
};

function ListNode(val){
    this.val = val;
    this.next = null;
}

//测试
console.log(">>>>>>环形链表》》测试》》")
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

let res = hasCycle(node1);
console.log("res: ", res);

