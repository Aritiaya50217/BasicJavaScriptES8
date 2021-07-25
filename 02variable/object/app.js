var emp = { id :105, name : "A", salary:25000} ;
document.getElementById("object").innerHTML = "แสดงข้อมูลทั้งหมด : " + (`Emp_id : ${emp.id} | Emp_name : ${emp.name} |Salary : ${emp.salary}`)

// การลดทอน
const person = {first : 'A' , last : 'B',country : 'Thailand'};

const {first,last,country} = person ;
document.getElementById("dest").innerHTML = "แสดง first : "+ first ;
