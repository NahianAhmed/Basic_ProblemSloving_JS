
function binSrc(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] === val) {


            return true;
        }
        else if (arr[mid] < val) {
            start = mid + 1;
        }

        else {
            end = mid - 1;
        }
    }


    return false;


}

let arrr = [2, 3, 5, 8, 12, 34, 55];
let vall = 2;
if (binSrc(arrr, vall)) {
    console.log(vall, "found");
}
else {
    console.log(vall, "not found");

}