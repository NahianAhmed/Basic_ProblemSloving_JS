
let factrorial = (x) => {

    var r = 1;
    while (x > 0) {
        if (x == 1) {
            return r;
        }
        else {
            r = r * x;
            x--;
        }

    }
    return r;

}

console.log(factrorial(5));