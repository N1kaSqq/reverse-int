module.exports = function reverse (n) {
    n=  Math.abs(n);
    let  arr = (String(n)).split("");
    arr = arr.reverse();
    return +(arr.join(""));
}
