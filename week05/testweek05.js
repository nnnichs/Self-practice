
//เขียนฟังก์ชันเพื่อเรียงลำดับรายชื่อนักศึกษา (students) ตามชื่อ (name) ในลำดับตัวอักษร (A → Z) โดยไม่สนใจตัวพิมพ์เล็ก–ใหญ่
const students = [
{id : 66500102, name: 'Suda', gpa: 2.5},
  {id : 66500555, name: 'ada', gpa: 2.8},
  {id : 66500589, name: 'pornchai', gpa: 3.25},
  {id : 66500104, name: 'Pornsak', gpa: 3.8},
]
 
function stu(studentList) {
  return studentList.sort((a, b) =>  //เรียง object
    a.name.toLowerCase().localeCompare(b.name.toLowerCase()) //ไม่ให้มีปัญหา case-sensitive,localcompare เปรียบเทียบstring เรียงลำดับตามตัวอักษร
  )
}
 
console.log(stu(students));

//จงเขียนฟังก์ชันที่รับรายชื่อนักเรียนและคะแนน แล้วคืนชื่อของนักเรียนที่สอบผ่าน (คะแนน ≥ 70) โดยให้แสดงชื่อเป็นตัวพิมพ์ใหญ่ทั้งหมด
const studentScores = [
  {name: 'Alice', score:85},
  {name: 'Bob', score:92},
  {name: 'Charlie', score:68},
  {name: 'David', score:55},
  {name: 'Eve', score:78}
];

function getPassingNames (students){
    return students
      .filter(student => student.score >= 70) //เลือกเฉพาะคนที่มีคะแนน 70 คะแนนขึ้นไป
      .map(student => student.name.toUpperCase()); //แปลงชื่อเป็นพิมพ์ใหญ่
}
 
const passingNames = getPassingNames(studentScores);
console.log(passingNames);

//จงเขียนโปรแกรมเพื่อเรียงลำดับรายชื่อนักศึกษา (students) ตามตัวอักษรแรกของชื่อ โดยไม่สนใจว่าตัวอักษรนั้นเป็นตัวพิมพ์เล็กหรือพิมพ์ใหญ่
const sortstudent = students.sort((a,b) => { //เรียง  object
    let val1 = a.name[0].toUpperCase() //ดึงเฉพาะตัวอักษรแรก
    let val2 = b.name[0].toUpperCase()
    if (val1 < val2){  //ถ้า val1 < val2 → คืนค่า -1 ให้ a อยูก่อน b
        return -1
    }
    else if(val1 > val2){  //ถ้า val1 > val2 → คืนค่า 1
        return 1
    }
    return 0  //ถ้าเท่ากัน → คืนค่า 0
})
console.log(sortstudent);


//จงสร้างโมดูล JavaScript ที่มีทั้งฟังก์ชันและคลาส แล้วส่งออก (export) ไปใช้งานในไฟล์อื่น
function echo(msg) { //ฟังก์ชันคืนค่าข้อความเดิมที่รับเข้ามา 
    return msg
}
 
//default export
function getLength(str) { //คืนค่าความยาว string
    return str.length
}
 
const GPAAverage = 3.0
class Book {
    constructor(isbn){
        this.isbn = isbn
    }
}
 
export { echo, getLength, Book } //ทำให้ไฟล์อื่น import ฟังก์ชันพวกนี้ไปใช้ได้

//ตัวอย่างการใช้งานเอามาจาก chat 
import { echo, getLength, Book } from './utils.js';

console.log(echo("Hello World")); // "Hello World"
console.log(getLength("JavaScript")); // 10

const myBook = new Book("978-1234567890");
console.log(myBook.isbn); // "978-1234567890"



