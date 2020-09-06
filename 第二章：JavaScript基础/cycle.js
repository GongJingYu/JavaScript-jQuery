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