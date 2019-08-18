/**
 * 队列，特点：从队尾添加元素，从队头移除元素，就像排队一样，先入先出，FIFO(Fast In Fast Out)
 * 内部可以用数组实现，也可以用链表实现，用栈实现
 * 对外暴露方法有：
 * enQueue(element) 入队，从队尾添加元素
 * deQueue()        出队，从队头移除元素
 * front()          获取对头元素
 * length()         获取队列长度
 * clear()          清空队列
 */
//这里内部先用数组实现
const Queue = function(){
    let arr = [];
    //入队
    function enQueue(element){
        arr.push(element);
    }
    //出队， 从队头移除元素
    function deQueue(){
        return arr.shift();
    }
    //获取队头元素
    function front(){
        return arr.length ? arr[0] : null;
    }
    //清空队列
    function clear(){
        return arr = [];
    }
    function length(){
        return arr.length;
    }

    this.enQueue = enQueue;
    this.deQueue = deQueue;
    this.front = front;
    this.length = length;
    this.clear = clear;
}