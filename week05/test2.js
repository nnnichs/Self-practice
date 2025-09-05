
//chatgpt สร้างโจทย์ให้ 
//เรียงตามเกรดเฉลี่ย (GPA) จงเขียนฟังก์ชัน sortByGpa(students) เพื่อเรียงนักศึกษาตามค่า GPA จากมาก → น้อย
const students = [   //chat ให้มา
  {id: 1, name: 'Alice', gpa: 3.2},
  {id: 2, name: 'Bob', gpa: 2.8},
  {id: 3, name: 'Charlie', gpa: 3.9},
  {id: 4, name: 'David', gpa: 3.5}
];

function sortByGpa(students) {
  return students.sort((a, b) => b.gpa - a.gpa); // ถ้า b.gpa > a.gpa → จะได้ค่าเป็นบวก → b อยู่ก่อน a → เรียงจากมาก → น้อย
}

console.log(sortByGpa(students));

//จงเขียนฟังก์ชัน getFailingNames(students) ที่คืน เฉพาะชื่อ นักศึกษาที่มีคะแนนต่ำกว่า 60 และให้ชื่อเป็นตัวพิมพ์เล็กทั้งหมด
function getFailingNames(students) {
  return students
    .filter(student => student.score < 60)   // เลือกเฉพาะคนที่คะแนน < 60
    .map(student => student.name.toLowerCase()); // แปลงชื่อเป็นตัวพิมพ์เล็ก
}

console.log(getFailingNames(students));

//จงเขียนฟังก์ชัน countPassed(students) ที่คืนค่าจำนวน (ตัวเลข) ของนักศึกษาที่มีคะแนนตั้งแต่ 70 ขึ้นไป
function countPassed(students) {
  return students.filter(student => student.score >= 70).length; //นับจำนวนด้วย .length
}

console.log(countPassed(students)); // 3

/*เขียนโมดูล
สร้างไฟล์ studentUtils.js ที่มี export:
ฟังก์ชัน getNames(students) → คืน array ของชื่อนักศึกษา
ฟังก์ชัน getAverageGpa(students) → คืนค่า GPA เฉลี่ยของกลุ่มนักศึกษา
คลาส Student ที่มี property id, name, gpa*/
// ฟังก์ชันคืน array ของชื่อนักศึกษา
function getNames(students) {
  return students.map(student => student.name); //ใช้ .map() ดึง property name เช่น [ {name:'Alice'}, {name:'Bob'} ] → ["Alice", "Bob"]
}
// ฟังก์ชันคืนค่า GPA เฉลี่ยของนักศึกษา
function getAverageGpa(students) {
  if (students.length === 0) return 0;
  const total = students.reduce((sum, student) => sum + student.gpa, 0); //ใช้ .reduce() บวกค่า gpa ได้ผลรวม , นำผลรวมหารด้วยจำนวนคน → ได้ค่าเฉลี่ย
  return total / students.length;
}
class Student {  //คลาสตัวแทนนักศึกษา มี property id, name, gpa
  constructor(id, name, gpa) {
    this.id = id;
    this.name = name;
    this.gpa = gpa;
  }
}

export { getNames, getAverageGpa, Student };
 
//ตัวอย่างการใช้งาน จากchat
import { getNames, getAverageGpa, Student } from './studentUtils.js';

const student = [
  new Student(1, 'Alice', 3.5), //จะได้ object {id:1, name:"Alice", gpa:3.5}
  new Student(2, 'Bob', 2.8),
  new Student(3, 'Charlie', 3.9)
];

console.log(getNames(students)); 
// ["Alice", "Bob", "Charlie"]

console.log(getAverageGpa(students)); 
// 3.4
