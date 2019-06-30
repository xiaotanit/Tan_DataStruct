/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 有效字符串需满足：
 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。

 示例 1:
 输入: "()"
 输出: true

 示例 2:
 输入: "()[]{}"
 输出: true

 示例 3:
 输入: "(]"
 输出: false

 示例 4:
 输入: "([)]"
 输出: false

 示例 5:
 输入: "{[]}"
 输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    /**
     * 把变量写在循环前面，得分为：
     * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了87.98%的用户
     * 内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了41.15%的用户
     */
    // let arr = [], temp = top = null;
    // for (let i = 0; i < s.length; i++){
    //     temp = s[i];
    //
    //     //碰到左括号，入栈
    //     if (temp == '(' || temp == '[' || temp == '{'){
    //         arr.push(temp);
    //     }
    //     //碰到右括号，出栈
    //     else{
    //         top = arr.length > 0 ? arr[arr.length-1] : null;
    //
    //         if ((temp == ')' && top == '(')||
    //             (temp == ']' && top == '[')||
    //             (temp == '}' && top == '{')){
    //             arr.pop();
    //         }
    //         else{
    //             arr.push(temp);
    //         }
    //     }
    // }
    // return arr.length > 0 ? false : true;

    /**
     * 变量写在循环里面，得分为：
     执行用时 :76 ms, 在所有 JavaScript 提交中击败了93.07%的用户
     内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了31.15%的用户
     */
    // let arr = []
    //     ;
    // for (let i = 0; i < s.length; i++){
    //     let temp = s[i];
    //
    //     //碰到左括号，入栈
    //     if (temp == '(' || temp == '[' || temp == '{'){
    //         arr.push(temp);
    //     }
    //     //碰到右括号，出栈
    //     else{
    //         let top = arr.length > 0 ? arr[arr.length-1] : null;
    //
    //         if ((temp == ')' && top == '(')||
    //             (temp == ']' && top == '[')||
    //             (temp == '}' && top == '{')){
    //             arr.pop();
    //         }
    //         else{
    //             arr.push(temp);
    //         }
    //     }
    // }
    // return arr.length > 0 ? false : true;


    /**
     * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了98.63%的用户
     * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了76.56%的用户
     */
    let arr = [], temp = top = null;
    for (let i = 0; i < s.length; i++){
        temp = s[i];

        //碰到左括号，入栈
        if (temp == '(' || temp == '[' || temp == '{'){
            arr.push(temp);
        }
        //碰到右括号，出栈
        else{
            if (arr.length < 1) return false;

            top = arr[arr.length-1];

            if ((temp == ')' && top == '(')||
                (temp == ']' && top == '[')||
                (temp == '}' && top == '{')){
                arr.pop();
            }
            else{
                return false;
            }
        }
    }
    return arr.length > 0 ? false : true;
};