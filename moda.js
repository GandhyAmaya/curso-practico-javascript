const lista1 =[
    1,
    2,
    3,
    2,
    6,
    2,
    6,
    9,
    2
];
const lista1Cont={};

lista1.map(
    function(elemento){
        if(lista1Cont[elemento]){
        lista1Cont[elemento] += 1;
    }

    else {
        lista1Cont[elemento] = 1;
    }
}
);

const listaArray = Object.entries(lista1Cont).sort(
    function(valorAcomulado,nuevoValor){
        return valorAcomulado[1]-nuevoValor[1];
        
    }
);
const moda = listaArray[listaArray.length-1];
