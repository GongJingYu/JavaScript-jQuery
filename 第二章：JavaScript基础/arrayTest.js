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