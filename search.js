const search=[
    {
        name: "bóng đá",
        data: "Bóng đá Việt Name"
        
    },
    {
        name: "bóng bàn",
        data: "Bóng bàn Việt Name",
    },
    {
        name: "quần áo thể thao",
        data: "Đồ thể thao 2025"
    },
     {
        name: "quần áo hằng ngày",
        data: "Đồ hằng ngày 2025"
    }

    

];

let form=document.getElementById("searchForm");
let input=document.getElementById("searchInput");
let result=document.getElementById("result");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let searchIn=input.value;
    const filter=search.filter((currentVal)=>currentVal.name.toLowerCase().includes(searchIn.toLowerCase()));
    filter.map((currentVal)=>{
        let li=document.createElement("li");
        li.innerText=currentVal.data;
        result.appendChild(li);
    })
})