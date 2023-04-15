function calcolaSomma() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("risultato").value = num1 + num2;
  }

  function calcolaProdotto() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("risultato").value = num1 * num2;
  }

  function calcolaDivisione() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("risultato").value = num1 / num2;
  }

  function calcolaSottrazione() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("risultato").value = num1 - num2;
  }

  function resetCampi() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("risultato").value = "";
  }