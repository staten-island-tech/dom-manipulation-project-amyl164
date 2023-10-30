const DOMSelectors ={
    form: document.querySelector("#form"),    
    dogbreed:document.querySelector(".dogbreed"),
    name: document.querySelector(".name"),
    pic: document.querySelector(".pic"),
    container: document.querySelector(".container"),
    card: document.querySelector(".card"),
    cardimg: document.querySelector(".cardimg"),
    button: document.querySelector(".btn"),
  
};
function insert(){
    DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        const dogbreed = DOMSelectors.dogbreed.value
        const name = DOMSelectors.name.value
        const pic = DOMSelectors.pic.value
        function divCreator(){
        DOMSelectors.container.insertAdjacentHTML(
            "afterbegin",
            `<div class="container"> <div class="card"><h3>${name}</h3> <img src="${pic}" alt=""class="cardimg"><h4>${dogbreed}</h4> <button class="btn">Remove</button></div></div>`
        )};
        divCreator()
    });
    }
    insert()


    const removebuttons = 
    document.querySelectorAll(".btn");
    removebuttons.forEach((removebutton)=> {
        removebutton.addEventListener("click",function(event){
            const objectToRemove = 
            event.target.parentElement;
            objectToRemove.remove();
        });
    });
    
    DOMSelectors.button.addEventListener("click", function(event){
        event.preventDefault();
        function clearfieldss(){
            const element = document.querySelector("container");
            element.remove();
            DOMSelectors.dogbreed.value = "";
            DOMSelectors.name.value = "";
            DOMSelectors.pic.value = "";
        }
        clearfieldss()
    });
    
        



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

