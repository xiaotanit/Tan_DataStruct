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
 * 执行用时 :180 ms, 在所有 JavaScript 提交中击败了50.85%的用户
 * 内存消耗 :54.9 MB, 在所有 JavaScript 提交中击败了5.88%的用户
 */
var calculate = function(s) {

    s = s.replace(/([\(\)\+\-])/g, " $1 ");
    let list = s.trim().split(/ +/); //转成数组
    let arr = [], temp = '';

    for (let i = 0; i < list.length; i++){
        temp = list[i];

        arr.push(temp); //入栈

        //即当temp为右括号，或者数字时，调用getResult方法计算数字，出栈
        if (!(arr.length < 1 || temp == "(" || temp == "+" || temp == "-")){
            getResult(arr);
        }
    }

    getResult(arr);

    return arr.length == 1 ? arr[0] : 0;
}

//从栈顶往栈底计算
function getResult(arr){
    while(true){
        if (arr.length < 2) break;

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
                break;
            }
            else{ //last_p 为 + 或 -
                last = parseInt(last);
                let num = parseInt(arr.pop())
                arr.push(last_p == "+" ? num + last : num - last);
            }
        }
    }
}