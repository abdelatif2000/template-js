let  log_out=document.querySelector("#logout");
let ALLItemINStorage=JSON.parse(localStorage.getItem("products"));
let  products_=all_item_products;

log_out.addEventListener('click',function(e){
   e.preventDefault();
   localStorage.clear();
   window.location="register.html";
})
let content_products=document.querySelector(".content_products");
Add_products_to_html(ALLItemINStorage);

 let user_is_save=localStorage.getItem("userName");
 let item_in_local_storage=localStorage.getItem("item_added") ? JSON.parse(localStorage.getItem("item_added")) :[];
 let brand=document.querySelector("#brande");
 let brand1=document.querySelector("#brande1");

 function number_item_added(){
    let all_product_=JSON.parse(localStorage.getItem("item_added"))? JSON.parse(localStorage.getItem("item_added")) :[];
    let count =0;
    all_product_.forEach(item => {
     count+=1;     
     });
     brand.innerHTML=count;
}
function number_item_favorite(){
    let all_product_=JSON.parse(localStorage.getItem("all_product_favorate"))? JSON.parse(localStorage.getItem("all_product_favorate")) :[];
    let count =0;
    all_product_.forEach(item => {
     count+=1;     
     });
     brand1.innerHTML=count;
}
number_item_added();
number_item_favorite();

 let  all_product_added  = localStorage.getItem("item_added") ? JSON.parse(localStorage.getItem("item_added")) :[];
 function check_user_login(id){
  let item_in_local_storage=localStorage.getItem("item_added") ? JSON.parse(localStorage.getItem("item_added")) :[];
    if(user_is_save){
        let  product_chose =ALLItemINStorage.find(function(item){
            return item.id==id
        })
        if(check_item_in_card(id,"item_added")){
            all_product_added=[...all_product_added,product_chose];
            localStorage.setItem("item_added",JSON.stringify(all_product_added));
            number_item_added();
        }
      
    }
    else{
        window.location="login.html";
    }
}
function daitels_item(id){
    localStorage.setItem("id_product",id);
}
search_input=document.querySelector("#search");
search_input.addEventListener("keyup",function(e){

        if(e.target.value.trim()!==""){
            search(e.target.value.trim(),all_item_products);
        }
        else if (e.target.value.trim()==""){
            Add_products_to_html(all_item_products);
        }
})
function search(title,products){
    let result_search=products.filter(function(item){
         return item.titel.toLowerCase().indexOf(title.toLowerCase()) !==-1 
    })
    Add_products_to_html(result_search);
}
function  check_item_in_card (id ,name_local_storage){
    let data_storage=localStorage.getItem(name_local_storage) ? JSON.parse(localStorage.getItem(name_local_storage)) :[];
    let result_item_in_storage=data_storage.every(function(item){
        return item.id !==id;
    })
    return result_item_in_storage;
}
let  all_product_favorate  = localStorage.getItem("all_product_favorate") ? JSON.parse(localStorage.getItem("all_product_favorate")) :[];
function add_to_favorite(id){
          let item_from_storage=JSON.parse(localStorage.getItem("products"));
           if(user_is_save){
           let  product_favorate =ALLItemINStorage.find(function(item){
               return item.id==id
           })
           product_favorate.liked=true;
           if(check_item_in_card(id,"all_product_favorate")){
               all_product_favorate=[...all_product_favorate,product_favorate];
               localStorage.setItem("all_product_favorate",JSON.stringify(all_product_favorate));
           }
           let result_modifier= item_from_storage.map(item=>{
               if(item.id==product_favorate.id){
                      item.liked=true;
               }
               return item
           })
           localStorage.setItem("products",JSON.stringify(result_modifier));
           Add_products_to_html(item_from_storage);
            number_item_favorite();
       }
       else{
           window.location="login.html";
       }
}

// create product :
let ican_add_product=document.querySelector("#ican_create_product");
ican_add_product.addEventListener('click',user_login)
function user_login(){
    if(user_is_save){
        window.location="create_product.html";       
    }
    else{
        window.location="login.html";         
    }
}
SlelectSize=document.querySelector("#selectSize");
SlelectSize.addEventListener("change",filterProductBySize);
function filterProductBySize(e){
    let  val=e.target.value;
    console.log(val);
    if(val==="all"){
        Add_products_to_html(ALLItemINStorage);
    }
    else{
        all_item_products_= ALLItemINStorage.filter(item=>{
            return item.size==val 
        })
        console.log(all_item_products_);
        Add_products_to_html(all_item_products_);
      
    }
}
function EditProduct(id){
    localStorage.setItem("EditeProduct",id);
    window.location="editProduct.html";
}
// function removeRedItem(id){
//     // let favorite_items=JSON.parse(localStorage.getItem("all_product_favorate"));
//     let result_felterDATA=ALLItemINStorage.find(function(item){
//        return item.id==id
//    })
//    if( result_felterDATA.liked=true){
//     // let producNOtDelet=favorite_items.filter(function(item){
//     //     return item.id !==id
//     // })   
//     // console.log(producNOtDelet);
//     // localStorage.setItem("all_product_favorate",producNOtDelet);
//     result_felterDATA.liked=false;
//     localStorage.setItem("products",JSON.stringify(ALLItemINStorage));
//      window.location="index.html";
    
//    }
// }















