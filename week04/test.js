/*(โจทย์ในห้อง)
มีข้อมูลพนักงาน (employees) ที่เก็บเป็น array ของ object โดยแต่ละ object มี id, firstname, lastname
ใช้ .map() เพื่อสร้าง array ใหม่ ที่รวมค่า firstname และ lastname ของพนักงานแต่ละคน
แปลงชื่อเต็มเป็นตัวพิมพ์ใหญ่ทั้งหมดด้วย .toUpperCase()
แสดงผล array ใหม่ที่ได้ออกมาทาง console.log */
const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "jaidee",
  },
  {
    id: "e1002",
    firstname: "tan",
    lastname: "luckkaimaipan",
  },
  {
    id: "e1003",
    firstname: "guy",
    lastname: "panfankanmai",
  },
];

famenull = employees.map((name) => (name.firstname + " " + name.lastname).toUpperCase()) //.map() จะวนลูปทุก  object ใน employees
//(name.firstname + " " + name.lastname) → รวมชื่อ + นามสกุลเป็น string 
//.toUpperCase() แปลงเป็นพิมพ์ใหญ่ 
console.log(famenull) //["SOMCHAI JAIDEE", "TAN LUCKKAIMAIPAN","GUY PANFANKANMAI"]


//หาพนักงานที่นามสกุลมีคำว่า 'jai' แล้วแสดงชื่อเต็มเป็นตัวพิมพ์ใหญ่"
const famenull = employees
  .filter((name) => name.lastname.toLowerCase().includes("jai"))
  .map((name) => (name.firstname + " " + name.lastname).toUpperCase())
//.filter(...) เช็ค lastname ว่ามีคำว่า jai อยู่มั้ย   
//.map(...) แปลงให้กลายเป็น firstname + lastname  แล้วใช้ .toUpperCase() → แปลงเป็นตัวพิมพ์ใหญ่ทั้งหมด

