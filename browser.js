/* Câu 8 */
const btn=document.getElementById("btn");
const countP=document.getElementById("count");
let count=0;
btn.addEventListener("click",()=>{
    count++;
    countP.innerText=count;

});

/* câu 9 */
const ul=document.getElementById("list");
const fruits = ["Apple", "Banana", "Orange"];

fruits.map((currentVal)=>{
    const li=document.createElement("li");
    li.innerText=currentVal;
    ul.appendChild(li);
})

/* câu 10*/

const products = [
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 2000 },
  { name: "Mouse", price: 200 }
];

const productsFilter=products.filter((currentVal)=>currentVal.price>=500);
const productList=document.getElementById("product-list");
const total=document.getElementById("total");
let sum=0;
productsFilter.map((currentVal)=>{
    sum+=currentVal.price;
    const li=document.createElement("li");
    li.innerText=currentVal.name;
    productList.appendChild(li);

})
total.innerText=sum;