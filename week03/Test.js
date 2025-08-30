/*🔹 โจทย์ใหม่แบบประยุกต์
1) getFreqOfChars
เขียนฟังก์ชัน getFreqOfChars(sentence)
รับประโยคเป็น input
คืนค่า object ที่นับความถี่ ตัวอักษรแต่ละตัว (ignore case, ไม่สนช่องว่าง)
ถ้า input เป็น null หรือ undefined → return undefined
ตัวอย่างผลลัพธ์: 
console.log(getFreqOfChars("Hello World"));
// { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }  */
  

 //ขอโจทย์ประยุกย์มาจาก chat แล้วลองเขียน เขียนเสร็จ ก็ให้ chat ช่วยตรวจ
function getFreqOfChars(sentence) {
  if (!sentence) return undefined;  //เช็คค่า
  let freq = {};  //สร้าง object ไว้เก็บผลลัพธ์
  for (let ch of sentence.toLowerCase()) {
    if (ch !== ' ') freq[ch] = (freq[ch] || 0) + 1;  //เช็คว่าไม่ใช่ช่องว่าง (freq[ch] || 0) ถ้ายังไม่มีค่า ใช้ 0
  }
  return freq;
}

console.log(getFreqOfChars("Hello World"));
// { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }

/*getTopNWords
เขียนฟังก์ชัน getTopNWords(sentence, n)
รับประโยคและจำนวน n
คืนค่า array ของ คำที่เจอบ่อยที่สุด n ลำดับแรก
ถ้า input ไม่ถูกต้อง → return undefined
 ตัวอย่างผลลัพธ์: 
 console.log(getTopNWords("a a a b b c", 2));
// ["a", "b"]  */

function getTopNWords(sentence, n) {
  if (!sentence || !n || n <= 0) return undefined;
  const words = sentence.toLowerCase().split(" ");  //แปลงเป็นตัวพิมพ์เล็ก + แยกคำด้วยช่องว่าง
  // นับความถี่ของแต่ละคำ
  const freq = {};
  for (let word of words) {
    if (word) freq[word] = (freq[word] || 0) + 1;
  }
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]); // แปลง object เป็น array แล้ว sort ตามความถี่ (chat ช่วยเขียน แล้วอธิบายให้เข้าใจ)
  // ตัดเอาแค่ n คำแรกแล้ว map เอาเฉพาะชื่อคำ
  return sorted.slice(0, n).map(entry => entry[0]);
}
console.log(getTopNWords("a a a b b c", 2));   //เอา chat gpt  มา
// ["a", "b"]
console.log(getTopNWords("Do your best do your best just do it", 3));
// ["do", "your", "best"]
console.log(getTopNWords("", 2));
// undefined
console.log(getTopNWords("hello world hello hi hi hi", 2));
// ["hi", "hello"]

/*5) getWordLengths
เขียนฟังก์ชัน getWordLengths(sentence)
คืนค่า object ที่เก็บ { คำ : จำนวนตัวอักษร }
ถ้า input ไม่ถูกต้อง → return undefined
ตัวอย่างผลลัพธ์: console.log(getWordLengths("Do your best"));
// { do:2, your:4, best:4 }  */


function getWordLengths(sentence) {
  if (!sentence) return undefined;

  const words = sentence.toLowerCase().split(" "); //ใช้ .toLowerCase().split(" ") → ทำเป็น array ของคำ จะได้ไม่สนพิมพ์เล็กพิมพ์ใหญ่
  const result = {};

  for (let word of words) {
    if (word) result[word] = word.length;//นับความยาวด้วย length
  }
  return result;
}
//จาก chat
// 🔹 ตัวอย่างทดสอบ
console.log(getWordLengths("Do your best"));
// { do:2, your:4, best:4 }

console.log(getWordLengths("Hello World"));
// { hello:5, world:5 }

console.log(getWordLengths("JavaScript is fun"));
// { javascript:10, is:2, fun:3 }

console.log(getWordLengths(""));
// undefined