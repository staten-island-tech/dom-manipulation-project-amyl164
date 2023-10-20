/*
const DOMSelectors ={
    form: document.querySelector("#form"),    
    firstname:document.querySelector(".firstname"),
    lastname: document.querySelector(".lastname"),
    osis: document.querySelector(".os-is"),
    firstnameoutput: document.querySelector("#firstnameoutput"),
    lastnameoutput: document.querySelector("#lastnameoutput"),
    osisoutput: document.querySelector("#osisoutput"),
};
    //select the textbox 
    //select all the h2s in one property

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstname.value);
});
DOMSelectors.firstnameoutput.innerText = firstname


DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.lastname.value);       
});

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.osis.value); 
        
});
*/

const DOMSelectors ={
    form: document.querySelector("#form"),    
    dogbreed:document.querySelector(".dogbreed"),
    name: document.querySelector(".name"),
    pic: document.querySelector(".pic"),
    dogbreedoutput: document.querySelector("#dogbreedoutput"),
    nameoutput: document.querySelector("#nameoutput"),
    picoutput: document.querySelector("#picoutput"),
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const dogbreed = DOMSelectors.dogbreed.value
    const name = DOMSelectors.name.value
    const pic = DOMSelectors.pic.value
    DOMSelectors.dogbreedoutput.innerText = dogbreed
    DOMSelectors.nameoutput.innerText = name
    DOMSelectors.picoutput.innerHTML = `<img src="${pic}"/>`
});

/*
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    document.querySelector(".gallery")
    .insertAdjacentHTML(
        "afterbegin", 
        '<div class="card"> <h2 class="card header"> ${}</h2></div>'
        

    );


});

*/
