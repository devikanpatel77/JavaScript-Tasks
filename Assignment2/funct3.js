// circumferance of a circle

function circumference(r)
{
    return 2*3.14*r;
}
console.log(Math.ceil(circumference(5)))
console.log("==============================");


 var x=function (r)
{
    return 2*3.14*r;
}
console.log(Math.ceil(x(5)));
console.log("==============================");


(function(r)
{
    console.log (Math.ceil(2*3.14*r));
})(5);
console.log("==============================");



 var circumference=r=>
{
    return 2*3.14*r;
}
console.log(Math.ceil(circumference(5)))
console.log("==============================");

 