const dec = document.querySelector(".cci")
const showdiv = document.querySelector(".ccii")
const inc = document.querySelector(".cciii")
const you = document.querySelector(".con1ii")
const yes = document.querySelector(".yes")

let items = 0


inc.addEventListener("click",function(){
        items++
    showdiv.textContent = items
})


dec.addEventListener("click",function(){
    if (items > 0) {
        items--

    }else{
        alert("You have reached your minimum amount")
    }
    showdiv.textContent = items
})

you.addEventListener("click",function(){
    yes.classList.toggle("six")
})
