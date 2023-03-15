//1

const button = document.querySelector(".red")
const item1 = document.querySelector(".item-1")

button.addEventListener("click",function(){
    item1.classList.add("green")
})

//2

const button2 = document.querySelector(".pink")
const item2 = document.querySelector(".item-2")

button2.addEventListener("click",function(){
    item2.classList.add("blue")
    console.log(item2)
})

//3

const buttonNone = document.querySelector(".none")
const item3 = document.querySelector(".item-3")
 buttonNone.addEventListener("click",function(){
    item3.classList.add("square")
 })

 //4

 const buttonText = document.querySelector(".text")
 const divRoot = document.querySelector(".root")


 /*buttonText.addEventListener("click", function(){
       divRoot.innerHTML += `<p>Hello welcome on board</p>`
 })

*/
 //5
buttonText.addEventListener("click", function(){
       
    divRoot.classList.add("p-green")
    divRoot.innerHTML += `<p>Hello welcome on board</p>
    <p class="p-green">Hello ewlcome on board</p>`
 })

