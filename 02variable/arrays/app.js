var scores = [10,20,30,40];
document.getElementById("arr").innerHTML = "Array = " + "["+ scores +"]";

var totalScores = scores[0] + scores[1] + scores[2] + scores[3]
document.getElementById("total").innerHTML = "Total = " + totalScores ; 

// length
document.getElementById("length").innerHTML = "ความยาวของสมาชิกใน scores  = " + scores.length ;

// sort
names = new Array("Tom","Cid","Boy","Golf","Sai")
document.getElementById("sort").innerHTML = "Output : " + names.sort();

nums1 = new Array(1,9,200,40,3,7)
document.getElementById("nums1").innerHTML = "Output : " + nums1.sort() ;  

// สร้างฟังก์ชัน เพื่อใช้เปรียบเทียบ
function numcompare(a,b) {return a-b ;}

nums2 = new Array (1,8,90,4,6,80);
document.getElementById("nums2").innerHTML = "Output : " + nums2.sort(numcompare);

// string
var test = "This is a test" ;
document.getElementById("test").innerHTML = "อักขระลำดับที่ 0  : "+ test.charAt(0) ; 
document.getElementById("len").innerHTML = "Length : " + test.length;

// lower
document.getElementById("lower").innerHTML = "แปลงเป็นพิมพ์เล็ก : " + test.toLowerCase() ;

// upper
document.getElementById("upper").innerHTML = "แปลงเป็นพิมพ์ใหญ่ : " + test.toUpperCase() ;

// การเข้าถึงสตริงย่อย
word = "abcdefghijklmnopqrstuvwxyz"
document.getElementById("index").innerHTML = "สตริงลำดับที่ 0 ถึง สตริงลำดับที่ 3 : "+ word.substring(0,4) ;

// ค้นหาสตริงย่อย
var index1 = "This is a fish. It is so beautiful.";
document.getElementById("index1").innerHTML = "ค้นหาคำว่า 'fish' ผลการค้นหาคือตำแหน่งที่ : "+ index1.indexOf("fish") ;
document.getElementById("index2").innerHTML = "ค้นหาคำว่า 'Fish' ผลการค้นหาคือตำแหน่งที่ : "+ index1.indexOf("Fish") ;
// lastIndex
document.getElementById('lastIndex').innerHTML ="ค้นหา 'is' ตำแหน่งสุดท้าย อยู่ในตำแหน่งที่ : " + index1.lastIndexOf("is") ;

// แยกสตริง
var test2 = "This is a fish. It is so beautiful." ;
document.getElementById("test2").innerHTML = test2 ;
// แยกโดยใช้ is
var parts = test2.split("is") ;
document.getElementById("split").innerHTML = "สตริงที่ใช้แยกคือ 'is' : "+parts ;

// รวมสตริง
// รวมโดยใช้ is
var allPart = parts.join("is")
document.getElementById("join").innerHTML = allPart ;