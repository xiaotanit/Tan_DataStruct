/**
 * 双端队列，特点：可以从队尾插入数据，也能从队尾移除元素；可以从队头插入元素，也能从队头移除元素
 * 内部用数组来实现，时间复杂度O(1) , 双端循环队列
 * enQueueRear(element) 入队，从队尾添加元素
 * enQueueFront(element) 入队，从对头添加元素
 * deQueueFront()   出队，从队头移除元素
 * deQueueRear()    出队，从队尾移除车元素
 * front()          获取队头元素
 * rear()           获取队尾元素
 * length()         获取队列长度
 * clear()          清空队列
 */
const Queue_Circle = function(){
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
    //移除栈所有元素
    function clear(){
        arr = [];
    }
    //获取栈长度
    function length(){
        return arr.length;
    }

    this.enQueueFront = enQueueFront;
    this.enQueueRear = enQueueRear;
    this.deQueueFront = deQueueFront;
    this.deQueueRear = deQueueRear;
    this.front = front;
    this.rear = rear;
    this.length = length;
    this.clear = clear;
}

//测试
var queue = new Queue_Circle();
queue.enQueueRear(99); queue.enQueueRear("abc");
queue.enQueueFront(true);
console.log(queue);
console.log(queue.rear()); //队尾
console.log(queue.front()); //队头
console.log(queue.deQueueFront()); //从队头移除元素
console.log(queue.deQueueRear());  //从队尾移除元素
console.log(">>>>>新的队尾和对头》》》")
console.log(queue.rear()); //队尾
console.log(queue.front()); //队头
