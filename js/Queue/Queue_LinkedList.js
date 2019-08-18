/**
 * 队列，特点：从队尾添加元素，从队头移除元素，就像排队一样，先入先出，FIFO(Fast In Fast Out)
 * 内部可以用数组实现，也可以用链表实现，用栈实现
 * 对外暴露方法有：
 * enQueue(element) 入队，从队尾添加元素
 * deQueue()        出队，从队头移除元素
 * front()          获取队头元素
 * length()         获取队列长度
 * clear()          清空队列
 */
//这里内部用链表实现
const Queue_LinkedList = function(){
    let head = null; //链表中第一个LinkNode
    let last = null;  //链表中最后一个LinkNode
    let size = 0;   //记录链表元素个数

    //Node模型
    function LinkNode(prev, element, next){
        this.prev = prev; //当前节点的上一个node
        this.element = element;  //当前节点的元素
        this.next = next; //当前节点的下一个node
    }

    //根据索引，获取目标对象
    function node(index){
        //判断index是靠近前半部分，还是后半部分，以求最少次数找到目标节点
        if (index <= size>>1){
            //说明从头往后找，次数少一点
            let obj = head;
            for (let i = 0;i < index; i++){
                obj = obj.next;
            }
            return obj;
        }
        else{
            //说明从后往前找，次数少一点
            let obj = last;
            for (let i = size-1; i > index; i--){
                obj = obj.prev;
            }
            return obj;
        }
    }

    //入队方法
    function enQueue(element){
        if (size == 0){
            head = new LinkNode(null, element, null);
            last = head;
        }
        else{
            let obj = node(size-1);
            obj.next = new LinkNode(obj, element, null);
            last = obj.next;
        }
        size++;
    }
    //出队方法
    function deQueue(){
        if (size < 1) return null;

        let ele = head.element;
        if (size == 1){
            head = last = null;
        }
        else{
            head = head.next;
            head.prev = last;
        }
        size--;
        return ele;
    }
    //获取对头元素
    function front(){
        return size>0 ? head.element : null;
    }
    //移除栈所有元素
    function clear(){
        head = last = null;
        size = 0;
    }
    //获取栈长度
    function length(){
        return size;
    }

    this.enQueue = enQueue;
    this.deQueue = deQueue;
    this.front = front;
    this.length = length;
    this.clear = clear;
}

//测试
var queue = new Queue_LinkedList();
queue.enQueue(99); queue.enQueue("abc");
queue.enQueue(true);
console.log(console.log(queue));
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log(queue);
