let nameProduct=document.querySelector("#name_product");
let descProduct=document.querySelector("#description_product");
let SizeProduct=document.querySelector("select");
let ALLItemINStorage=JSON.parse(localStorage.getItem("products"));
let btnUpdate=document.querySelector("#btnUpdate");
let EditeProductId=localStorage.getItem("EditeProduct");

let ItemProduct=ALLItemINStorage.find(function(item){
   return item.id==EditeProductId
})
nameProduct.value=ItemProduct.titel;
descProduct.value=ItemProduct.desc;
SizeProduct.value=ItemProduct.size;
 console.log(ItemProduct);
SizeProduct.addEventListener("change",changeSize);
function changeSize(e){
     SizeProductvalue=e.target.value;
}






btnUpdate.addEventListener('click',EditItem);
function EditItem(e){
      e.preventDefault();
    if(nameProduct.value==="" || descProduct.value===""){
        alert('Please Full Your  Information');
    }
    else{
        ItemProduct.titel= nameProduct.value;
        ItemProduct.desc=descProduct.value;
        ItemProduct.size=SizeProduct.value;
        localStorage.setItem("products",JSON.stringify(ALLItemINStorage));
        alert("The Update Complited");
        setTimeout(()=>{
            window.location="index.html";
        },1000);
    }
}

