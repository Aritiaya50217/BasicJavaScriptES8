for (i = 1 ; i<= 10; i++){
    console.log(i);
}

// for...in
var arr = [7,8,9,3,5]
for (var idx in arr) {
    console.log("Index : ",idx)
}

// for...of
for (var val of arr) {
    console.log("Value  :",val)
}

var obj = {'x' : 10,'y':20,'z':'zero'}
for (var key in obj) {
    console.log("Key :",key)
}
for (var [key,value] of Object.entries(obj)){
    console.log("Key : ",key)
    console.log("Value : ",value)
}