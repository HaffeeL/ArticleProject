function verPassword(){
    var pw = document.getElementById("pw").value;

    if(pw == ""){
        return false;
    }

    if(pw.length < 8) {
        return false;
    }
}

function verName(){
    var nm = document.getElementById("nm");
    var nmValue = nm.value;
    var name = /^[A-Za-z]*$/;
    
    if(name.test(nmValue)){
        return true;
    }else{
        return false;
    }
}

function verEmail(){
    var eml = document.getElementById("email");
    var emlValue =  eml.value;
    var emailptn = /^\S+@\S+\.\S+$/;

    if(emailptn.test(emlValue)){
        return true;
    } else {
        return false;
    }
}