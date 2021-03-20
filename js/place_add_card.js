let content_products=document.querySelector(".content_products");
let get_item_in_card=localStorage.getItem("item_added");
let add_item_in_it= JSON.parse(get_item_in_card);
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
            <button class="Add To Cart" onclick="remove_items(${item.id})">Remove From Cart</button>
            <i class="fa fa-star-o"></i>
        </div>
    </div>    
        
        `
    })
    content_products.innerHTML= prutuctUI;
}
//map return  false or true :
//filter return item    array :

Add_products_to_html(add_item_in_it);
function remove_items(id){
    let items_in_local_=localStorage.getItem("item_added");
    let items_in_local_storage =JSON.parse(items_in_local_);
   let result_felter=items_in_local_storage.filter(function(item){
        return item.id !==id ;
   })
   Add_products_to_html(result_felter);
   localStorage.setItem("item_added",JSON.stringify(result_felter));
}


   




