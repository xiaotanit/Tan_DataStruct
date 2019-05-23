/**
 * 1、递归实现斐波那契数列：
 * 1,1,2,3,5...  第n项 = 第n-1项 + 第n-2项
 * */
function recursionFbi(n){
    if (n < 3) return 1;
    if (n == 3) return 2;
    // console.log("递归n: ", n);
    return recursionFbi(n-1) + recursionFbi(n-2);
}

/**
 * 2、循环实现裴波那契数列
 * 1,1,2,3,5... 第n项 = 第n-1项 + 第n-2项
 * */
function cirleFbi(n){

    if (n < 3) return 1;
    var a = 1, b = 1, c = 0;
    for (var i = 0; i < n; i++){
        if (i > 1){
            c = a + b;
            a = b;
            b = c;
        }
        console.log("循环i: ", i, ", c: ", c);
    }
    return c;
}
