/** N叉树的前序遍历
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 * 第一种方式：递归
 * 执行用时 :968 ms, 在所有 JavaScript 提交中击败了62.09%的用户
 * 内存消耗 :81.5 MB, 在所有 JavaScript 提交中击败了29.48%的用户
 */
var preorder = function(root) {
    if (!root) return [];

    var res = [];
    recusion(root);
    return res;

    function recusion(root){
        if (!root) return;

        res.push(root.val);
        for (var i = 0; i < root.children.length; i++){
            recusion(root.children[i]);
        }
    }
};


/**
 * 第二种方式：迭代
 * @param root
 * @returns {Array}
 * 执行用时 :948 ms, 在所有 JavaScript 提交中击败了73.46%的用户
 * 内存消耗 :87.4 MB, 在所有 JavaScript 提交中击败了6.32%的用户
 */
var preorder2 = function(root) {
    if (!root) return [];

    var res = [], arr = [root];
    while(arr.length){
        var current = arr.pop();
        res.push(current.val);

        for(var i = current.children.length - 1; i >= 0; i--){
            arr.push(current.children[i]);
        }
    }
    return res;
};