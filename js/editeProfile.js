let GetUserName=localStorage.getItem("userName");
let GetEmail=localStorage.getItem("Email");
let GetPassWord=localStorage.getItem("passWord");
let inputName=document.querySelector(".containtEditeProfile input[type=text]");
let inputEmail=document.querySelector(".containtEditeProfile input[type=email]");
let inputPassword=document.querySelector(".containtEditeProfile input[type=password]");
let btnSubmit=document.querySelector(".containtEditeProfile input[type=submit]");

inputName.value=GetUserName;
inputEmail.value=GetEmail;
inputPassword.value=GetPassWord;
btnSubmit.addEventListener("click",editeProfileInfo);
function editeProfileInfo(){
     localStorage.setItem("userName",inputName.value);
     localStorage.setItem("Email",inputEmail.value);
     localStorage.setItem("passWord",inputPassword.value);
     inputName.value="";
     inputEmail.value=="";
     inputPassword.value="";
     alert("Change Is complited");
     setTimeout(() => {
        window.location="myProfile.html";   
     },15);
}



