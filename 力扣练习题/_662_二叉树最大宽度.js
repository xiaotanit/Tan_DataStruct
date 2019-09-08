/**
 * 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。
 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

 示例 1:
 输入:
       1
    /   \
   3     2
  / \     \
 5   3     9
 输出: 4
 解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。

 示例 2:
 输入:
      1
     /
    3
  / \
 5   3
 输出: 2
 解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。

 示例 3:
 输入:
     1
    / \
   3   2
  /
 5
 输出: 2
 解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。

 示例 4:
 输入:
          1
        / \
       3   2
     /     \
    5       9
   /         \
  6           7
 输出: 8
 解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。

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
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了37.50%的用户
 */
var widthOfBinaryTree = function(root) {

    if (!root) return 0;

    //queue存储节点，numArr存储节点对应的节点编号位置
    var queue = [root], numArr = [0], maxWidth = 1;

    while (queue.length) {
        //tempQueue存储每一层级所有的节点，tempNumArr存储对应节点的编号位置
        var tempQueue = [], tempNumArr = [];
        while (queue.length) {
            var node = queue.shift(), num = numArr.shift(); //取出栈底节点和编号

            if (node.left) {
                tempQueue.push(node.left);
                tempNumArr.push(num * 2 + 1);
            }
            if (node.right) {
                tempQueue.push(node.right);
                tempNumArr.push(num * 2 + 2);
            }
        }
        var tempWidth = 0;
        //计算tempNumArr中存储的这一层的宽度, 最后一位元素存储这一层级最大宽度的编号
        if (tempNumArr.length) {
            tempWidth = tempNumArr[tempNumArr.length - 1] - tempNumArr[0] + 1;
        }
        if (tempWidth > maxWidth) {
            maxWidth = tempWidth;  //更新最大宽度
        }

        //开始下一个层级的宽度计算
        queue = tempQueue;
        numArr = tempNumArr;
    }

    return maxWidth;
};


/**
 * 第二种递归方式：
 * @param root
 * @returns {number}
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :36 MB, 在所有 JavaScript 提交中击败了75.00%的用户
 */
var widthOfBinaryTree2 = function(root) {

    if (!root) return 0;

    var res = [], maxWidth = 1;
    recusion(root, 0, 0);
    return maxWidth;

    function recusion(root, level, num){

        if (res[level]){
            res[level].push(num);
        }
        else{
            res[level] = [num];
        }

        //计算最大宽度
        var tempArr = res[level];
        var tempWidth = tempArr[tempArr.length - 1] - tempArr[0] + 1;
        if (tempWidth > maxWidth) {
            maxWidth = tempWidth;
        }

        if (root.left){
            recusion(root.left, level + 1, num * 2 + 1);
        }
        if (root.right){
            recusion(root.right, level + 1, num * 2 + 2);
        }
    }
};




// function TreeNode(val){
//     this.val = val;
//     this.left = this.right = null;
// }
//
// //[1,1,1,1,null,null,1,1,null,null,1]
// var root = new TreeNode(1);
// root.left = new TreeNode(1);
// root.right = new TreeNode(1);
// root.left.left = new TreeNode(1);
// root.left.right = new TreeNode(3);
// root.right.right = new TreeNode(9);
// console.log(widthOfBinaryTree(root));