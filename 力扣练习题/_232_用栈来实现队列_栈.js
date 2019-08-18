/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = new Stack(); //内部栈对象
    this.head = null;        //存储队列队头元素
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {

    if (this.stack.empty()){
        this.head = x;
    }
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    //队头出队
    var temp = new Stack(); //新建一个栈, 栈逆序存储
    while(!this.stack.empty()){
        temp.push(this.stack.pop())
    }
    var ele = temp.pop(); //要移除的队头
    this.head = null;

    //移除后，重新入队
    while(!temp.empty()){
        if (this.stack.empty()){
            this.head = temp.top();
        }
        this.stack.push(temp.pop());
    }
    return ele;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.head;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.empty();
};

//自定义栈, 内部用数组实现
var Stack = function(){
    var arr = [];

    //入栈
    this.push = function(element){
        arr.push(element)
    }

    //出栈
    this.pop = function(){
        return arr.pop();
    }

    //栈顶
    this.top = function(){
        return arr.length > 0 ? arr[arr.length-1]:null;
    }

    //栈是否为空
    this.empty = function(){
        return arr.length == 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */