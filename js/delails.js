 let content_products= document.querySelector(".content_products");
 let ALLItemINStorage=JSON.parse(localStorage.getItem("products"));
 let id_product=localStorage.getItem("id_product");
 let take_item=ALLItemINStorage.find(function(item){
     return item.id==id_product;
 })
 content_products.innerHTML=`
 <div class="left">
 <img src="${take_item.imageurl}" alt="">
 <h2>${take_item.titel}</h2>
 <span>size : ${take_item.size}</span>
</div>
<div class="righht">
 solution to a long-term problem. Most people have only one problem
 in mind, and it’s short-term. It’s the bills at the end of the month,
 the Tar Baby. Money controls their lives, or should I say the fear and
 ignorance about money controls it. So they do as their parents did.
 They get up every day and go work for money, not taking the time to
 ask the question, ‘Is there another way?’ Their emotions now control
</div>
</div> 

 
 `

