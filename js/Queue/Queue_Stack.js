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
//这个队列里面用栈来实现，栈里面又是用数组来实现的
const Queue_Stack = function(){
    let stack = new Stack(); //内部栈
    let head = null; //对头

    //入队
    function enQueue(element){
        stack.push(element);

        if (stack.length() == 1){
            head = element;
        }
    }
    //出队， 从队头移除元素
    function deQueue(){
        let temp = new Stack();
        //stack栈
        while(stack.length() > 0){
            temp.push(stack.pop());
        }
        ele = temp.pop(); //temp栈出栈，就是要从对头移除的元素

        head = null;

        //再冲temp重新入队列
        while(temp.length() > 0){
            if (stack.length() == 0){
                head = temp.top();
            }
            stack.push(temp.pop())
        }
        return ele;
    }
    //获取队头元素
    function front(){
        return head;
    }
    //清空队列
    function clear(){
        stack.clear();
        head = null;
    }
    function length(){
        return stack.length();
    }

    this.enQueue = enQueue;
    this.deQueue = deQueue;
    this.front = front;
    this.length = length;
    this.clear = clear;
}

//栈，里面用数组实现
const Stack = function(){
    let arr = []; //内部数组

    //入栈方法
    function push(element){
        arr.push(element);
    }
    //出栈方法
    function pop(){
        return arr.pop();
    }
    //获取栈顶元素
    function top(){
        return arr.length > 0 ? arr[arr.length-1]:null;
    }
    //移除所有栈元素
    function clear(){
        arr = [];
    }
    //获取栈长度
    function length(){
        return arr.length;
    }

    this.push = push;
    this.pop = pop;
    this.top = top;
    this.clear = clear;
    this.length = length;
}


//测试
var obj = new Queue_Stack();
obj.enQueue("abc"); obj.enQueue(999); obj.enQueue(true);
console.log("队头：", obj.front(), ", 队列长度：", obj.length());
console.log(">>>出队》》》")
console.log(obj.deQueue());
console.log(obj.deQueue())
console.log("新的对头：", obj.front(), ", 队列长度：", obj.length());
console.log(obj);