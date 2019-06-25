/**
 * 在循环双向链表的基础上，增加1个属性，3个方法（属性内部使用，方法对外开放）,让循环链表发挥更大的效果：
 * current: 指向当前节点，默认指向首节点head
 * next():让current每次移动一次，移上下一个节点, 返回元素
 * removeCurrent(): 每次删除当前current指向的节点，删除后，current指向下一个节点
 * reset(): 重置current指向首节点head
 *
 * 自定义双向循环链表：对外公开的方法有
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
const CircleLinkedListDouble = function(){
    let head = null; //链表中第一个LinkNode
    let last = null;  //链表中最后一个LinkNode
    let size = 0;   //记录链表元素个数
    let current = null; //当前指向的节点

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
            head.next = head;
            head.prev = head;
            last = head;
            current = head;
        }
        else{
            let obj = node(size-1);
            obj.next = new LinkNode(obj, element, head);
            last = obj.next;
            head.prev = last;
        }
        size++;
    }

    //插入一个元素
    function insert(index, element){
        //表示插入到第一个
        if (index == 0){

            let last = null;
            if (size > 0) last = node(size-1);

            head = new LinkNode(last, element, head);

            if (size < 1){
                head.next = head;
                head.prev = head;
                last = head;
                current = head;
            }
            else{
                last.prev = head;
            }
        }
        else{
            let prev = node(index-1);
            prev.next = new LinkNode(prev, element, prev.next);

            //表示插入到最后一个
            if (index == size){
                last = prev.next;
                head.prev = last;
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

        if (size == 1){
            current = head = last = null;
        }
        else{
            let prev = node.prev, next = node.next; //当前节点的前一个，和后一个

            //判断head临界点
            if (prev == last){
                head = next;
                head.prev = last;
                last.next = head;
            }
            else{
                prev.next = next;
            }

            //判断last临界点
            if (next == head){
                last = prev;
                last.next = head;
                head.prev = last;
            }
            else{
                next.prev = prev;
            }

            if (current == node){
                current = next;
            }
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
        let newFirst = new LinkNode(null, 0, head), delNode = null;
        let virHead = newFirst;

        //为了避免无限循环，先把循环链表断开
        head.prev = null, last.next = null;

        while(virHead.next){
            if (virHead.next.element == element){

                delNode = virHead.next;

                if (virHead.next.next){
                    virHead.next.next.prev = virHead.next.prev;
                }
                else{
                    last = virHead.next.prev;
                }

                if (virHead.next == current){
                    current = current.next;
                    virHead.next = current;
                }
                else{
                    virHead.next = virHead.next.next;
                }

                size--;
            }
            else{
                virHead = virHead.next;
            }
        }

        //重新赋值
        head = newFirst.next;
        last = size > 0 ? node(size-1) : null;
        if (size > 0){
            last.next = head;
            head.prev = last;
        }
        else{
            current = head = last = null;
        }

        return delNode.element;
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
        current = head = last = null;
        size = 0;
    }

    //这次新增加的三个方法next, removeCurrent, reset
    //调用重置current指向head节点
    function reset(){
        current = head;
    }
    function next(){
        if (!current) return null;

        current = current.next;
        return current.element;
    }

    //每调用一次，删除current指向的节点
    function removeCurrent(){
        if (size < 1) return null;
        return removeNode(current);
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

    //新增加的方法
    this.next = next;
    this.removeCurrent = removeCurrent;
    this.reset = reset;
}


////测试
// let obj = new CircleLinkedListDouble();
// let obj1 = { title: "全明星比赛", stores: [{name: "张飞vs岳飞", store: "2:3"}, { name: "关羽vs秦琼", store: "5:5"}]};
//
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
// console.log("\n\n......test2.....")
// var obj2 = new CircleLinkedListDouble();
// obj2.append(8); obj2.append(99); obj2.append('abc'); obj2.append(8); obj2.append(false);
// obj2.append(12); obj2.append(8); obj2.append('123'); obj2.append(8);
// obj2.print();
// obj2.removeAll(8); //删除所有8
// obj2.print();


/**
 * 测试3，来做一个有意思的题目：约瑟夫题目
 据说著名犹太历史学家 Josephus有过以下的故事：在罗马人占领乔塔帕特后，39 个犹太人与Josephus及他的朋友躲到一个洞中，
 39个犹太人决定宁愿死也不要被敌人抓到，于是决定了一个自杀方式，41个人排成一个圆圈，
 由第1个人开始报数，每报数到第3人该人就必须自杀，然后再由下一个重新报数，直到所有人都自杀身亡为止。
 然而Josephus 和他的朋友并不想遵从。
 首先从一个人开始，越过k-2个人（因为第一个人已经被越过），并杀掉第k个人。
 接着，再越过k-1个人，并杀掉第k个人。这个过程沿着圆圈一直进行，直到最终只剩下一个人留下，这个人就可以继续活着。
 问题是，给定了和，一开始要站在什么地方才能避免被处决？
 Josephus要他的朋友先假装遵从，他将朋友与自己安排在第16个与第31个位置，于是逃过了这场死亡游戏。

 用循环链表来模拟这个游戏
 */
console.log("\n\n........test3约瑟夫题目。。。....");
var obj3 = new CircleLinkedListDouble();
for (let i = 0; i < 41; i++){
    obj3.append(i+1);
}
obj3.print();
console.log("*************约瑟夫游戏开始**********")
for (let i = 0; i < 39; i++){
    obj3.next(); obj3.next(); //移动两次
    obj3.removeCurrent(); //删除当前节点
    console.log("第", (i+1), "次，剩余的为：", obj3.toString())
}
console.log("***************game over***************")
console.log("最后生存下来的是：", obj3.toString());
