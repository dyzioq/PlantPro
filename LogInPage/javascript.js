// op = 0.3
// document.getElementsByClassName("textBox")
// function fadeIn(){
//     let user = document.getElementById("user")
//     if (op < 0.9)
//     {
//        user.style.opacity = op; 
//        op += 0.02
//        setTimeout("fadeIn()", 30); 
//     }  
// }



window.onload;

document.getElementById("mainButton").addEventListener("click", function test(){
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var err = document.querySelectorAll(".LPError");
    login.style.outline = '0';
    password.style.outline = '0';
    err.forEach(element => {
        element.classList.remove("show");
        if (!/\w@\w\.\w/.test(login.value) || !/[A-Za-z][#$%^&*]/g.test(password.value)) {
            element.classList.add("show");
            login.style.outline = '2px solid rgba(200, 0, 0, 0.4)';
            password.style.outline = '2px solid rgba(200, 0, 0, 0.4)';
        }
    });
});


// document.getElementById("mainButton").addEventListener("keypressed", function test(){
//     if(KeyboardEvent)
// });