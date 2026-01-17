

console.log("Cau 1: tim Max"); 
const numbers = [3, 7, 2, 9, 4];
let max=numbers[0];
for(let i=1;i<numbers.length;i++){
if(numbers[i]>max){
    max=numbers[i];
}
}
console.log(`So lon nhat la ${max}`);



console.log("----------------------------------------------");
console.log("Cau 2: bien cac phan tu trong mang giam xuong 20%");
const prices = [100, 200, 300];
const newPrices= prices.map((currentVal)=>currentVal-currentVal*0.2);
console.log("Gia ban dau: "+prices);
console.log(`Gia luc say ${newPrices}`);


console.log("----------------------------------------------");
console.log("Cau 3: Lọc ra tuổi lớn hơn hoặc bằng 18 trong mảng");
const ages = [12, 18, 25, 16, 30];
const agesAfterFilter= ages.filter((currentValue)=>currentValue>=18);
console.log(`Mảng sau khi lọc là ${agesAfterFilter}`);



console.log("----------------------------------------------");
console.log("Cau 4: Tính tổng tất cả các phần tử trong mảng");
const number = [5, 10, 15];
let tong=number.reduce(((accumulator,currentVal)=>accumulator+currentVal),0);
console.log(tong);


console.log("-----------------------------------------------");
console.log("Câu 5: Lấy tên của những người từ 18 tuổi trở lên.");
const users = [
  { name: "Hieu", age: 20 },
  { name: "Lan", age: 17 },
  { name: "Minh", age: 22 }
];

const usersEnoughAge=users.filter((currentVal)=>currentVal.age>=18).map((val)=>val.name);
console.log("Những người đủ từ 18 tuổi trở lên là: "+usersEnoughAge);


console.log("-----------------------------------------------");
console.log("Câu 6: Tính điểm trung bình");
const scores = [8, 9, 7, 6];
let sum= scores.reduce((accumulator, currentVal)=>accumulator+currentVal,0);
let average=sum/scores.length;
console.log("Điểm trung bình là "+average);

console.log("-----------------------------------------------");
console.log("Câu 7:  Tính tổng tiền của các đơn hàng có total > 200.");
const orders = [
  { id: 1, total: 200 },
  { id: 2, total: 450 },
  { id: 3, total: 100 }
];
let orders2=orders.filter((currentVal)=>currentVal.total>200).reduce((acc,currentVal)=>acc+currentVal.total,0);
console.log("Tổng tiền của các đơn có total lớn hơn 200 là: "+orders2);




