let user_name=document.querySelector("input[type=text]");
let pass_word=document.querySelector("input[type=password]");
let btn_sign_in=document.querySelector("input[type=submit]");
let user_is_save=localStorage.getItem("userName");
let pass_word_in_storidge=localStorage.getItem("passWord");
btn_sign_in.addEventListener('click',function(e){
    e.preventDefault();
    if(user_name.value.trim()===""|| pass_word.value.trim()==="" ){
        alert('Please Full Your  Information');
    }
    else  if(user_name.value.trim()==user_is_save.trim() && pass_word.value.trim()==pass_word_in_storidge.trim()  ){
         window.location="index.html";    
    }
    else{
        alert("Your Pass Word or NameUser IS Not Currect");
    }
})




