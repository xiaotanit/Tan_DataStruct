/** 中序遍历：从小到大，从做左边的左子节点，最后一个是右边的右子节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 中序遍历：按照从小到大排序，先找到最左边的子节点，也就是最小值，再依次往上走父节点，右节点
 * @param {TreeNode} root
 * @return {number[]}
 * 第一种方式：递归
 * 执行用时 :64 ms, 在所有 JavaScript 提交中击败了97.67%的用户
 * 内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败20.52%的用户
 */
var inorderTraversal = function(root) {
    const res = [];
    if (!root) return res;
    recusion(root);
    return res;

    function recusion(root){
        if (!root) return;

        recusion(root.left);
        res.push(root.val);
        recusion(root.right);
    }
};


/**
 * 第二种方式：迭代
 * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了94.67%的用户
 * 内存消耗 33.7 MB, 在所有 JavaScript 提交中击败了30.60%的用户
 */
var inorderTraversal2 = function(root) {
    const res = [];
    if (!root) return res;

    const arr = [];
    while (root || arr.length){
        while(root){
            arr.push(root);
            root = root.left;
        }
        root = arr.pop();  //最后一个左节点
        res.push(root.val);
        root = root.right;
    }
    return res;
};