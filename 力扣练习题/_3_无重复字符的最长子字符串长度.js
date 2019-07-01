/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

 示例 1:

 输入: "abcabcbb"
 输出: 3
 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 示例 2:

 输入: "bbbbb"
 输出: 1
 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 示例 3:

 输入: "pwwkew"
 输出: 3
 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

/**
 * @param {string} s
 * @return {number}
 * 这个题难度很大啊，想了好久了，还没想到办法，
 * 暴力破解法，查找每个字符所在不重复字符的长度
 * 执行用时 :536 ms, 在所有 JavaScript 提交中击败了18.45%的用户
 * 内存消耗 :41.3 MB, 在所有 JavaScript 提交中击败了38.57%的用户
 */
var lengthOfLongestSubstring = function(s) {
    let temp = str = "", max = 0;

    for (let i = 0; i < s.length; i++){

        if (str.length > max){
            max = str.length;
        }

        str = ""; //每次外循环重置
        for (let j = i; j < s.length; j++){
            temp = s[j];

            if (str.indexOf(temp) >= 0){
                if (str.length > max) max = str.length;
                break;
            }
            else{
                str += temp;
            }
        }
    }
    return str.length > max ? str.length : max;
};


/**
 * @param {string} s
 * @return {number}
 * 解法二：
 * 执行用时 :540 ms, 在所有 JavaScript 提交中击败了18.30%的用户
 * 内存消耗 :42.1 MB, 在所有 JavaScript 提交中击败了18.28%的用户
 */
var lengthOfLongestSubstring2 = function(s) {
    let temp = str = "", max = 0, k = 0;

    for (let i = 0; i < s.length; i++){

        if (str.length > max){
            max = str.length;
        }

        str = ""; //每次外循环重置
        for (let j = k+i; j < s.length; j++){
            temp = s[j];

            k = str.indexOf(temp);
            if (k >= 0){
                if (str.length > max) max = str.length;
                break;
            }
            else{
                str += temp;
                k = 0;
            }
        }
    }
    return str.length > max ? str.length : max;
};


/**
 * @param {string} s
 * @return {number}
 * 解法三：一个循环，时间复杂度O(n), 每找到相同的一个字母，则判断长度，截断字符串，下一个循环继续
 * 这种思路也叫滑动窗口，找到两头相同的字母，则移走左边字母，从新开始
 * 执行用时 :116 ms, 在所有 JavaScript 提交中击败了91.98%的用户
 * 内存消耗 :39.8 MB, 在所有 JavaScript 提交中击败了60.36%的用户
 */
var lengthOfLongestSubstring3 = function(s) {
    let temp = str = "", max = k = 0;

    for (let i = 0; i < s.length; i++){

        temp = s[i];
        k = str.indexOf(temp);
        if ( k >= 0){

            if (str.length > max) {
                max = str.length;
            }
            str = str.substring(k+1, str.length) + temp;
        }
        else{
            str += temp;
        }
    }
    return str.length > max ? str.length : max;
};

/**
 * @param {string} s
 * @return {number}
 * 解法三：一个循环，时间复杂度O(n), 每找到相同的一个字母，则判断长度，截断字符串，下一个循环继续
 * 这种思路也叫滑动窗口，找到两头相同的字母，则移走左边字母，从新开始
 * 执行用时 :116 ms, 在所有 JavaScript 提交中击败了91.98%的用户
 * 内存消耗 :39.8 MB, 在所有 JavaScript 提交中击败了60.36%的用户
 */
var lengthOfLongestSubstring4 = function(s) {
    let obj={}, temp = '', max = start = 0;

    for (let i = 0; i < s.length; i++){

        temp = s[i];
        if (obj[temp] > -1){
            start = i - obj[temp];
            if (start > max) {
                max = start;
            }
        }
        obj[temp] = i;
    }
    return str.length > max ? str.length : max;
};