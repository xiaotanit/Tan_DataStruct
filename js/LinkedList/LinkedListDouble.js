/**
 * 自定义双向链表：对外公开的方法有
 * append(element) 在链表最后追加节点
 * insert(index, element) 根据索引index, 在索引位置插入节点
 * remove(element)  删除节点
 * removeAt(index)  删除指定索引节点
 * removeAll(element) 删除所有匹配的节点
 * set(index, element) 根据索引，修改对应索引的节点值
 * get(index)  根据索引获取节点信息
 * indexOf(element) 获取某个节点的索引位置
 * clear()  清空所有节点
 * length()   返回节点长度
 * print() 打印所有节点信息
 * toString() 打印所有节点信息，同print
 * */
const LinkedListDouble = function(){
    let head = null; //链表中第一个LinkNode
    let last = null;  //链表中最后一个LinkNode
    let size = 0;   //记录链表元素个数

    //Node模型
    function LinkNode(prev, element, next){
        this.prev = prev; //当前节点的上一个node
        this.element = element;  //当前节点的元素
        this.next = next; //当前节点的下一个node
    }

    //元素越界检查, 越界抛出异常
    function outOfBounds(index){
        if (index < 0 || index >= size){
            throw("抱歉，目标位置不存在！");
        }
    }

    //根据索引，获取目标对象
    function node(index){
        outOfBounds(index);

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

    //新增一个元素
    function append(element){
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

    //插入一个元素
    function insert(index, element){
        if (index == 0){
            head = new LinkNode(null, element, head);

            if (size == 0){
                last = head;
            }
        }
        else{
            let obj = node(index-1);
            obj.next = new LinkNode(obj, element, obj.next);

            if (index == size){
                last = obj.next;
            }
        }
        size++;
    }

    //修改元素
    function set(index, element){
        let obj = node(index);
        obj.element = element;
    }

    //移除节点(内部使用，不对外暴露)
    function removeNode(node){
        let prev = node.prev, next = node.next; //当前节点的前一个，和后一个

        //判断head临界点
        if (prev == head){
            head = next;
        }
        else{
            prev.next = next;
        }

        //判断last临界点
        if (next == last){
            last = prev;
        }
        else{
            next.prev = prev;
        }
        size--;
        return node.element;
    }

    //根据值移除节点元素
    function remove(element){
        let temp = head;
        while(temp){
            if (temp.element == element){
                return removeNode(temp);
            }
            else{
                temp = temp.next;
            }
        }
        return null;
    }

    //根据索引移除节点
    function removeAt(index){
        return removeNode(node(index));
    }

    //移除链表里面的所有匹配值element的元素
    function removeAll(element){
        let newFirst = new LinkNode(null, 0, head), ele = null;
        let virHead = newFirst;

        while(virHead.next){
            if (virHead.next.element == element){

                ele = element;

                if (virHead.next.next){
                    virHead.next.next.prev = virHead.next.prev;
                }
                else{ //删除了最后一个节点
                    last = virHead.next.prev;
                }
                virHead.next = virHead.next.next;
                size--;
            }
            else{
                virHead = virHead.next;
            }
        }

        //重新赋值
        head = newFirst.next;

        return ele;
    }

    //获取某个元素
    function get(index){
        return node(index).element;
    }

    //获取元素索引
    function indexOf(element){
        let obj = head, index = -1;

        for (let i = 0; i < size; i++){
            if (obj.element == element){
                index = i;
                break;
            }
            obj = obj.next;
        }
        return index;
    }

    //清除所有元素
    function clear(){
        head = null;
        last = null;
        size = 0;
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

    //对外公开方法
    this.append = append;
    this.insert = insert;
    this.remove = remove;
    this.removeAt = removeAt;
    this.removeAll = removeAll;
    this.set = set;
    this.get = get;
    this.indexOf = indexOf;
    this.length = function(){
        return size;
    }
    this.clear = clear;
    this.print = print;
    this.toString = toString;
}


////测试
// let obj = new LinkedListDouble();
// let obj1 = { title: "全明星比赛", stores: [{name: "张飞vs岳飞", store: "2:3"}, { name: "关羽vs秦琼", store: "5:5"}]};
// obj.append(99);
// obj.append("hello")
// obj.append(true)
// obj.insert(3, obj1);
// obj.insert(0, [12, false, "Good", 81]);
// obj.print();
// console.log("obj1.index: ", obj.indexOf(obj1));
// obj.remove(0);
// obj.removeAll(obj1);
// obj.print();

////测试2
console.log("\n\n......test2.....")
var obj2 = new LinkedListDouble();
obj2.append(8); obj2.insert(1, 99); obj2.append('abc'); obj2.append(8); obj2.append(false);
obj2.append(12); obj2.append(8); obj2.append('123'); obj2.append(8);
obj2.print();
obj2.removeAll(8); //删除所有8
obj2.print();

