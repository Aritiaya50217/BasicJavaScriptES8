// ตัวแปรแบบ global
var a = "global";
function testVar(){
    // ตัวแปรแบบ local ใช้ภายในฟังก์ชันเท่านั้น
    var a = "Local";
    alert(a);
}
function testVar2(){
    alert(a);
}