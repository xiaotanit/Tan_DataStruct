/** 层次遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 给定二叉树: [3,9,20,null,null,15,7],
    3
  / \
 9  20
   /  \
 15   7
 返回其层次遍历结果：
 [
 [3],
 [9,20],
 [15,7]
 ]

 */
/** 层次遍历，第一种方式：递归， 和前序遍历差不多
 * @param {TreeNode} root
 * @return {number[][]}
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了55.19%的用户
 * 内存消耗 :34.6 M, 在所有 JavaScript 提交中击败了53.23%的用户
 */
var levelOrder = function(root) {
    var res = [];
    if (!root) return res;
    recusion(root, 0);
    return res;

    function recusion(root, level){
        if (res[level]){
            res[level].push(root.val);
        }
        else{
            res[level] = [root.val];
        }

        if (root.left){
            recusion(root.left, level+1);
        }
        if (root.right){
            recusion(root.right, level+1);
        }
    }
};


/**
 * 第二种层序遍历：迭代
 * @param root
 * @returns {Array}
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了73.64%的用户
 * 内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了28.36%的用户
 */
var levelOrder2 = function(root) {
    var res = [];
    if (!root) return res;

    var queue = [root];
    while(queue.length){

        //内循环把这一层级的所有节点都放入tempQueue队列中，每一个外循环则是每一层级重新开始
        var arr = [], tempQueue = [];
        while(queue.length){
            var current = queue.shift();
            arr.push(current.val);

            if (current.left){
                tempQueue.push(current.left);
            }
            if (current.right){
                tempQueue.push(current.right);
            }
            console.log("tempQueue.length: ", tempQueue.length, ", queue.length: ", queue.length);
            console.log("-----------")
        }
        res.push(arr);
        queue = tempQueue;

        console.log(JSON.stringify(res))
        console.log("***************************")
    }
    return res;
};

// function TreeNode(val){
//     this.val = val;
//     this.left = this.right = null;
// }
//
// var node = new TreeNode(23);
// node.left = new TreeNode(16);
// node.right = new TreeNode(45);
// node.left.left = new TreeNode(3);
// node.left.right = new TreeNode(22);
// node.right = new TreeNode(45);
// node.right.left = new TreeNode(37);
// node.right.right = new TreeNode(99);
// console.log(levelOrder2(node));
