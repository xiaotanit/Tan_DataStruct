/**
 * 自定义循环链表，在链表的基础上增加逻辑：最后一个节点指向首节点；如果只有一个节点，则自己指向自己
 * 对外公开的方法有
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
const CircleLinkedList = function(){
    let head = null;
    let size = 0;   //记录链表元素个数

    //Node模型
    function LinkNode(element, next){
        this.element = element;
        this.next = next;
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

        let obj = head;
        for (let i = 0; i < index; i++){
            obj = obj.next;
        }
        return obj;
    }

    //新增一个元素
    function append(element){
        if (size == 0){
            head = new LinkNode(element, null);
            head.next = head; //自己指向自己
        }
        else{
            let obj = node(size-1);
            obj.next = new LinkNode(element, head);
        }
        size++;
    }

    //插入一个元素
    function insert(index, element){
        if (index == 0){
            let last = size > 0 ? node(size-1) : null;
            head = new LinkNode(element, head);

            //最后那个元素的next指向新的head
            if (last){
                last.next = head;
            }
            else{
                head.next = head;
            }
        }
        else{
            let prev = node(index-1);
            prev.next = new LinkNode(element, prev.next);
        }
        size++;
    }

    //修改元素
    function set(index, element){
        let obj = node(index);
        obj.element = element;
    }

    //移除节点
    function remove(element){
        if (size < 1) return null;

        let temp = head;
        while(temp){
            if (temp.element == element){
                if (size == 1){
                    head = null;
                }
                else{
                    if (temp == head){
                        head = head.next;
                        node(size-1).next = head; //最后的节点指向头结点
                    }
                    else{
                        temp.next = temp.next.next;
                    }
                }
                size--;
                return element;
            }
            else{
                temp = temp.next;
            }
        }
        return null;
    }

    //根据索引移除节点
    function removeAt(index){
        outOfBounds(index);
        let element = null;

        if (size == 1){
            element = head.element;
            head = null;
        }
        else{
            if (index == 0){
                element = head.element;
                head = head.next;
                node(size-1).next = head;
            }
            else{
                let prev = node(index-1);
                element = prev.next.element;
                prev.next = prev.next.next;
            }
        }

        size--;
        return element;
    }

    //移除链表里面的所有匹配值element的元素
    function removeAll(element){

        if (size < 1) return null;

        let virHead = new LinkNode(0, head), temp = virHead, delVal = null;

        //遍历之前，先设置最后一个元素的next为null
        node(size-1).next = null;

        while(temp.next){
            if (temp.next.element == element){
                temp.next = temp.next.next;
                size--;
                delVal = element;
            }
            else{
                temp = temp.next;
            }
        }

        head = virHead.next;

        if (size > 0){
            node(size-1).next = head;
        }

        return delVal;
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
// let obj = new CircleLinkedList();
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
var obj2 = new CircleLinkedList();
obj2.append(8); obj2.insert(1, 99); obj2.append('abc'); obj2.append(8); obj2.append(false);
obj2.append(12); obj2.append(8); obj2.append('123'); obj2.append(8);
obj2.print();
obj2.removeAll(8); //删除所有8
obj2.print();

