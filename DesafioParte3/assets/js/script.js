let num = function() {
    let ps1 = document.querySelector("#exampleFormControlSelect1").value;
    let ps2 = document.querySelector("#exampleFormControlSelect2").value;
    let ps3 = document.querySelector("#exampleFormControlSelect3").value;
    let password = ps1 + ps2 + ps3;
    console.log(password);
    if (password == 911) {
        console.log("password correcto");
          response = `<h5>Password 1 correcto</h5>`;
    } else if (password == 714){
        console.log("password 2 correcto");
          response = `<h5>Password 2 correcto</h5>`;
    } else {
        console.log("password incorrecto");
          response = `<h5>Password incorrecto</h5>`;
    };
    pass = function() {
        document.querySelector("#result").innerHTML = 
                   `${response}`;
    }    
};
