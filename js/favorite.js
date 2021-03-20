let content_products=document.querySelector(".content_products");
let favorite_items=JSON.parse(localStorage.getItem("all_product_favorate"));

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
            <button class="Add To Cart" onclick="remove_items(${item.id})">Remove From Favorite</button>
            <i class="fa fa-star-o"></i>
        </div>
    </div>    
        
        `
    })
    content_products.innerHTML= prutuctUI;
}
Add_products_to_html(favorite_items);
function remove_items(id){
    let ALLItemINStorage=JSON.parse(localStorage.getItem("products"));
    let favorite_items_local=JSON.parse(localStorage.getItem("all_product_favorate"));
    let result_felter =favorite_items_local.filter(item=>{
         return item.id!==id
    })
    localStorage.setItem("all_product_favorate",JSON.stringify(result_felter));
    Add_products_to_html(result_felter);
    let likeFalse=ALLItemINStorage.find(function(item){
        return item.id==id;
    })
    likeFalse.liked=false;
    localStorage.setItem("products",JSON.stringify(ALLItemINStorage));
}



