/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 例如：
 给定二叉树 [3,9,20,null,null,15,7],
     3
   / \
  9  20
    /  \
   15  7
 返回其自底向上的层次遍历为：
 [
 [15,7],
 [9,20],
 [3]
 ]

 在102题 层次遍历的基础上修改
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 第一种方式：递归
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了55.66的用户
 * 内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了8.70%的用户
 */
var levelOrderBottom = function(root) {
    if (!root) return [];

    var res = [];
    recusion(root, 1);
    return res;

    function recusion(root, level){
        if (res.length < level){
            res.unshift([root.val]);
        }
        else{
            res[res.length - level].push(root.val);
        }
        if (root.left){
            recusion(root.left, level+1)
        }
        if (root.right){
            recusion(root.right, level + 1);
        }
    }
};


/**
 * 第二种迭代方式
 * @param root
 * @returns {Array}
 * 执行用时 :72 ms, 在所有 JavaScript 提交中击败了94.57%的用户
 * 内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了51.55%的用户
 */
var levelOrderBottom2 = function(root) {
    if (!root) return [];

    var res = [], queue = [root];
    while(queue.length){
        var tempRes = [], tempQueue = [];
        //内循环，每次遍历这一层级所有的节点
        while(queue.length){
            var current = queue.shift();
            tempRes.push(current.val);

            if (current.left){
                tempQueue.push(current.left);
            }
            if (current.right){
                tempQueue.push(current.right);
            }
        }
        res.unshift(tempRes);
        queue = tempQueue;
    }
    return res;
};