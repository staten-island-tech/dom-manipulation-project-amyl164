const DOMSelectors ={
    form: document.querySelector("#form"),    
    dogbreed:document.querySelector(".dogbreed"),
    name: document.querySelector(".name"),
    pic: document.querySelector(".pic"),
    dogbreedoutput: document.querySelector("#dogbreedoutput"),
    nameoutput: document.querySelector("#nameoutput"),
    picoutput: document.querySelector("#picoutput"),
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
    form.insertAdjacentHTML(
        "afterend",
        `<div class="container"> <div class="card"><h3>${name}</h3> <img src="${pic}" alt=""class="cardimg"><h4>${dogbreed}</h4> <button class="btn">Remove</button></div></div>`
    );
});
}
insert()

DOMSelectors.button.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        const element = document.querySelector("container");
        element.remove();
        DOMSelectors.dogbreed.value = "";
        DOMSelectors.name.value = "";
        DOMSelectors.pic.value = "";
    }
    clearfields()
});
    