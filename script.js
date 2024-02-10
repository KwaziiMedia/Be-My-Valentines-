const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn")

function changeImage () {  
    const image = document.getElementById("image");
    image.src = "images/love-you-mochi.gif"
    // noBtn.innerText = "No Take Backs HEHE"
}

noBtn.addEventListener("mouseover", function (){
    noBtn.style.left = `${Math.ceil(Math.random() * 50)}%`;
    noBtn.style.top = `${Math.ceil(Math.random() * 50)}%`;
    const image = document.getElementById("image");
    image.src = "images/crying.gif"
    noBtn.innerHTML = "PLEASE POOKIE"
})
function changeNo () {
    noBtn.innerHTML = "You Don't Mean That"
    const image = document.getElementById("image");
    image.src = "/images/crying.gif"
}