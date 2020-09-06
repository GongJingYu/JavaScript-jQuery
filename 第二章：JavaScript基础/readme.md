# JavaScript基础

## 1.数据类型

基本数据类型：Number，String，Boolean，Null，Undefined

引用数据类型：Object

实例：

```js
//Number
let num = 20;
let num = 32.1;

//String
let str = 'String';
let str = "String";

//Boolean
let b = true;
let b = false;

//Undefined
let u;
let u = undefined;

//Null
let n = null;
```

### Number

可以声明为整数或浮点数

```js
//Number
let num = 20;
let num = 32.1;
```

进制：二进制，八进制，十六进制，十进制

```js
console.log(0o21);
console.log(21);
console.log(0x21);
```

范围

```js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
```

特殊值

```js
console.log(Number.MAX_VALUE*2);    Infinity
console.log(-Number.MAX_VALUE*2);   -Infinity
console.log('adsd'-12);             NaN
```

### String

```js
//String
let str = 'String';
let str = "String";
```

字符串长度：str.length

访问字符串：str[0]

字符串拼接：str+str2

### Boolean

```js
let b = true;
let b = false;
```

### undefined and null

### 数据类型检测

```js
console.log(typeof 12);
console.log(typeof "12");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
```

## 2.数据类型转换

### 转为字符串类型

```js
<script>
        let num = 32.1;
        let str = num+'';
        console.log( str, typeof str);

        str = num.toString();
        console.log( str, typeof str);

        str = String(num);
        console.log( str, typeof str);

</script>
```

### 转为数字型

```js
<script>
        console.log(parseInt('78'));
        console.log(parseFloat('43.1'));
        console.log(Number('54.34'));
        console.log('12' - 1);
</script>
```

### 转为布尔值

```js
<script>
        console.log(Boolean(''));
        console.log(Boolean(0));
        console.log(Boolean(NaN));
        console.log(Boolean(null));
        console.log(Boolean(undefined));
        console.log(Boolean(12));
        console.log(Boolean('小白'));
</script>
```

## 3.运算符

### 种类

#### 1.算术运算符

```js
<script>
        +   加   1+5    6
        -   减   5-1    7
        *   乘   5*2    10
        /   除   4/2    2
        %   取余  7%5    2
</script>
```

#### 2.比较运算符

```js
>,>=
<,<=
==,!=
===,!==
```

#### 3.逻辑运算符

```js
<script>
        /*
        &&  如果表达式1的值为true，则返回表达式2的值
        ||  如果表达式1的值为false，则返回表达式2的值
        !   取反
         */
        console.log(true && false); //false
        console.log(false || true); //true
        console.log(!true);         //false
        console.log(!false);        //true
</script>
```

#### 4.自增，自减运算符

```js
<script>
        /*
         ++  自增;
         --  自减;
         */
        let num = 10;
       console.log(num++);  //10
       console.log(num--);  //11
       console.log(++num);  //11
       console.log(--num);  //10
</script>
```

#### 5.赋值运算符

```js
<script>
        /*
            =,+=,-=,*=,/=,%=
         */
</script>
```

#### 6.三元运算符

```js
<script>
        /*
            条件表达式 ? 表达式1 : 表达式2
         */
        console.log(12>3?12:3); //12
</script>
```

#### 7.运算符优先级

```js
<script>
        /*
        结合方向        运算符
          无        ()
          左        . [] new(有参数，无结合性)
          右        new (无参数)
          无        ++ --   (后置）
          右        ! ~ - + typeof void delete ++ -- (前置)
          右        **
          左        * / %
          左        >> << >>>
          左        < <= > >= in instanceof
          左        == != === !==
          左        &
          左        ^
          左        &&
          左        ||
          右        ?:
          右        = += *= -= /= %= >>= <<= >>>= &= ^= |=
          左        ,

          左结合，从左到右
          右结合，从右到左
         */
</script>
```

## 4.流程控制

流程控制分为三种：顺序结构，分支结构，循环结构

### 分支结构：

```js
<script>
        /*
            if(){
            }

            if(){
            }else(){
            }

            if(){
            } else if(){
            }else{
            }
            
            switch(){
                case a:
                    执行程序;break;
                    ...
                default:
                    执行程序;
            }
         */
</script>
```

测试程序：ie.js

```js
let age = 2;

// if (age > 18){
//     alert("你可以观看");
// }
//
// if (age > 22){
//     alert("你可以观看");
// }else {
//     alert("未成年，不可以观看");
// }

if (age > 60){
    alert("你是一个老年人");
}else if (age > 30){
    alert("你是一个壮年人");
}else if (age > 18){
    alert('你已经成年了')
}else {
    alert('你还未成年');
}

let day = 1;
switch (day){
    case 1:
        alert('今天是星期1');break;
    case 2:
        alert('今天是星期2');break;
    case 3:
        alert('今天是星期3');break;
    case 4:
        alert('今天是星期4');break;
    case 5:
        alert('今天是星期5');break;
    default:
        alert('今天是休息日');
}
```

### 循环结构：

```js
for(;;){
}

while(){}

do{}while()
```

测试实例：

```js
let sum = 0;
for (let i =0;i<=100;i++){
    sum+=i;
}
console.log('sum = ' + sum);

let a = 100;
let b = 0;
while (a>0){
    b+=a;
    --a;
}
console.log('b = ' + b);

let c = 100;
let d = 0;
do {
    d+=c;
    --c;
}while (c>0);
console.log('d = ' + d);
```

### continue

跳出本次循环

### break

立即跳出整个循环

## 5.数组

### 创建数组

```js
<script>
    //1.使用new Array()创建数组
    let arr1 = new Array();
    let arr2 = new Array('gjy','yq');

    //2.使用字面量创建数组
    let a = [];
    let b = ['gjy','yq'];

    /*
        数组中可以放任意类型的元素：
        	Number,String,Boolean,undefined,null
    */
</script>
```

### 访问数组元素

```js
/*
    数组名[索引] 索引从0开始
    当访问的索引值超过该数组的最下标时，值为undefined
*/
console.log(arr2[0]);
console.log(b[0]);
```

### 遍历数组

```js
let score = [34,21,12,3,21,3,21,2];
for (let i=0;i<score.length;i++){
	console.log(score[i]);
}

for (let i in score) {
     console.log(score[i]);
}
```

### 数组案例

```js
//找出数组中的最大值
let num = [23,45,1,23,123,432,1232];
let max = num[0];
for (let i = 1; i < num.length; i++) {
    if (max < num[i]){
        max = num[i];
    }
}
console.log(max);

//数组转换为字符串
let arr = ['gjy','a','yq'];
let sum = arr[0];
let step = '|';
for (let i = 1; i < arr.length; i++) {
    sum += step + arr[i];
}
console.log(sum);
```

### 数组元素操作

#### 修改数组长度

#### 新增或修改数组元素

#### 筛选数组

#### 删除指定的数组元素

#### 反转数组元素顺序

### 数组排序算法

#### Bubble

```js
<script>
    let arr = [43,1,23,76,4,78,3434,2,12,43];
    let temp = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
	console.log(arr);
</script>
```

#### Insert

```js
<script>
        let str = [43,1,23,76,4,78,3434,2,12,43];
        let a;
        for (let i = 1; i < str.length; i++) {
            a = arr[i];
            let j = i-1;
            while (j>=0 && a < str[j]){
                str[j+1] = str[j];
                --j;
            }
            str[j+1] = a;
        }
        console.log(str);
</script>
```

