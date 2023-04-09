const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");
      shows = document.querySelectorAll(".show");
      view = document.querySelectorAll(".view");
      sees = document.querySelectorAll(".see");
      pages = document.querySelectorAll(".page")

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})    

// Social media links
function google() {
	window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
};

function facebook(){
	window.location.assign("https://www.facebook.com/?stype=lo&jlou=AfdinpANo6JYiXtQZR_FC_C0WHFy4opeTyzWFTg4NdhalQGB4kv2ahxUSKmGIIgMY9IpzKiBP36TxhmaKuhwU9OPRV4mT5_d3yDip8hNhETbaA&smuh=28506&lh=Ac8JKqTOt2QFVhtnVtg","_blank");
}

//Message
function myMessage(){
    alert("Your passowrd uploaded sucessfull!");
}

// For signup
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-signup");
    })
});

// For forgot
shows.forEach(show => {
    show.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-forgot");
    })
});

// OTP 
view.forEach(view => {
    view.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-OTP");
    })
});

// OTP generator
function OTP(){
    var digits = '0123456789';
    let OTP = ' ';
    for(let i=0; i < 4; i++){
        OTP +=digits[Math.floor(Math.random()*10)];
    }
    return OTP;
}

// Creat Pass
sees.forEach(see => {
    see.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-creat");
    })
});

// First Page
pages.forEach(page => {
    page.addEventListener("click", e => {
       e.preventDefault(); 
       forms.classList.toggle("show-page");
    })
});
