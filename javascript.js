var button = document.getElementById("boton");
    var onButtonClick = function() {
    document.getElementById("mensaje").textContent = "";
      var name = document.getElementById("numero").value;
      var harina = 4
      var pizza= 6
      var total = name * harina / pizza
      var greeting = "Para hacer "+ name + " paquetes se necesitan "+ total.toFixed(2) + " kilos de harina";
      document.getElementById("mensaje").textContent += greeting;
      setTimeout(function() {
      document.getElementById("mensaje").textContent = "";
      }, 5000);
      };
    button.addEventListener("click", onButtonClick);
    document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("numero").value = "";
    });