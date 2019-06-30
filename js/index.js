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
function circleFbi(n){

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


//算法复杂度：O(n)
function testCount1(n){
    //指令计数：多个if算作一个指令
    if (n > 10){
        console.log("n > 10")
    }
    else if(n > 5){
        console.log("n > 5")
    }
    else{
        console.log("n <= 5")
    }

    //指令计数：1 + n + n + n = 3n + 1
    for (var i = 0; i < n; i++){
        console.log("...testCount1...")
    }
}

//算法复杂度：O(logn)
function testCount3(n){
    //指令计数：n/2 = log2(n)
    //n=2 -> 1;  n=4->2;    n = 8->3;   n = 16->4;  n = 32->6
    //1=log2(2); 2=log2(4); 3=log2(8);  4=log2(16);  6=log2(32)
    while((n = n / 2) > 0){
        console.log("***testCount3***");
    }
}

//算法复杂度：O(nlogn)
function testCount4(n){
    //指令计数：1 + 2*log2(n) + log2(n) * (1+3n) = 1 + 3log2(n) + 3n*log2(n)
    for (var i = 1; i < n; i = i * 2){
        //1 + 3n
        for (var j = 0; j < n; j++){
            console.log(">>>testCount4>>>")
        }
    }
}

//算法复杂度：O(n^2)
function testCount2(n){
    //指令计数：1 + 2n + n * (1+3n) = 1 + 3n + 3n^2 = 3n^2 + 3n + 1
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            console.log("...testCount2...")
        }
    }
}


console.log("Hello,  tandaixa!^_^")


//约瑟夫问题模拟
var ysfTimer = null;
function yueSeFuStart(){

    var spanList = [];
    var box = document.getElementById("ysf_main");
    for(var i = 0; i < 41; i++){
        var span = box.querySelector("span[val='"+(i+1)+"']");
        span.style.visibility = "visible";
        spanList.push(span);
    }
    console.log(spanList);

    if (ysfTimer){
        clearInterval(ysfTimer);
    }

    var index = 0, ysfCount = 0;

    setTimeout(function(){
        ysfTimer = setInterval(function(){
            index += 2;
            if (index > spanList.length - 1){
                index = index - spanList.length;
            }

            var span = spanList[index];
            console.log(span)

            if (span){
                span.style.visibility = "hidden";
                spanList.splice(index, 1);
            }

            //时钟器停止条件
            if (ysfCount > 38){
                clearInterval(ysfTimer);
            }
            ysfCount++;
        }, 500)
    }, 1000)
}