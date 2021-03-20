function  Add_products_to_html(items){
    let prutuctUI=items.map(function(item){
        return `
        <div class="product_item" style="border:${item.isMe===true ? "2px solid green" :""}">
        <div class="content_product_image">
          <img src=${item.imageurl} alt="">
        </div>
     
        <div class="descreption_item_prucut">
               <h2  onclick="daitels_item(${item.id})"> <a href="daitels_produuct.html">${item.titel}</a> </h2>
               <p>${item.desc}</p>
               <span>Size:${item.size}</span> <br/>
               <span id ="priceProduct">${item.price}</span>

               ${
                  item.isMe==true ? "<button id='btnEdite'  onclick=EditProduct("+item.id+")>Edit Product</button>":""
               }
        </div>
        <div class="product_item_actions">
            <button class="Add To Cart" onclick="check_user_login(${item.id})">Add To Cart</button>
            <i class="fa fa-gratipay" onclick="add_to_favorite(${item.id})"  style="color: ${item.liked==true ? "red" :''} "></i>
        </div>
    </div>    
        
        `
    })
    content_products.innerHTML= prutuctUI.join("");

}