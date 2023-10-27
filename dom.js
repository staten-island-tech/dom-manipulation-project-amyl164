const DOMSelectors ={
    form: document.querySelector("#form"),    
    dogbreed:document.querySelector(".dogbreed"),
    name: document.querySelector(".name"),
    pic: document.querySelector(".pic"),
    container: document.querySelector(".container"),
    card: document.querySelector(".card"),
    cardimg: document.querySelector(".cardimg"),
  
};
let count = 0;
function insert(){
DOMSelectors.form.addEventListener("submit", function(event){
    count++
    event.preventDefault();
    const dogbreed = DOMSelectors.dogbreed.value
    const name = DOMSelectors.name.value
    const pic = DOMSelectors.pic.value
    function divCreator(){
        DOMSelectors.container.insertAdjacentHTML(
            "afterbegin",
            `<div id=${count} class="container"> <div class="card"><h3>${name}</h3> <img src="${pic}" alt=""class="cardimg"><h4>${dogbreed}</h4> <button id="btn">Remove</button></div></div>`
    )};
    divCreator()
    function clearfields(){
        const tempCount = count;
        const button = document.getElementById("btn")
        button.addEventListener("click", function(event){
            event.preventDefault();
            const element = document.getElementbyId(tempCount);
            element.remove()
            DOMSelectors.dogbreed.value = "";
            DOMSelectors.name.value = "";
            DOMSelectors.pic.value = "";
        }
    
        )};
        clearfields()
    
    
});
}
insert()











/* DOMSelectors.button.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        const container = document.querySelector(".container");
        container.remove();
        DOMSelectors.dogbreed.value = "";
        DOMSelectors.name.value = "";
        DOMSelectors.pic.value = "";
    }
    clearfields()
});

function remove(){
    let btns = document.querySelectorAll(".btn");
    btns.forEach((button)=> 
    button.addEventListener('click', function(event){
        console.log(event.target.parentElement);

    }
    ));
}
remove();
 */

