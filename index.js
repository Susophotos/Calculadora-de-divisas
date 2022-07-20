function calc () {
    var num1 = Number(document.getElementById("numero1").value);
    var num2 = 1.02;
    var men2 = "Dolares"
    var res = num1 * num2 + men2;
    document.getElementById("res1").value = res;
    var num3 = Number(document.getElementById("numero2").value);
    var men = "Euros"
    var res2 = num3 * 0.98 + men;
    document.getElementById("respuesta").value = res2;
    
}

function refrescar () {
    document.getElementById("calculadora").reset();
}
