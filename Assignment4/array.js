// Array_methods  ex:01
var chats = ['masal', 'pani', 'dai', 'sav']

chats.push('beel', 'gobi')
console.log("After push ", chats)
console.log("=============================================================")

chats.pop()
console.log("After pop ", chats)
console.log("=============================================================")

chats.unshift('babicorn')
console.log("After unshift ", chats)
console.log("=============================================================")

chats.shift()
console.log("After shift ", chats)
console.log("=============================================================")

var ischatsarray = Array.isArray(chats)
console.log("Chats Array or not ", ischatsarray)
console.log("=============================================================")

var includemushroom = chats.includes('mushroom', 4)
console.log("Is included ", includemushroom)
console.log("=============================================================")

var index = chats.indexOf('dai')
console.log("Index of dai ", index)
console.log("=============================================================")

var join = chats.join('------')
console.log("seperated with dotts ",join)
console.log("=============================================================")

chats.splice(2,0,'golgoppa')
console.log("After splice ",chats)
console.log("=============================================================")

var slice = chats.slice(1,5)
console.log("After slice ",slice)
console.log("=============================================================")

var sort = chats.sort()
console.log("After sort ",sort)
console.log("====================================================")



// var num = [100,50,20]
// function r(value,num){
//     return value-num;
// }
// var n1 = reduce(num)

// Array_methods  ex:02
var menu = ['masala_dosa', 'poori', 'ricebath', 'firedrice']

menu.push('beel', 'gobi')
console.log("After push ", menu)
console.log("=============================================================")

menu.pop()
console.log("After pop ", menu)
console.log("=============================================================")

menu.unshift('babicorn')
console.log("After unshift ", menu)
console.log("=============================================================")

menu.shift()
console.log("After shift ", menu)
console.log("=============================================================")

var ischatsarray = Array.isArray(menu)
console.log("Chats Array or not ", ischatsarray)
console.log("=============================================================")

var include = menu.includes('mushroom', 4)
console.log("Is included ", include)
console.log("=============================================================")

var index = menu.indexOf('dai')
console.log("Index of dai ", index)
console.log("=============================================================")

var join = menu.join('------')
console.log("seperated with dotts ",join)
console.log("=============================================================")

menu.splice(2,0,'golgoppa')
console.log("After splice ",menu)
console.log("=============================================================")
 
var slice = menu.slice(1,5)
console.log("After slice ",slice)
console.log("=============================================================")

var sort = menu.sort()
console.log("After sort ",sort)
console.log("====================================================")



// reduce method

var num = [100,50,25];
function r(val,num){
    return val-num;
}
var n1 = num.reduce(r)
console.log(n1);

var arr =[100,20,30,40,60];
function r(result,value){
    var total=  result+value;
}
console.log(result);
console.log(value);
console.log(total);

 

