/**  二叉树的最大深度
 * 给定一个二叉树，找出其最大深度。
 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 说明: 叶子节点是指没有子节点的节点。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 第一种方式：递归
 * 执行用时 :96 ms, 在所有 JavaScript 提交中击败了51.18%的用户
 * 内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了40.00%的用户
 */
var maxDepth = function(root) {
    if (!root) return 0;

    var maxLevel = 1;
    recusion(root, 1);
    return maxLevel;

    function recusion(root, level){

        if (level > maxLevel) {
            maxLevel = level;
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
 * 第二种：迭代
 * @param root
 * @returns {number}
 执行用时 :88 ms, 在所有 JavaScript 提交中击败了81.91%的用户
 内存消耗 :36.8 MB, 在所有 JavaScript 提交中击败了93.61%的用户
 */
var maxDepth2 = function(root) {
    if (!root) return 0;

    var level = 0, queue = [root];
    while(queue.length){
        var tempQueue = [];
        //内循环，每次把整个层级节点遍历完， tempQueue存储每个层级的所有节点
        while(queue.length){
            var current = queue.shift();

            if (current.left){
                tempQueue.push(current.left);
            }
            if (current.right){
                tempQueue.push(current.right)
            }
        }
        level++;
        queue = tempQueue;
    }
    return level;
};


// function TreeNode(val){
//     this.val = val;
//     this.left = this.right = null;
// }
//
// var node = new TreeNode(3);
// node.left = new TreeNode(9);
// node.right = new TreeNode(20);
// node.right.left = new TreeNode(15);
// node.right.right = new TreeNode(7);
// console.log(maxDepth(node))