/**
 * 使用队列实现栈的下列操作：

 push(x) -- 元素 x 入栈
 pop() -- 移除栈顶元素
 top() -- 获取栈顶元素
 empty() -- 返回栈是否为空
 注意:

 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 */

/**
 * Initialize your data structure here.
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了87.56%的用户
 * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了41.86%的用户
 */
var MyStack = function() {
    this.queue = new MyQueue();
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.enQueueRear(x);  //入栈
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.deQueueRear();  //出栈
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.rear();   //获取栈顶元素
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.empty();
};

//自定义双端队列
var MyQueue = function(){
    let arr = [];

    //从队尾入队方法
    function enQueueRear(element){
        arr.push(element);
    }
    //从对头入队方法
    function enQueueFront(element){
        arr.unshift(element);
    }

    //从队头出队方法
    function deQueueFront(){
        return arr.shift()
    }
    //从队尾出队方法
    function deQueueRear(){
        return arr.pop();
    }

    //获取队头元素
    function front(){
        return arr.length > 0 ? arr[0] : null;
    }
    //获取队尾元素
    function rear(){
        return arr.length > 0 ? arr[arr.length-1]: null;
    }

    //队列是否为空
    function empty(){
        return arr.length == 0;
    }

    this.enQueueFront = enQueueFront;  //从队列头部入队
    this.enQueueRear = enQueueRear;   //从队列尾部入队
    this.deQueueFront = deQueueFront; //从队列头部出队
    this.deQueueRear = deQueueRear;  //从队列尾部出队
    this.front = front;   //获取队列头部
    this.rear = rear;     //获取队列尾部
    this.empty = empty;
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */