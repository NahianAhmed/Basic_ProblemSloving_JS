
function stringTOnum(value){

    return parseInt(value);
}
function stringToflot(value){
    
    return parseFloat(value);
}
function numTostring(value){
    
    return value.toString(2);

}

console.log(stringTOnum("23.01"));
console.log(stringToflot("23.01"));
console.log(numTostring(5));