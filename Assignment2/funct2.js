// fibonacci serios

function fib(n)
{
    var f1=0
    var f2=1
    var f3=f2+f1
    console.log(0)
    console.log(1)
   for(i=2;i<=n;i++)
   {
    var f3=f2+f1
    console.log(f3)
    f1=f2;
    f2=f3; 
   } 
}
fib(5)
console.log("==============================");


var x=function (n)
{
    var f1=0
    var f2=1
    var f3=f2+f1
    console.log(0)
    console.log(1)
   for(i=2;i<=n;i++)
   {
    var f3=f2+f1
    console.log(f3)
    f1=f2;
    f2=f3; 
   } 
}
x(5);
console.log("==============================");

(function(n)
{
    var f1=0
    var f2=1
    var f3=f2+f1
    console.log(0)
    console.log(1)
   for(i=2;i<=n;i++)
   {
    var f3=f2+f1
    console.log(f3)
    f1=f2;
    f2=f3; 
   } 
})(5);
console.log("==============================");



var fib=(n)=>
{
    var f1=0
    var f2=1
    var f3=f2+f1
    console.log(0)
    console.log(1)
   for(i=2;i<=n;i++)
   {
    var f3=f2+f1
    console.log(f3)
    f1=f2;
    f2=f3; 
   } 
}
fib(5)
console.log("==============================");
