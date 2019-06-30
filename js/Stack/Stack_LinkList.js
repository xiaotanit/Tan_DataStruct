/**
 * 数据结构栈：先进后出，后进先出，即LIFO，栈的内部实现可以用数组，也可以用链表；
 * 这里用链表实现，对外暴露的方法有：
 * push(element): 放入一个元素，即入栈
 * pop()        : 移除栈顶元素，即出栈
 * top()        : 获取栈顶元素
 * clear()      : 清楚所有栈元素
 * length()     : 获取栈长度
 */
const Stack = function(){
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

    //入栈方法
    function push(element){
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
    //出栈方法
    function pop(){
        if (size < 1) return null;

        let ele = last.element;
        if (size == 1){
            head = last = null;
        }
        else{
            last = last.prev;
            last.next = null;
        }
        size--;
    }
    //获取栈顶元素
    function top(){
        return last;
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

    //属性转字符串
    function getObjString(obj){

        let str = "";

        if (obj instanceof Array){
            str += "[";
            for (let i = 0; i < obj.length; i++){
                str += getObjString(obj[i]);
            }
            str = str.substring(0, str.length - 2);
            str += "], "
        }
        else if (obj instanceof Object){
            str += "{";
            for (var key in obj){
                let item = obj[key];
                str += "\"" + key + "\": " + getObjString(item);
            }
            str = str.substring(0, str.length-2);
            str += "}, "
        }
        else if (typeof obj == "string"){
            str += "\"" + obj + "\"" + ", ";
        }
        else{
            str += obj + ", ";
        }

        return str;
    }
    function toString(){
        let str = "", obj = head;
        for (let i = 0; i < size; i++){
            str += getObjString(obj.element);
            obj = obj.next;
        }
        if (str.length > 0) str = str.substring(0, str.length -2);
        return str;
    }
    //打印所有元素
    function print(){
        console.log(this.toString())
    }

    this.push = push;
    this.pop = pop;
    this.top = top;
    this.clear = clear;
    this.length = length;
    this.toString = toString;
    this.print = print;
}


//测试
console.log("\n\n.........stack test start......")
var obj = new Stack();
obj.push(99); obj.push(22); obj.push(true); obj.push("abc");
obj.print();
console.log("栈长度：", obj.length(), ", 栈顶：", obj.top())
console.log(">>>>> 出栈 >>>>>")
obj.pop();
obj.print();
obj.pop();
obj.print();
obj.clear();
obj.print();
