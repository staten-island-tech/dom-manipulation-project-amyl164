const DOMSelectors ={
    form: document.querySelector("#form"),    
    firstname:document.querySelector("#firstName"),
    lastname: document.querySelector(".last-name"),
    osis: document.querySelector(".os-is"),

    //select the textbox 
    //select all the h2s in one property
};
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value); 
    DOMSelectors.firstNameoutput.innerText = firstName
});

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.lastname.value); 
   
       
});

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.osis.value); 
  
       
});