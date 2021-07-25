// แบบ 1 เงื่อนไข
var a = 1;
if (a == 1){
    document.getElementById("one").innerHTML = "Output : " +"a equal one" ;
}
    
//  2 เงื่อนไข
var a = 9 ;
if(a == 3){
    document.getElementById("three").innerHTML = "Output : " + "a equal three" ;
}else{
    document.getElementById("three").innerHTML = "Output : " + "a not equal three" + "  a = " +a ;
}

// แบบย่อ
var b = 5 ;
document.getElementById("inline").innerHTML = (b == 5) ? c = "b equal five" : "b not equal five";
