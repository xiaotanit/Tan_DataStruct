/**
 * 双端队列，特点：可以从队尾插入数据，也能从队尾移除元素；可以从队头插入元素，也能从队头移除元素
 * 内部可以用数组实现，也可以用链表实现，用栈实现
 * 对外暴露方法有：
 * enQueueRear(element) 入队，从队尾添加元素
 * enQueueFront(element) 入队，从对头添加元素
 * deQueueFront()   出队，从队头移除元素
 * deQueueRear()    出队，从队尾移除车元素
 * front()          获取队头元素
 * rear()           获取队尾元素
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

    //从队尾入队方法
    function enQueueRear(element){
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
    //从对头入队方法
    function enQueueFront(element){
        head = new LinkNode(null, element, head);

        if (size == 0){
            last = head;
        }
        size++;
    }

    //从队头出队方法
    function deQueueFront(){
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
    //从队尾出队方法
    function deQueueRear(){
        if (size < 1) return null;

        let ele = last.element;
        if (size == 1){
            head = last = null;
        }
        else{
            last.prev.next = head;
            last = last.prev;
            head.prev = last;
        }
        size--;
        return ele;
    }

    //获取队头元素
    function front(){
        return size > 0 ? head.element : null;
    }
    //获取队尾元素
    function rear(){
        return size > 0 ? last.element : null;
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
var queue = new Queue_LinkedList();
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
