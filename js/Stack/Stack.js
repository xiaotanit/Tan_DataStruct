/**
 * 数据结构栈：先进后出，后进先出，即LIFO，栈的内部实现可以用数组，也可以用链表；
 * 这里先用数组实现，对外暴露的方法有：
 * push(element): 放入一个元素，即入栈
 * pop()       :  移除栈顶元素，即出栈
 * top()       : 获取栈顶元素
 * clear()     : 移除所有栈元素
 * length()    : 获取栈长度
 */
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
        let str = "", obj = arr;
        for (let i = 0; i < arr.length; i++){
            str += getObjString(obj[i]);
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
// var obj = new Stack();
// obj.push(99); obj.push(22); obj.push(true); obj.push("abc");
// obj.print();
// console.log("栈长度：", obj.length(), ", 栈顶：", obj.top())
// console.log(">>>>> 出栈 >>>>>")
// obj.pop();
// obj.print();
// obj.pop();
// obj.print();
// obj.clear();
// obj.print();


//测试2， 用栈实现将十进制转成二进制或者八进制
/**
 * 十进制转成二进制或八进制
 * @param num 十进制数字
 * @param base =2表示转成二进制，=8表示转成八进制
 */
function numChange(num, base){
    var stack = new Stack();
    do {
        stack.push(num%base);
        num = Math.floor(num/base);
    }while(num > 0)

    let str = '';
    while(stack.length()>0){
        str += stack.pop();
    }
    return str;
}

console.log(numChange(8, 2));
console.log(numChange(9, 2));
console.log(numChange(10, 2));
console.log(numChange(8, 8));
console.log(numChange(17, 8));
console.log(numChange(35, 8));

//测试3，判断一个字符串是否回文
function isCircle(s){
    let stack = new Stack();
    for(let i = 0; i < s.length; i++){
        stack.push(s[i]);
    }
    let newStr = '';
    while(stack.length() > 0){
        newStr += stack.pop();
    }

    return newStr == s;
}
console.log("\n\n判断一个字符串是否回文....");
console.log(isCircle("abc"));
console.log(isCircle("abcdcba"));
console.log(isCircle("helloolleh"));