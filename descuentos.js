
function calcularDescuento(){

    var cupon = document.getElementById("combo").value;

    switch(cupon) {
        case "1":
          descuento = 0;
        break;
        case "2":
          descuento = 15;
        break;
        case "3":
          descuento = 25;
        break;
        case "4":
          descuento = 30;
        break;
      }

    const input1 = document.getElementById("PrecioProduto");
    const precioProducto =input1.value;

    const input2 = document.getElementById("Descuento");
    const descuentoPorcentaje =input2.value;

    const salida =(precioProducto*(100-descuentoPorcentaje-descuento))/100;

    const resultadoDes = document.getElementById("resultadoDescuento");
    resultadoDes.innerText = salida;

}