const arr = ["Frontend Developer", "Web Designer", "UI/UX Designer", "Full Stack Developer"];
// const typing = document.getElementById("typing");
let count =0 ;
let index = 0 ; 
let currenttext = "";
let letter = "";
function type(){
        if(count === arr.length){
            count = 0;
        }
        currenttext = arr[count]
        letter = currenttext.slice(0, ++index);
        // typing.textContent = letter;
        document.querySelector("#typing").textContent = letter;
        if(letter.length === currenttext.length){
            setTimeout(erase,1500)
        }else{
                setTimeout(type,100);
        }
}

function erase(){
        letter = currenttext.slice(0,--index)
        // typing.textContent = 
        document.querySelector("#typing").textContent = letter;
        if(letter.length === 0 ){
                count++;
                setTimeout(type,300);
        }
        else{
                setTimeout(erase,50)
        }
}

document.addEventListener("DOMContentLoaded", type);


const form1 = document.getElementById("form");
form1.addEventListener("submit", function(event){
        event.preventDefault();
        const name = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        if(name === "" || lname === ""){
            alert("Please fill all the fields");
        }
        if(name !== "" && lname !== ""){
            alert("Thank you for contacting me, " + name + " " + lname + "! I will get back to you soon.");
            
        }
        if(!email.includes("@") || !email.includes(".")){
            alert("Please enter a valid email address");
        }

        form1.reset();
        
        
})

const nav = document.getElementById('menu-toggle')
const slidemenu = document.getElementById("slidemenu")
const closeBtn = document.getElementById("closeMenu");
nav.addEventListener('click',function(){
        slidemenu.classList.add('active')
})
closeBtn.addEventListener('click',function(){
        slidemenu.classList.remove('active')
})