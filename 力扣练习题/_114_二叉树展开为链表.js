/**
 * 给定一个二叉树，原地将它展开为链表。
 例如，给定二叉树

         1
        / \
       2   5
      / \   \
     3   4   6
 将其展开为：

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
          6

 根据提意，在原地展开为链表，相当于把左子树设为nul, 通过前序遍历全部转成右子树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 第一种方式：递归
 * 执行用时 :92 ms, 在所有 JavaScript 提交中击败了55.97%的用户
 * 内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了10.53%的用户
 */
var flatten = function(root) {
    if (!root) return root;

    var preNode = root;
    recusion(root);
    return root;

    function recusion(node){

        var leftNode = node.left, rightNode = node.right;
        node.left = null;

        if (node != root){
            preNode.right = node;
        }
        preNode = node;

        if (leftNode){
            recusion(leftNode);
        }
        if (rightNode){
            recusion(rightNode);
        }
    }
};


/**
 * 第二种方式：迭代
 * @param root
 * @returns {*}
 * 执行用时 :88 ms, 在所有 JavaScript 提交中击败了69.40%的用户
 * 内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了52.63%的用户
 */
var flatten2 = function(root) {
    if (!root) return root;

    var arr = [root], preNode = root;
    while(arr.length){
        var node = arr.pop();

        if (node.right){
            arr.push(node.right);
        }
        if (node.left){
            arr.push(node.left);
        }

        if (node != root){
            preNode.right = node;
        }
        node.left = null;
        preNode = node;
    }
    return root;
};