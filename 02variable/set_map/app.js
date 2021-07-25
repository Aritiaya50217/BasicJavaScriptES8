// Set()

var mySet = new Set() ;
mySet.add('a'); 
mySet.add('b');
mySet.add('c'); 
mySet.add('d');
console.log(mySet);

// ใช้ .has เพื่อตรวจสอบสมาชิกใน set
var check = mySet.has('a');
console.log("มี a ใน set หรือไม่ :",check);

// การลบ
mySet.delete('b');
console.log("หลังจาก ลบ 'b' : ",mySet);

// Map()
var myMap = new Map();
// ใช้เมธอด set ในการเพิ่มข้อมูลลงใน map
myMap.set('a',1);
myMap.set('b',1);
myMap.set('firstName','oil') ; 
myMap.set('lastName','AAA')
console.log(myMap);


