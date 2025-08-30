//โจทย์ของอาจารย์
/*ฟังก์ชันรับค่า sentence (ข้อความ)
แปลงข้อความทั้งหมดเป็น ตัวพิมพ์เล็ก (lowercase)
แยกข้อความออกเป็นคำ (ใช้การ split เว้นวรรค " ")
นับจำนวนครั้งที่คำแต่ละคำปรากฏ
คืนค่าเป็น object ที่มี key = คำ, value = จำนวนครั้งที่เจอ
ถ้า input เป็น null หรือ undefined ให้ return undefined*/

function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined) { //ตรวจสอบค่าก่อน 
    return undefined;
  }
 
  const words = sentence.toLowerCase().split(" ");  //ทำตัวเล็กป้องกัน error 
  const freq = {};
  for (let word of words) {   //for of ที่ละคำใน Array
    freq[word] = (freq[word] || 0) + 1; // freq[word] ถ้ายังไม่มีถือว่าเป็น 0
  }
 
  return freq;
}
console.log(getFreqOfWords('Today is present and your gift'))  //จาก chatqpt
 
console.log(getFreqOfWords('DO YOU BEST JUST IT'))
 
console.log(getFreqOfWords(null))