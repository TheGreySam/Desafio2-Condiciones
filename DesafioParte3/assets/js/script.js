let num = function() {
    let ps1 = document.querySelector("#exampleFormControlSelect1").value;
    let ps2 = document.querySelector("#exampleFormControlSelect2").value;
    let ps3 = document.querySelector("#exampleFormControlSelect3").value;
    let password = ps1 + ps2 + ps3;
    console.log(password);
    if (password == 911) {
        console.log("password correcto");
        //document.querySelector("#result").innerHTML = 
          response = `<h5>Password 1 correcto</h5>`;
    } else if (password == 714){
        console.log("password 2 correcto");
        //document.querySelector("#result").innerHTML = 
          response = `<h5>Password 2 correcto</h5>`;
    } else {
        console.log("password incorrecto");
        //document.querySelector("#result").innerHTML = 
          response = `<h5>Password incorrecto</h5>`;
    };
    pass = function() {
        document.querySelector("#result").innerHTML = 
                   `${response}`;
    }    
};


//    document.querySelector("#result").innerHTML = 
//                   `<h5>${ps1 + ps2 + ps3} correcto</h5>`;
// if (password = "911") {
  //  console.log("Password 1 correcto");
   //  document.querySelector("#result").innerHTML = 
     //              `<h5>Password 1 correcto</h5>`;
// } else if (password = "714") {
  //  console.log("Password 2 correcto");
   //  document.querySelector("#result").innerHTML = 
     //              `<h5>Password 2 correcto</h5>`;
// } else {
  //  console.log("Password incorrecto");
   //  document.querySelector("#result").innerHTML = 
     //              `<h5>Password incorrecto</h5>`;
 //};
//};

    
//     const pass = function() {
//     let ps1 = document.querySelector("#exampleFormControlSelect1").value;
//     alert(ps1);
//     let ps2 = parseInt(document.querySelector("#exampleFormControlSelect2").value);
//     let ps3 = parseInt(document.querySelector("#exampleFormControlSelect3").value);

//     let password = ps1 + ps2 + ps3;


// if (password = "911") {
//     document.querySelector("#result").innerHTML = 
//                   `<h5>Password 1 correcto</h5>`;
// } else if (password = "714") {
//     document.querySelector("#result").innerHTML = 
//                   `<h5>Password 2 correcto</h5>`;
// } else {
//     document.querySelector("#result").innerHTML = 
//                   `<h5>Password incorrecto</h5>`;
// };
// };