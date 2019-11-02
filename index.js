const myForm = document.querySelector("#my-form");
const age = document.querySelector("#age");
const year = document.querySelector("#year-box");
const msg = document.querySelector("#msg");

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // The formula used
    yr_formula = 67 - age.value + 1952

    const len = Math.ceil(Math.log10(age.value + 1));

    if (age.value === '') {
        msg.innerHTML = "Please, enter your age!" 

        setTimeout(() => msg.remove(), 3000);

    } else if (len > 4) {
        msg.innerHTML = "Please, enter your age and not your year!";

        setTimeout(() => msg.remove(), 3000);
        
    } else {
        year.innerHTML = "You're born in " + yr_formula;

        year.style.fontSize = "xx-large";

        age.value = '';
    }

}
