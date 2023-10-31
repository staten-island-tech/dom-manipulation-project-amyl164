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
function divCreator(dogbreed, name,pic){
    DOMSelectors.container.insertAdjacentHTML(
        "afterbegin",
        `<div class="container"> <div class="card"><h3>${name}</h3> <img src="${pic}" alt=""class="cardimg"><h4>${dogbreed}</h4> <button class="btn">Remove</button></div></div>`
    )};
function insert(){
    DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        const dogbreed = DOMSelectors.dogbreed.value
        const name = DOMSelectors.name.value
        const pic = DOMSelectors.pic.value
        divCreator(dogbreed, name, pic)
        const removebuttons = document.querySelectorAll(".btn");
        removebuttons.forEach((button)=> {
            button.addEventListener("click",function(event){
                const objectToRemove =  event.target.parentElement;
                objectToRemove.remove();
            });
        });
        
    });
    }
    insert()

    DOMSelectors.form.addEventListener("submit", function(event){
        event.preventDefault();
        function clearfields(){
            DOMSelectors.dogbreed.value = "";
            DOMSelectors.name.value = "";
            DOMSelectors.pic.value = "";
        }
        clearfields()
    });
   
    
     const removebuttons = document.querySelectorAll(".btn");
    removebuttons.forEach((button)=> {
        button.addEventListener("click",function(event){
            const objectToRemove =  event.target.parentElement;
            objectToRemove.remove();
        });
    }); 




