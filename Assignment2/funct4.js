//  add number in an array and return total [10,20,30,40] should return 100



function arr(a)
{
    
    var n=0;
    for(var i=0;i<a.length;i++)
    {
        n=n+a[i];
    }
    return n;
}
var num=[10,20,30,40];
console.log(arr(num));
console.log("==============================");


var x=function (a)
{
    
    var n=0;
    for(var i=0;i<a.length;i++)
    {
        n=n+a[i];
    }
    return n;
}
var num=[10,20,30,40];
console.log(x(num));
console.log("==============================");


(function ()
{
  var num=[10,20,30,40];
    var n=0;
    for( i=0;i<num.length;i++)
    {
        n=n+num[i];
    }
    console.log(n);
})();
console.log("==============================");


// var arr=(n)=>
// {
//   var num=[10,20,30,40];
//   var n=0;
//     for( i=0;i<num.length;i++)
//     {
//         n=n+num[i];
//     }
//     return n;
// }
// console.log(num);
// console.log("==============================");
