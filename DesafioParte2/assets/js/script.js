const verify = function( ) {
  let poke1 = parseInt(document.querySelector("#poke1").value);
  let poke2 = parseInt(document.querySelector("#poke2").value);
  let poke3 = parseInt(document.querySelector("#poke3").value);

  let total = poke1 + poke2 + poke3;
    
    if (total >= 10) {
      document.querySelector("#result").innerHTML = 
                  `<div class="card ">
                  <h5>Llevas demasiados stickers</h5>
                  </div>`;
    } else
    {
      document.querySelector("#result").innerHTML = 
                  `<div class="card ">
                  <h5>Llevas ${total} stickers</h5>
                  </div>`;
    };
};
