let links=document.querySelector("#links");
let info_user=document.querySelector(".info_user");
let user=document.querySelector("#user");
let name_profile=localStorage.getItem("userName");
if(name_profile){ 
    links.remove();
    info_user.style.display ="flex";  
    user.innerHTML+=localStorage.getItem("userName");
}