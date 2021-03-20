let nameProduct=document.querySelector("#name_product");
let descProduct=document.querySelector("#description_product");
let SizeProduct=document.querySelector("select");
let ALLItemINStorage=JSON.parse(localStorage.getItem("products"));
let btnSubmit=document.querySelector("#btn_submit");
let ImageProduct=document.querySelector("input[type=file]");
let SElectImage;
SizeProduct.addEventListener("change",changeSize);
function changeSize(e){
     SizeProductvalue=e.target.value;
}
btnSubmit.addEventListener('click',addToStorage);
function addToStorage(e){
    e.preventDefault();
    if(nameProduct.value==="" || descProduct.value===""){
        alert('Please Full Your  Information');
    }
    else{
        let oldProducts=JSON.parse(localStorage.getItem("products"));
        let newProduct={
            id:oldProducts ? oldProducts.length+1 :1,
            titel:nameProduct.value,
            size:SizeProductvalue,
            desc:descProduct.value,
            imageurl:SElectImage,
            isMe:true
        } 
        oldProducts=[...oldProducts,newProduct];
        localStorage.setItem("products",JSON.stringify(oldProducts));
        nameProduct.value="";
        descProduct.value=""
      
    }
}
ImageProduct.addEventListener('change',AddImage);
// add image to products :
function AddImage(){
    let  imageCHose=this.files[0];
    console.log(imageCHose);
     if( imageCHose.type !=="image/webp" && imageCHose.type !=="image/jpeg") {
          alert("Type Of Image Not support");
          return;
     }
     if(imageCHose.size> 2*1024*1024){
         alert("Size Of Image IS Big");
         return;
     }
    //  SElectImage=URL.createObjectURL(imageCHose);
    convertImage(imageCHose);
}
function convertImage(file)
{
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(){
        SElectImage= reader.result;  
    };
    reader.onerror=function(){
        alert("Erron");
    }
}
