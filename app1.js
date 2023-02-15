// ===================registration form open and registration button hide===============
let regbtn1=document.querySelector('#regbtn');
let regdiv1=document.querySelector('.regdiv');
regbtn1.addEventListener('click',()=>{
    regbtn1.style.cssText='display:none';
    regdiv1.style.cssText='display:block';
});
// =====================registration form hide and registration btn show(back)===================
let regback1=document.querySelector('#regback');
regback1.addEventListener('click',()=>{
    regdiv1.style.cssText='display:none';
    regbtn1.style.cssText='display:block';
});
// ====================registration form close and open reg-terminated====================
let regclose1=document.querySelector('#regclose');
let regterminated1=document.querySelector('.regterminated');
regclose1.addEventListener('click',()=>{
    regdiv1.style.cssText='display:none';
    regterminated1.style.cssText='display:block';
});
// =======================go back to registration form by clicking reg-btn available reg-terminated==============
let ter_regbtn2=document.querySelector('#regbtn2');
ter_regbtn2.addEventListener('click',()=>{
    regterminated1.style.cssText='display:none';
    regdiv1.style.cssText='display:block';
})
// =====================login form open and registration form hide=======================
let logindiv1=document.querySelector('.logindiv');
let a1=document.querySelector('.a1');
a1.addEventListener('click',()=>{
logindiv1.style.cssText='display:block';
regdiv1.style.cssText='display:none';
})
// ======================login form hide and registration form show=====================
let loginback1=document.querySelector('#loginback');
loginback1.addEventListener('click',()=>{
    logindiv1.style.cssText='display:none';
    regdiv1.style.cssText='display:block';
});
// ====================login form close====================
let loginclose1=document.querySelector('#loginclose');
let loginterminated1=document.querySelector('.loginterminated');
loginclose1.addEventListener('click',()=>{
    logindiv1.style.cssText='display:none';
    loginterminated1.style.cssText='display:block';
});
// =====================loginterminated hide and show loginform===============
let ter_loginbtn2=document.querySelector('#loginbtn2');
ter_loginbtn2.addEventListener('click',()=>{
    loginterminated1.style.cssText='display:none';
    logindiv1.style.cssText='display:block';
})
// =====================geting massage by clicking forget password link===============
let logina1=document.querySelector('#logina');
let forgetpassword1=document.querySelector('.forgetpassword');
logina1.addEventListener('click',()=>{
    logindiv1.style.cssText='display:none';
    forgetpassword1.style.cssText='display:block';
})
// ================registration form submit btn click and registartion successfull display=====================
let regsubmit1=document.querySelector('#regsubmit');
let regsuccesfull1=document.querySelector('.regsuccesfull');
regsubmit1.addEventListener('click',()=>{
    regsuccesfull1.style.cssText='display:block';
    regdiv1.style.cssText='display:none';
});
// ===================hide registration succesfull and open login form======================
let regsuccbtn1=document.querySelector('#regsuccbtn');
regsuccbtn1.addEventListener('click',()=>{
    logindiv1.style.cssText='display:block';
    regsuccesfull1.style.cssText='display:none';
})

// =======================open welcome page and hide login page====================
let loginsubmit1=document.querySelector('#loginsubmit');
let welcome1=document.querySelector('.welcome');
loginsubmit1.addEventListener('click',()=>{
    welcome1.style.cssText='display:block';
    logindiv1.style.cssText='display:none';
})