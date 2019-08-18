/**
 * 二叉搜索树: 存储有序列表，对数据的插入、查找、删除特别快
 * 对外暴露的方法有插入
 */
const BinarySearchTree = function(){
    var root = null; //二叉树根节点
    var size = 0;    //节点个数

    function Node(element, left, right){
        this.element = element;
        this.left = left;
        this.right = right;
    }


    //插入元素
    function insertBST(element){
        var node = new Node(element, null, null);

        //根节点判断
        if (root == null){
            root = node;
        }
        else{ //非根节点
            var current = root;
            while(true){
                if (element < current.element){ //往左节点方向放
                    if (current.left == null){
                        current.left = node;
                        break;
                    }
                    current = current.left;
                }
                else if (element > current.element){ //往右节点方向放
                    if (current.right == null){
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
                else { //相等，替换
                    current.element = element;
                    return;
                }
            }
        }
        size++;
    }


    //二叉树中序遍历：以升序方式访问二叉树中所有节点
    function inOrder(){
        return inOrderByNode(root);
    }
    function inOrderByNode(node){
        if (node){
            var str = "";
            str += inOrderByNode(node.left);
            str += node.element + ", ";
            str += inOrderByNode(node.right);
            return str;
        }
        return "";
    }


    //前序遍历：先访问根节点，再访问左子树和右子树
    function preOrder(){
        return preOrderByNode(root);
    }
    function preOrderByNode(node){
        if (node){
            var str = '';
            str += node.element + ", "; //先访问根节点
            str += preOrderByNode(node.left); //再访问左子树
            str += preOrderByNode(node.right); //再访问右子树
            return str;
        }
        return "";
    }


    //后序遍历：先访问叶子节点，再左子树，再右子树，再到根节点
    function postOrder(){
        return postOrderByNode(root);
    }
    function postOrderByNode(node){
        if (node){
            var str = "";
            str += postOrderByNode(node.left);
            str += postOrderByNode(node.right);
            str += node.element + ", ";
            return str;
        }
        return "";
    }


    //查找最小值：因为较小的值都在左边，所以最小值一定是左子树的最后一个节点
    function getMin(){
        var minNode = getMinNode(root);
        if (minNode) {
            return minNode.element;
        }
        return null;
    }
    //查找最小节点
    function getMinNode(node){
        var current = node;
        while(current){
            if (current.left == null){
                return current;
            }
            current = current.left;
        }
        return null;
    }

    //查找最大值：因为较大的值都在右边，所以最大值一定是在右子树的最后一个节点
    function getMax(){
        var maxNode = getMaxNode(root);
        if (maxNode){
            return maxNode.element;
        }
        return null;
    }
    //查找最大节点
    function getMaxNode(node){
        var current = node;
        while(current){
            if (current.right == null){
                return current;
            }
            current = current.right;
        }
        return null;
    }

    //查找指定值，是否存在这个元素
    function isExist(element){
        var current = root;
        while(current){
            if (element < current.element){ //左子树寻找
                current = current.left;
            }
            else if (element > current.element){ //右子树寻找
                current = current.right;
            }
            else{ //存在
                return true;
            }
        }
        return false;
    }


    //删除元素
    function remove(element){
        root = removeNode(root, element);
    }
    function removeNode(node, element){
        if (node == null) {
            return null;
        }

        if (node.element == element){
            //node没有左子树
            if (node.left == null){
                return node.right;
            }
            else if (node.right == null){ //node没有右子树
                return node.left;
            }
            /**
             * node有左子树和右子树，这个时候要找出最接近node节点值的节点
             * 1、如果找出比node节点的element稍大的节点，则从node右节点的最小节点
             * 2、如果找出比node节点的element稍小的节点，则从node左节点的最大节点
             */
            //第一种方式,找出比node的element稍微大点的节点
            var minNode = getMinNode(node.right);
            node.element = minNode.element;
            node.right = removeNode(node.right, minNode.element);

            // //第二种方式, 找出比node的element稍微小点的节点
            // var maxNode = getMaxNode(node.left);
            // node.element = maxNode.element;
            // node.left = removeNode(node.left, maxNode.element);

            return node;
        }
        else if(element < node.element){ //往左子树方向继续找
            node.left = removeNode(node.left, element);
            return node;
        }
        else{
            //往右子树方向继续找
            node.right = removeNode(node.right, element);
            return node;
        }
    }


    this.insertBST = insertBST;  //插入元素
    this.inOrder = inOrder;      //中序遍历
    this.preOrder = preOrder;    //前序遍历
    this.postOrder = postOrder;  //后序遍历
    this.getMin = getMin;        //获取最小元素
    this.getMax = getMax;        //获取最大值
    this.isExist = isExist;      //是否存在某个元素
    this.remove = remove;       //删除某个元素
}



//测试
var bst = new BinarySearchTree();
bst.insertBST(23);
bst.insertBST(45);
bst.insertBST(16);
bst.insertBST(37);
bst.insertBST(3);
bst.insertBST(99);
bst.insertBST(22);

console.log("\n.......start test......")
console.log("中序遍历：", bst.inOrder());
console.log("前序遍历：", bst.preOrder());
console.log("后序遍历：", bst.postOrder());

console.log("最小值：", bst.getMin())
console.log("最大值：", bst.getMax());
console.log("是否存在100：", bst.isExist(100));
console.log("是否存在99：", bst.isExist(99));

//删除元素
bst.remove(37);
console.log("删除37后中序遍历为：", bst.inOrder());
console.log("删除37后前序遍历为：", bst.preOrder());
console.log("删除37后后序遍历为：", bst.postOrder());