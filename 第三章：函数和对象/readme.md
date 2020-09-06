# 函数和对象

## 函数

### 创建函数：

```js
<script>
        function a(){

        }

        let b = function (){

        }
</script>
```

用 return 可以返回一个值

### 函数参数	agruments

```js
<script>
        function sum(a,b){
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        }
        let c = sum(1,2,3,4,5);
        alert(c);
</script>
```

## 对象

### 创建对象

```js
<script>
        let user = new Object();
        user.name = 'gjy';
        user.age = 21;
        user.eat = function (){
            console.log('吃苹果');
        };

        let person = {
          name : 'gjy',
          age : 21,
          a:function (){
              console.log('a');
          }
        };

        console.log(user);
        console.log(person);

</script>
```

## 内置对象

### Math对象

```js
<script>
        Math.PI;
        Math.abs(21);
        Math.max(2,4,2);
        Math.min(3,2,1);
        Math.floor(3.2);
        Math.ceil(43.2);
        Math.pow(3,2);
        Math.sqrt(9);
        Math.round(34.2);
        Math.random();
</script>
```

### 日期对象

```js
<script>
    let date = new Date();
    date.getFullYear();
    date.getDate();
    date.getDay();
    date.getHours();
    date.getMinutes();
    date.getSeconds();
    date.getMilliseconds();
    date.getTime();
</script>
```

### 数组对象

#### 添加或删除数组元素

push()	unshift()	pop()	shift()

#### 数组排序

reverse()	sort()

#### 数组索引

indexOf()	lastIndexOf()

数组转换为字符串

toString()	join('分隔符')

其他方法

fill()	splice()删除	concat()	slice()截取

### 字符串对象

#### 根据字符返回位置

indexOf()	lastIndexOf()

#### 根据位置返回字符

charAt()	charAtCode()	str[]

#### 字符串操作方法

concat()	substr()	substring()	tolowerCase()	toUpperCase()	split()	replace()