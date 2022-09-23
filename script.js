const form=document.getElementById('form');
const username = document.getElementById('user');
const password = document.getElementById('pass');
const conpassword = document.getElementById('conpass');
const mobilenumber = document.getElementById('mobile')
const email = document.getElementById('email');


form.addEventListener('submit',(e) => { 
    e.preventDefault();
    
    checkInputs();

});

function checkInputs(){
    // get the values form inputs


    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const conpasswordValue = conpassword.value.trim();
    const mobilenumberValue = mobilenumber.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue ===''){
        // show error
        // add error class
        setErrorFor(username, 'username cannot blank');
    }
    else{
        // add success class
        setSuccessFor(username);
    }

}   

function setErrorFor(input,message){

    

}

