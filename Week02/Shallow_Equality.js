//โจทย์ file จาก อาจารย์
function shallowEquality(object1, object2){
    const keys1 = Object.keys(object1)   
    const keys2 = Object.keys(object2)   
    if(keys1.length !== keys2.length){ //ถ้า Key ไม่เท่ากัน ก็ถือว่าไม่เท่ากัน
        return false 
    }
    //วนตรวจสอบทุก key
    for(let key of keys1){
        if(object1[key] !== object2[key]){
            return false   //ถ้า value ไม่เท่ากันก็ false 
        }
    }
    return true 
}

let book1 = { isbn: 123456789, title: "JavaScript" }
let book2 = { isbn: 123456789, title: "JavaScipt" }

console.log(shallowEquality(book1, book2)) // true

