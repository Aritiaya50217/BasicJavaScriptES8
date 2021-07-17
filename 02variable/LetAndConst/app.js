function varTest(){
    var x = 1 ;
    if (true){
        var x = 2;
        alert("varTest "+ x);
    }
        alert("varTest " + x);
}
function letTest(){
    let x = 1;
    if(true){
        let x = 2;
        alert("letTest " + x);
    }
    alert("letTest "+ x);
}