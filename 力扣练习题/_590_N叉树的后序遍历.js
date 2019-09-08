/**
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
 * 执行用时 :964 ms, 在所有 JavaScript 提交中击败了54.40%的用户
 * 内存消耗 :87.6 MB, 在所有 JavaScript 提交中击败了6.10%的用户
 */
var postorder = function(root) {
    if (!root) return [];

    var res = [];
    recusion(root);
    return res;

    function recusion(root){
        if (!root) return;

        for (var i = 0; i < root.children.length; i++){
            recusion(root.children[i]);
        }
        res.push(root.val)
    }
};


/**
 * 第二种方式：迭代
 * @param root
 * @returns {Array}
 * 执行用时 :904 ms, 在所有 JavaScript 提交中击败了93.41%的用户
 * 内存消耗 :87.4 MB, 在所有 JavaScript 提交中击败了6.10%的用户
 */
var postorder2 = function(root) {
    if (!root) return [];

    var res = [], arr = [root];
    while(arr.length){
        var current = arr.pop();
        for(var i = 0; i < current.children.length; i++){
            arr.push(current.children[i]);
        }
        res.unshift(current.val);
    }
    return res;
};