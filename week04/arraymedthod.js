//โจทย์จาก chat
const nums = [5, 12, 7, 20, 3, 12];
const words = ["Apple","banana","Avocado","berry","apricot","Cherry","banana"];
const employees = [
  { id:"e1001", firstname:"Somchai", lastname:"Jaidee" },
  { id:"e1002", firstname:"Tan",     lastname:"Luckkaimaipan" },
  { id:"e1003", firstname:"Guy",     lastname:"Panfankanmai" },
];
const cart = [
  { sku:"A1", price:120, qty:2 },
  { sku:"B2", price:80,  qty:1 },
  { sku:"C3", price:50,  qty:5 },
];

//(Easy) ใช้ forEach หาผลรวมของ nums (ห้ามใช้ reduce) → ควรได้ 59
//(Easy) ใช้ map สร้างอาเรย์ ["Somchai Jaidee","Tan Luckkaimaipan","Guy Panfankanmai"]
//(Medium) ใช้ filter + map เลือก words ที่ขึ้นต้นด้วย a (ไม่สนพิมพ์เล็กใหญ่) แล้วทำให้เป็นตัวพิมพ์เล็กทั้งหมด → ["apple","avocado","apricot"]
//(Medium) ใช้ reduce ทำ word frequency จาก ["a","b","a","c","b","a"] → { a:3, b:2, c:1 }
//(Medium) ใช้ reduce คำนวณราคารวมตะกร้า cart (price*qty รวมกัน) → 120*2 + 80*1 + 50*5 = 520
//(Medium) ใช้ filter + map เลขคู่ใน nums แล้วคืนกำลังสอง → จาก nums ควรได้ [144, 400, 144]
//(Hard) เขียน topNByFreq(arr, n) คืนอาเรย์ของค่าที่พบบ่อยสุด n ลำดับแรก (เท่ากันให้เรียงตามที่โผล่มาก่อน)
let sum = 0;
nums.forEach(n => { sum += n; }); //วนทุก element ใน nums
console.log("1) sum =", sum); //บวกค่าทีละตัวเข้ากับตัวแปร sum

const fullnames = employees.map(e => `${e.firstname} ${e.lastname}`); //.map() → สร้าง array ใหม่จาก array เดิม ดึง firstname + lastname → รวมเป็น string
console.log("2) fullnames =", fullnames);

const wordsA = words
  .filter(w => w.toLowerCase().startsWith("a"))//.filter(...) เก็บเฉพาะคำที่ขึ้นต้นด้วย a ไม่สนใจพิมพ์เล็กหรือพิมพ์ใหญ่
  .map(w => w.toLowerCase()); //.map(...) → แปลงเป็นตัวพิมพ์เล็กทั้งหมด
console.log("3) wordsA =", wordsA); 

const arr4 = ["a","b","a","c","b","a"];
const freq = arr4.reduce((acc, x) => {
  acc[x] = (acc[x] || 0) + 1; //ทุกครั้งที่เจอคำ x → เอา count เดิมมา (acc[x] || 0) แล้วบวก 1
  return acc;
}, {});
console.log("4) freq =", freq); 

const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0); //แต่ละสินค้า → price * qty แล้วบวกสะสม
console.log("5) total =", total); 

const evenSquares = nums
  .filter(n => n % 2 === 0)
  .map(n => n ** 2);
console.log("6) evenSquares =", evenSquares);

function topNByFreq(arr, n) {  //ในข้อนี้ ส่วนใหญ่ให้ chat ช่วย แล้วลองทำความเข้าใจ เพราะยังงงๆ
  if (!Array.isArray(arr) || n <= 0) return [];//arr ต้องเป็น array และ n ต้องมากกว่า 0
  const count = new Map();      //chat ช่วย (สร้าง Map() เพื่อเก็บข้อมูลแต่ละค่าใน arr)
  arr.forEach((v, i) => {
    if (!count.has(v)) count.set(v, { c:0, first:i }); //ถ้ายังไม่เคยเจอ v → เก็บ { c:0, first:i } (c=จำนวนครั้ง, first=ตำแหน่งที่เจอครั้งแรก)
    count.get(v).c++;
  });
  // sort by freq desc, then firstIndex asc
  const sorted = [...count.entries()]
    .sort((a, b) => {
      const fa = a[1].c, fb = b[1].c;
      if (fb !== fa) return fb - fa;
      return a[1].first - b[1].first;
    })
    .slice(0, n)
    .map(([v]) => v);
  return sorted;
}

console.log("7) topNByFreq(['x','y','x','z','y','x'], 2) =",
  topNByFreq(['x','y','x','z','y','x'], 2));