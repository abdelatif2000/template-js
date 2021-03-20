let all_item_products=[
    {
        id:1,
        titel:"Sony Camera",
        size:"Large",
        imageurl:"images/work5.webp",
        desc:"this product is very good",
        isMe:"",
        price:"400$"
    },
    {
        id:2,
        titel:"Clock",
        size:"small",
        imageurl:"images/work6.webp",
        desc:"this product is very good",
        isMe:"",
        price:"200$"
        
    },
    
    {
        id:3,
        titel:"Wall Clock",
        size:"Large",
        imageurl:"images/work1.webp",
        desc:"this product is very good",
        isMe:"",
        price:"100$"
    
    },
    
    {
        id:4,
        titel:"HeadPhone",
        size:"Medium",
        imageurl:"images/work2.webp" ,
        desc:"this product is very good",
         isMe:"",
         price:"50$"
    },
];
if( !localStorage.getItem("userName")){
    localStorage.setItem("products",JSON.stringify(all_item_products));    
}
// else if(localStorage.getItem("userName") && !localStorage.getItem("products") ){
//     localStorage.setItem("products",JSON.stringify(all_item_products));
// }


