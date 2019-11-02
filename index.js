const myForm = document.querySelector("#my-form");
const age = document.querySelector("#age");
const year = document.querySelector("#year-box");
const msg = document.querySelector("#msg");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // The formula used
    yr_formula = 67 - age.value + 1952

    if (age.value === '' || age.value.split('').length > 4) {
        msg.innerHTML = "Please, enter your age!" 

        setTimeout(() => msg.remove(), 3000);

    } else {
        year.innerText = "You're born in " + yr_formula;
        
        year.style.fontSize = "xx-large";

        age.value = '';
    }

}
