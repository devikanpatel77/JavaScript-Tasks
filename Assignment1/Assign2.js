console.log("=======WITHOUT NEW KEYWORD======")

var person={
    firstname:"Devika",
    lastname:"N Patel",
    age:22,
    getfullName:function(){
        return this.firstname+" "+this.lastname
    }
}

console.log("firstname is:"+person.firstname);
console.log("lastname is:"+person.lastname);
console.log("age is"+person.age);
console.log("fullname is:"+person.getfullName());


var car={
    cname:'',
    price:22000000,
    engine:'high quality',
     ride:function(){
     return this.engine   
    }
}
console.log(car.cname);
console.log(car.ride())
console.log("-----------------------------");
var bike={
    bname:'Harley Davidson',
    price:2200000,
    bEngine:'300cc',
     ride:function(){
     return this.price   
    }
}
console.log(bike.bname);
console.log(bike.ride())
console.log("-----------------------------");
var farmer={
    fname:'mahi',
    age:45,
    crop:'paddy',
     farming:function(){
     return this.crop   
    }
}
console.log(farmer.fname);
console.log(farmer.farming())
console.log("-----------------------------");
var teacher={
    tname:'mahi',
    age:32,
    subject:'Maths',
     teaching:function(){
     return this.subject   
    }
}
console.log(teacher.tname);
console.log(teacher.teaching())
console.log("-----------------------------");
var company={
    cname:'aptean',
    strength:3000,
    industry:'IT',
     function:function(){
     return this.industry   
    }
}
console.log(company.cname);
console.log(company.function())
console.log("-----------------------------");
var product={
    pname:'shoes',
    price:2000,
    quality:'medium',
     sales:function(){
     return this.quality   
    }
}
console.log(product.pname);
console.log(product.sales())
console.log("-----------------------------");
var employe={
    ename:'mahi',
    age:26,
    industry:'developer',
     working:function(){
     return this.industry   
    }
}
console.log(employe.ename);
console.log(employe.working())
console.log("-----------------------------");
var pen={
    penname:'reynolds',
    price:20,
    quality:'good',
     writing:function(){
     return this.price   
    }
}
console.log(pen.penname);
console.log(pen.writing())
console.log("-----------------------------");
var book={
    bname:'classmate',
    price:40,
    quality:'better',
     reading:function(){
     return this.price   
    }
}
console.log(book.bname);
console.log(book.reading())
console.log("-----------------------------");

