const lista1 =[
    100,
    200,
    300,
    500,

];

function calcularPromedio(){

    const sumaLista = lista.reduce(
    function(valorAcomulado =0, nuevoElemento){
    return valorAcomulado +nuevoElemento;
    }
    );
    const resultadoP = document.getElementById("resultadoPromedio");
    resultadoP.innerText = sumaLista;
// let sumaLista1 = 0;
 //for(let i=0; i<lista1.length; i++){
 //    sumaLista1 =sumaLista1+lista1[i]
 }

 
}