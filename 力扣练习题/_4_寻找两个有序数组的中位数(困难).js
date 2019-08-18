/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 你可以假设 nums1 和 nums2 不会同时为空。

 示例 1:
 nums1 = [1, 3]
 nums2 = [2]
 则中位数是 2.0

 示例 2:
 nums1 = [1, 2]
 nums2 = [3, 4]
 则中位数是 (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 执行用时 :252 ms, 在所有 JavaScript 提交中击败了36.25的用户
 * 内存消耗 :39.1 MB, 在所有 JavaScript 提交中击败了81.39%的用户
 * 时间复杂度为：n + m + n  = m + 2n, 超过题目要求复杂度为O(log(n+m))了
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr.sort((num1, num2)=>{
        return num1 - num2;
    }); //排序，总次数为：num1.length + num2.length-1 = m + n -1

    if (arr.length % 2==0){
        return (arr[arr.length/2-1] + arr[arr.length/2])/2;
    }
    else{
        return arr[(arr.length-1)/2];
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 分析：有序数组，说明不需要排序，但是合并后是否需要排序？那就不合并数组
 */
var findMedianSortedArrays2 = function(nums1, nums2) {

};