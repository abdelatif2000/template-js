    let GetUserName=localStorage.getItem("userName");
    let GetEmail=localStorage.getItem("Email");
    let GetNUmberProduct=JSON.parse(localStorage.getItem("products"));
    // from html :
    let userName=document.querySelector("#NameUser");
    let EmailUser=document.querySelector("#UserEmail");
    let NumberProducts=document.querySelector("#NumberProduct");
    let count=0;
    GetNUmberProduct.forEach(element => {
        if(element.isMe==true){
            count+=1;
        }
    });
  
    userName.innerHTML=GetUserName;
    EmailUser.innerHTML="Email : "+GetEmail;
    NumberProducts.innerHTML="Number Products :"+count;


