/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 第一种方式：递归
 */
var buildTree = function(preorder, inorder) {

    function recusion(preArr, )
};

/*
public TreeNode buildTree(int[] preorder, int[] inorder) {
    int preLen = preorder.length;
    int inLen = inorder.length;
    return helper(preorder, 0, preLen - 1, inorder, 0, inLen - 1);
}


private TreeNode helper(int[] preorder,
    int preL, int preR,
    int[] inorder,
    int inL, int inR) {

    if (preL > preR || inL > inR) {
        return null;
    }
    int rootVal = preorder[preL];
    int l = inL;
    while (l <= inR && inorder[l] != rootVal) {
        l++;
    }
    TreeNode root = new TreeNode(rootVal);
    root.left = helper(preorder, preL + 1, preL + l - inL, inorder, inL, l - 1);
    root.right = helper(preorder, preL + l - inL + 1, preR, inorder, l + 1, inR);
    return root;
}
*/