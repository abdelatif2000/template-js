let content_products=document.querySelector(".content_products");
let ALLItemINStorage=JSON.parse(localStorage.getItem("products"));
let MyProducts=ALLItemINStorage.filter(function(item){
    return item.isMe==true;
})
function  Add_products_to_html(items){

    let prutuctUI=items.map(function(item){
        return `
        <div class="product_item">
        <div class="content_product_image">
          <img src=${item.imageurl} alt="">
        </div>
     
        <div class="descreption_item_prucut">
               <h2>${item.titel}</h2>
               <p>${item.desc}</p>
               <span>Size:${item.size}</span>
        </div>
        <div class="product_item_actions">
            <button id='btnEdite'  onclick=EditProduct(${item.id})>Edit Product</button> </br>
            <button id="btnDelete" onclick="DeleteMyProduct(${item.id})">Delete</button>
            <i class="fa fa-star-o"></i>
        </div>
    </div>    
        
        `
    })
    content_products.innerHTML= prutuctUI;
}
Add_products_to_html(MyProducts);
function EditProduct(id){
    localStorage.setItem("EditeProduct",id);
    window.location="editProduct.html";
}
function DeleteMyProduct(id){
     let resultFilter= ALLItemINStorage.filter((item)=>{
         return item.id!==id;
    })
    console.log(resultFilter);
    localStorage.setItem("products",JSON.stringify(resultFilter));
    window.location="myProducts.html";
              
}