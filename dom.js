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
    firstname:document.querySelector(".firstname"),
    lastname: document.querySelector(".lastname"),
    osis: document.querySelector(".osis"),
    firstnameoutput: document.querySelector("#firstnameoutput"),
    lastnameoutput: document.querySelector("#lastnameoutput"),
    osisoutput: document.querySelector("#osisoutput"),
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    const firstname = DOMSelectors.firstname.value
    const lastname = DOMSelectors.lastname.value
    const osis = DOMSelectors.osis.value
    DOMSelectors.firstnameoutput.innerText = firstname
    DOMSelectors.lastnameoutput.innerText = lastname
    DOMSelectors.osisoutput.innerText = osis
});