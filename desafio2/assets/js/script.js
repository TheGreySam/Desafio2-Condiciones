


const verify = function( ) {
  let poke1 = parseInt(document.querySelector("#poke1").value);
  let poke2 = parseInt(document.querySelector("#poke2").value);
  let poke3 = parseInt(document.querySelector("#poke3").value);

  let total = poke1 + poke2 + poke3;
    document.querySelector("#demo").innerHTML = `Hey There ${total}`;
};
//const verbtn = document.querySelector("#verify"); 
//const result = document.querySelector("#result")
//verbtn.addEventListener("click", function() {
  // result.innerHTML = "Hello";
  // console.log("exito")
//});

//function verify() {
    //document.querySelector("#verify").innerHTML;
  //  document.querySelector("#verify").addEventListener("click", verify);
  //}
//if (total > 10) {
  //  document.querySelector("#totaltotal").innerHTML = 
    //          `<div class="card ">
      //        <h5>Llevas demasiados stickers</h5>
        //      </div>`;
//} else
//{
  //  document.querySelector("#totaltotal").innerHTML = 
    //          `<div class="card ">
      //        <h5>Llevas ${total} stickers</h5>
        //      </div>`;
//}