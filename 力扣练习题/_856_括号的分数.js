/**
 * 给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：
 () 得 1 分。
 AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
 (A) 得 2 * A 分，其中 A 是平衡括号字符串。
  
 示例 1："()"
 输出： 1

 示例 2：
 输入： "(())"
 输出： 2

 示例 3：
 输入： "()()"
 输出： 2

 示例 4：
 输入： "(()(()))"
 输出： 6 


 提示：
 S 是平衡括号字符串，且只含有 ( 和 ) 。
 2 <= S.length <= 50

 */

/**
 * @param {string} S
 * @return {number}
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了62.96%的用户
 * 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */
var scoreOfParentheses = function(S) {
    let arr = [], temp = null;
    for (let i = 0; i < S.length; i++){
        temp = S[i];

        if (temp == '('){
            arr.push(temp);
        }
        else{
            if (arr.length < 1) return 0;

            //调整栈，找到数组里面配套的左括号，如果目标左括号在栈顶，调整"("为1；
            // 如果目标左括号不在栈顶，则从栈顶到目标左括号累加，每累加一次，出栈一次；
            // 一直到目标左括号成为栈顶，这事根据规则(A)=2*A，则目标左括号位置的值为2*累加分
            // 比如：()()((()(()())())()())
            //      [1,1,(,(,1,4,1
            findTarget(arr);
        }
    }
    return findTarget(arr);
};

//寻找匹配左括号， 倒序找到第一个匹配的"("，然后调整目标位置的值
function findTarget(arr){
    let score = 0;
    for (let i = arr.length-1; i >= 0; i--){
        if (arr[i] == '('){
            arr[i] = score > 0 ? 2*score : 1;
            return 0;
        }
        else{
            score += arr.pop();
        }
    }
    return score;
}



/**
 * 换种思路解法，假定传入的参数符合标准
 *执行用时 :68 ms, 在所有 JavaScript 提交中击败了96.30%的用户
 *内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了16.67%的用户
 */
var scoreOfParentheses2 = function(S){
    let n = 0; //用来做标记倍数, 连续的左括号，多一个翻2倍
    let score = 0; //累积得分

    for (let i = 0; i < S.length; i++){

        if (S[i] == '('){
            if (n == 0){
                n = 1;
            }
            else{
                n = n << 1; //左移一位，2倍
            }
        }
        else if (S[i] == ')'){
            //()()(()(()())())
            //1,1,(1,(1,1),1)
            if (S[i-1] == '('){
                score += n; //乘法分配律：a * (b+c) = a*b + a*c
            }
            n = n >> 1; //右移一位
        }
    }
    return score;
}