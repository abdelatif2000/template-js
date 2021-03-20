let user_name=document.querySelector("#username");
let email=document.querySelector("#email");
let pass_word=document.querySelector("#password");
let btn_sign_in=document.querySelector("#btn_signin");
btn_sign_in.addEventListener('click',function(){
    if(user_name.value==="" || email.value==="" || pass_word.value==="" ){
        alert('Please Full Your  Information');
    }
    else{
        localStorage.setItem("userName",user_name.value.trim());
        localStorage.setItem("Email".trim(),email.value.trim());
        localStorage.setItem("passWord".trim(),pass_word.value.trim());
        setTimeout(() => {
           window.location="login.html";   
        },15);
    }
})

