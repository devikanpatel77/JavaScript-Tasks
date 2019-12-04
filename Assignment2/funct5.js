// wheather the number is prime or not

// Named Function
function isPrime(num) {

    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            }

            else if (num === i * i) {
                return false
            }

            else {
                return false;
            }
        }
    }
    else {
        return false;
    }

}

console.log(isPrime(121));

//   Annonymous function


// self-invoked function

// Lamda function

function prime(a) {
    var flag
    if (a === 1) {
        return false;
    }
    else if (a === 2) {
        return true;
    }
    else {
        for (var i = 2; i <= a - 1; i++) {
            if (a % i == 0) {
                return false;
                break;
            }
        }
        return true
    }
}
console.log(prime(3))
console.log("==============================");


var x = function (a) {
    var flag
    if (a === 1) {
        return false;
    }
    else if (a === 2) {
        return true;
    }
    else {
        for (var i = 2; i <= a - 1; i++) {
            if (a % i == 0) {
                return false;
                break;
            }
        }
        return true
    }
}
console.log(x(4));
console.log("==============================");


(function prime(a) {
    var flag
    if (a === 1) {
        console.log(false);
    }
    else if (a === 2) {
        console.log(true);
    }
    else {
        for (var i = 2; i <= a - 1; i++) {
            if (a % i == 0) {
                console.log(false);
                break;
            }
        }
        console.log(true)
    }
})(7)
console.log("==============================");


var x = a => {
    var flag
    if (a === 1) {
        return false;
    }
    else if (a === 2) {
        return true;
    }
    else {
        for (var i = 2; i <= a - 1; i++) {
            if (a % i == 0) {
                return false;
                break;
            }
        }
        return true
    }
}
console.log(x(11))
console.log("==============================");





