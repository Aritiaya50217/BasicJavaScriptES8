var arr1 = [0,1,2,3] ;
var arr2 = [4,5,6];
var arr3 = (arr1 = [0,1,2,...arr2,3])
document.getElementById("spread").innerHTML = "Output : "+ "[ " + arr3 + " ]";