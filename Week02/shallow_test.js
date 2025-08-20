//หาโจทย์จากchatgpt
/*📝 โจทย์ 1
เขียนฟังก์ชัน compareUsers(user1, user2) เพื่อตรวจสอบว่า user สองคนนี้มี id และ name เหมือนกันบ่
ถ้าเหมือนให้คืนค่า true ถ้าไม่เหมือนให้คืนค่า false*/
function compareUsers(user1, user2) {
  return user1.id === user2.id && user1.name === user2.name;
}
const u1 = { id: 1, name: "nena" };
const u2 = { id: 1, name: "nena" };
const u3 = { id: 2, name: "aom" };

console.log(compareUsers(u1, u2)); // true
console.log(compareUsers(u1, u3)); // false
//ลองทำดูแบบไม่ดูอาจารย์ แต่โจทย์แนวเดียวกัน


//เขียนฟังก์ชัน shallowEquality เพื่อตรวจสอบว่า order สองรายการมี orderId, item และ total เท่ากันหรือไม่

let order1 = { orderId: 101, item: "Laptop", total: 25000 }
let order2 = { orderId: 101, item: "Laptop", total: 25000 }
let order3 = { orderId: 102, item: "Phone", total: 12000 }

console.log(shallowEquality(order1, order2)) // true
console.log(shallowEquality(order1, order3)) // false
/* 
📝 โจทย์ฝึกทำ (ระดับยากขึ้น)
1. ตรวจสอบรายการสั่งซื้อ (Order Comparison)
ให้เขียนฟังก์ชัน compareOrders(order1, order2)
ถ้า orderId และ จำนวนสินค้า (items.length) เท่ากัน
และ ยอดรวม (total) เท่ากัน → คืนค่า true
ถ้าไม่ตรง → คืนค่า false*/
let order11 = { orderId: 101, items: ["Phone", "Case"], total: 5200 }
let order22 = { orderId: 101, items: ["Phone", "Case"], total: 5200 }
let order33= { orderId: 101, items: ["Phone"], total: 5000 }

console.log(compareOrders(order1, order2)) // true
console.log(compareOrders(order1, order3)) // false
/*เรามี object ที่เป็น คำสั่งซื้อ (order) 3 รายการ
เงื่อนไขใน compareOrders  ถ้า orderId เท่ากัน และ จำนวนสินค้าใน items เท่ากัน และ total เท่ากัน ถือว่าออเดอร์สองอันนี้ เหมือนกัน → return true
ถ้าไม่ครบเงื่อนไข → return false
console.log(compareOrders(order11, order22)) // true
orderId = 101 เท่ากัน items.length = 2 ทั้งคู่ total = 5200 เท่ากัน
console.log(compareOrders(order11, order33)) // false
order11 กับ order33 orderId = 101 เท่ากัน items.length ไม่เท่ากัน total ไม่เท่ากัน ฟังก์ชันจะคืนค่า false */

