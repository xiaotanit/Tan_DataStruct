/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 * 第一种方式：递归
 * 执行用时 :1064 ms, 在所有 JavaScript 提交中击败了22.35%的用户
 * 内存消耗 :83 MB, 在所有 JavaScript 提交中击败了50.68%的用户
 */
var maxDepth = function(root) {
    if (!root) return 0;

    var maxLevel = 1;
    recusion(root, 1);
    return maxLevel;

    function recusion(root, level){

        if (!root) return;

        if (level > maxLevel) {
            maxLevel = level;
        }

        for (var i = 0; i < root.children.length; i++){
            recusion(root.children[i], level + 1);
        }
    }
};


/**
 * 第二种方式：迭代
 * @param root
 * @returns {number}
 执行用时 :908 ms, 在所有 JavaScript 提交中击败了81.01%的用户
 内存消耗 :81.1 MB, 在所有 JavaScript 提交中击败了54.79%的用户
 */
var maxDepth2 = function(root) {
    if (!root) return 0;

    var level = 0, queue = [root];
    while(queue.length){
        var tempQueue = [];
        //内循环，每次把整个层级节点遍历完， tempQueue存储每个层级的所有节点
        while(queue.length){
            var current = queue.pop();

            for (var i = 0; i < current.children.length; i++){
                var node = current.children[i];
                if (node){
                    tempQueue.push(node);
                }
            }
        }
        level++;
        queue = tempQueue;
    }
    return level;
};