

function isprime(x) {
    for (let i = 2; i < x; ++i) {
        if (x % i == 0) {
            return false;
        }
    }

    return true;
}

let r = isprime(4);
console.log(r);
