let myData = ["Chanakan", 19, true, null, ["Aom", "Lookpoo"]];
/*
🔹 Question 1: Declaring and Accessing Arrays
1.1 Create an array named myData with the following values:
Your name (String)
Your age (Number)
Your student status (Boolean)
A null value
An array containing the names of two friends
1.2 Print the first and last items in the myData array.*/
let mydata = ["chanakan,",19,true,null,["aom",'lookpoo']]
console.log("firstname",mydata[0]);
console.log("lastname",mydata[mydata.length-1])

/*2.2 Use .pop() to remove the last item from myData, and print the updated array.*/
myData.push({school: "king Mongkut"});
console.log(myData);

myData.pop();
console.log(myData);

/*🔹 Question 3: Looping Through Arrays
3.1 Use a for loop to print each item in the myData array one by one.*/
for(let i = 0; i < myData.length; i++) {
  console.log(myData[i]);
}
/*🔹 Question 4: Working with Strings and Arrays
4.1 Create a variable myStr = "frontend fun".
4.2 Use the spread operator to convert myStr into an array of characters and store it in charArray.
4.3 Print the charArray.*/
let myStr = "frontend fun";
let charArray = [...myStr];
console.log(charArray);

/*🔹 Question 5: Array Methods
5.1 Use Array.of() to create an array arr1 containing the number 99.
5.2 Use Array.from() to create a new array arr2 by copying values from arr1.*/
let arr1 = Array.of(99);
let arr2 = Array.from(arr1);
console.log(arr1);
console.log(arr2);

/*🔹 Question 6: Destructuring Assignment
6.1 Use array destructuring on [5, 10, 15, 20, 25, 30]
to assign the value 15 to a variable named x,
and assign the remaining values after 20 to a new array y.
6.2 Print the values of x and */
const [ , , x, , ...y] = [5, 10, 15, 20, 25, 30];
console.log(x); 
console.log(y); 

/*
ปัญหาประยุกต์: ตัวจัดการข้อมูลนักเรียน
เขียนโปรแกรมที่จัดการข้อมูลนักเรียนโดยทำตามขั้นตอนต่อไปนี้:
สร้างอาร์เรย์ชื่อ studentInfo ที่เก็บข้อมูลดังนี้:
ชื่อเต็มของนักเรียน (string)
อายุ (number)
สถานะการลงทะเบียนเรียน (boolean)
ค่า null เพื่อแทนข้อมูลที่หายไป
อาร์เรย์ที่มีชื่อเพื่อนสนิท 2 คน
เพิ่มอ็อบเจ็กต์ที่เก็บชื่อโรงเรียน { school: "ชื่อโรงเรียนของคุณ" } เข้าไปในอาร์เรย์
แสดงจำนวนสมาชิกทั้งหมดที่มีใน studentInfo
ใช้ลูปวนผ่าน studentInfo แล้วแสดงค่าของแต่ละสมาชิกพร้อมระบุประเภทของข้อมูล เช่น "ชื่อ:", "อายุ:", เป็นต้น
นักเรียนได้รับข้อความ "Welcome to frontend class!" ให้แปลงข้อความนี้เป็นอาร์เรย์ของตัวอักษร แล้วแสดงจำนวนตัวอักษรทั้งหมด
สร้างอาร์เรย์เก็บคะแนนนักเรียนปัจจุบันโดยใช้ Array.of() จากนั้นก็ใช้ Array.from() คัดลอกอาร์เรย์นี้ไปอีกตัวหนึ่ง แล้วแสดงทั้งสองอาร์เรย์
จากอาร์เรย์คะแนนทดสอบ [90, 85, 88, 92, 75, 80] ให้ใช้ destructuring เพื่อ:
เก็บคะแนนตัวที่สามในตัวแปร thirdScore
เก็บคะแนนทั้งหมดหลังตัวที่สี่ในอาร์เรย์ชื่อ laterScores
แสดงค่าของทั้ง thirdScore และ laterScores
สุดท้าย ให้ลบสมาชิกตัวสุดท้ายออกจาก studentInfo แล้วแสดงอาร์เรย์ที่อัปเดตแล้ว*/

function studentsmanager(){
    let studentInfo =["Chanakan",      
    19,              
    true,            
    null,         
    ["Aom", "Lookpoo"] 
    ];
    studentInfo.push({ school: "King Mongkut" });
    console.log("Total data items:", studentInfo.length);
    const labels = ["Name:", "Age:", "status:", "Missing data:", "Friend:", "School:"];
        for (let i = 0; i < studentInfo.length; i++) {
    console.log(labels[i], studentInfo[i]);
  }
    let message = "Welcome to frontend class!";
    let chArray = [...message];
    console.log("message:", chArray.length);

    let score = Array.of(88, 92, 79);
    let scores = Array.from(score);
    console.log("Scores:", score);
    console.log("Scores copy:", scores);

    const testscores = [90, 85, 88, 92, 75, 80];
    const [, , thirdScore, , ...laterScores] = testscores;
    console.log("Third score:", thirdScore);
    console.log("laterscore", laterScores);

    studentInfo.pop();
    console.log("studentInfo:", studentInfo);
}
studentsmanager();