/**  前序遍历规则：先根节点，再左子节点，再右子节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 第一种方式：递归
 * @param {TreeNode} root
 * @return {number[]}
 执行用时 :72 ms, 在所有 JavaScript 提交中击败了86.38%的用户
 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了17.62%的用户
 */
var preorderTraversal = function(root) {
    var arr = [];
    recusion(root, arr);
    return arr;

    function recusion(root){
        if (!root) return;
        //前序遍历，先根节点，再左节点，再右节点
        arr.push(root.val);
        recusion(root.left, arr);
        recusion(root.right, arr);
    }
};

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }


/**
 * 第二种方式：迭代
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败70.96%的用户
 * 内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了60.62%的用户
 */
var preorderForeach = function(root) {
    var res = [];
    if (!root) return res;
    var arr = [root];
    while(arr.length){
        //借助于栈的特性：后进先出
        var current = arr.pop();
        res.push(current.val);

        //先将右节点压入栈底，因为右节点后取值
        if (current.right){
            arr.push(current.right);
        }
        //左节点先取值，压入栈顶
        if (current.left){
            arr.push(current.left);
        }
    }
    return res;
};