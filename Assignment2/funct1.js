// To find factorial of a number

// Named Function
function fac(x){
    if(x==0)
    {
        return 1;
    }
    return x*fac(x-1);
}
console.log("Factorial value is "+fac(5))
console.log("==============================");



var x=function (a){
    var fact=1;
    for(i=a;i>=2;i--)
    fact=fact*i;
return fact;
}
console.log(x(5));
console.log("==============================");

(function (a){
    var fact=1;
    for(i=a;i>=2;i--)
    fact=fact*i;
console.log( fact);
})(5);
console.log("==============================");

var a= (n)=>
{
    var fact=1;
    for(i=n;i>=2;i--)
    fact=fact*i;
return fact;
} 
console.log(a(5));

console.log("==============================");


