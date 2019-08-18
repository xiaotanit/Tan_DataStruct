/**
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
 示例 1:
 输入: "1 + 1"
 输出: 2

 示例 2:
 输入: " 2-1 + 2 "
 输出: 3

 示例 3:
 输入: "(1+(4+5+2)-3)+(6+8)"
 输出: 23

 说明：
 你可以假设所给定的表达式都是有效的。
 请不要使用内置的库函数 eval。

 */
/**
 * @param s
 * @returns {number}
 * 执行用时 :116 ms, 在所有 JavaScript 提交中击败了84.75%的用户
 * 内存消耗 :37.9 MB, 在所有 JavaScript 提交中击败了76.47%的用户
 */
var calculate = function(s) {
    let arr = [], temp = '';

    for (let i = 0; i < s.length; i++){
        temp = s[i];

        if (temp == ' ') continue;
        else if(temp >= '0' && temp <= '9'){ //数字，碰到数字往前计算
            while(s[i+1] >= '0' && s[i+1] <= '9'){
                temp += s[i+1];
                i++;
            }
            arr.push(temp);
            getResult(arr);
        }
        else{ //其他左右括号，和+-号
            arr.push(temp);

            if (temp == ')'){ //碰到右括号往前计算
                getResult(arr);
            }
        }
    }
    return arr.length == 1 ? arr[0] : 0;
}

//从栈顶往栈底计算
function getResult(arr){
    while(true){
        if (arr.length < 2) return;

        let last = arr.pop();

        if (last == ')'){
            let last_p = parseInt(arr.pop()), last_p_p = arr.pop();

            if (last_p_p == "("){
                arr.push(last_p);
            }
            else{ //+ 或 -
                let num = parseInt(arr.pop());
                arr.push(last_p_p == "+" ? num + last_p : num - last_p);
                arr.push(")")
            }
        }
        else{ //last为数字
            let last_p = arr.pop();

            if (last_p == "("){ //停止循环
                arr.push("(");
                arr.push(last);
                return;
            }
            else{ //last_p 为 + 或 -
                last = parseInt(last);
                let num = parseInt(arr.pop())
                arr.push(last_p == "+" ? num + last : num - last);
            }
        }
    }
}

/**
 * 将字符串表达式转成后缀表达式，再用栈来实现求值
 * @param s 如: (((10+1)-(33-10+3)-(10))) + (12) - (12+3) + (((10)-10))
 * ["10", "1", "+", "33", "10", "-", 3, "+", "-", "10", -, 12, "+", "12", "3", "+", "-", "10", "10", "-", "+"]
 * ["11", "23", 3, "+", "-", "10", -, 12, "+", "12", "3", "+", "-", "10", "10", "-", "+"]
 * ["-15", "10", -, 12, "+", "12", "3", "+", "-", "10", "10", "-", "+"]
 * ["-13","12", "3", "+", "-", "10", "10", "-", "+"]
 * ["-28", "10", "10", "-", "+"]
 * ["-28"]
 */
var calculate2 = function(s){
    let arr = arr1 = arr2 = [], temp = '', num = 0, hasSign = false, signOK = true;
    for (let i = 0; i < s.length; i++){
        temp = s[i];
        if (temp == ' ') continue;
        else if (temp == '('){
            arr1.push(temp);
        }
        else if (temp == ')'){

        }
        else if(temp == '+'){

        }
        else if(temp == '-'){

        }
        else{ //数字

        }
    }
}

/**
 * 执行用时 :16 ms, 在所有 C++ 提交中击败了93.43%的用户
 * 内存消耗 :10.5 MB, 在所有 C++ 提交中击败了69.92%的用户
 */
/**
 * 按顺序计算，存储左括号前面的运算符，碰到“-”号，后面匹配的数字为相反数。相当于去括号计算
 * @param s
 * @return {number}
 * 执行用时 :112 ms, 在所有 JavaScript 提交中击败了88.14%的用户
 * 内存消耗 :36.8 MB, 在所有 JavaScript 提交中击败了94.12%的用户
 */
var calculate3 = function(s){
    let arr = [], sum = 0, num = 0, flag = 1;
    s = "+" + s; //前面加一个+号

    for (let i = 0; i < s.length; i++){

        if (s[i] == '+' || s[i] == '-'){ //+-后面可能为数字/空格/左括号
            temp = s[i];
            let need_up = false;
            while(s[i+1] < '0' || s[i+1] > '9'){
                if (s[i+1] == '('){  //将左括号前面的符号压入栈。一个左括号匹配一个+-号
                    need_up = true;
                    arr.push(temp);
                }
                i++;
            }

            //+-号后面的数字，或者+-号后面口号里面的数字
            while(s[i+1] >= '0' && s[i+1] <= '9'){
                num = num*10 + (s[i+1] - '0'); //拼接完整数字
                i++;
            }

            if (temp == '+'){
                sum += flag * num;
            }
            else{
                sum -= flag * num;
            }
            num = 0;

            if (need_up && arr[arr.length-1] == '-'){
                flag *= (-1); //如果左括号前是-号，flag需要反转
            }
        }
        else if(s[i] == ')'){
            if (arr[arr.length-1] == '-'){
                flag *= (-1); //移除-号时，flag需要反转
            }
            arr.pop(); //碰到右括号移除一个运算符
        }
    }
    return sum;
}
