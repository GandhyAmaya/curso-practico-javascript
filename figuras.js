
function perimetroCuadrado(lado) {
    return lado * 4;
  }
  // console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
  
  function areaCuadrado(lado) {
    return lado * lado;
  }


//Codigo del triangulo 

function perimetroTriangulo(lado1, lado2, base){

const peri = lado1 + lado2 + base;
    console.log("El perímetro del cuadrado es: " + peri+ "cm");
return lado1 + lado2 + base ;

   
  
}

function areaTriangulo (base, altura){
return (base * altura)/2;
}

function areaIsoseles(lado1, base){

    const altura = parseFloat( Math.sqrt(Math.pow(lado1, 2) -(Math.pow(base,2)/4)));
    console.log("El perímetro del cuadrado es: " + altura+ "cm");
    return parseFloat((altura*base)/2);
}

//Codigo del circulo 

function diametroCirculo(radio){
return radio * 2;
}

const pi = Math.PI;


function perimetroCirculo(radio){ 
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo (radio){
return (radio*radio) * pi;

}
//aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
const input = document.getElementById("InputCuadrado");
const value =input.value;

const perimetro = perimetroCuadrado(value);

const resultadoCua = document.getElementById("resultadoCuadrado");
resultadoCua.innerText = perimetro;


}

function calcularArea(){
const input = document.getElementById("InputCuadrado");
const value =input.value;

const area = areaCuadrado(value);
alert(area);

}

function calcularPerimetroTriangulo(){

    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseFloat(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = parseFloat(input3.value);
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    console.log()
    alert(perimetro);
    
    
    }
    
    function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo3");
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("InputTriangulo4");
    const value2 = parseFloat(input2.value);
    
    const area = areaTriangulo(value1, value2);

    }
    function calcularAreaTrianguloIsoseles(){
        const input1 = document.getElementById("InputTriangulo1");
        const value1 = parseFloat(input1.value);
        const input2 = document.getElementById("InputTriangulo3");
        const value2 = parseFloat(input2.value);
        
        const area = areaIsoseles(value1, value2);
        alert(area);
        
        }

    function calcularPerimetroCirculo(){
        const input = document.getElementById("InputCirculo");
        const value =parseFloat(input.value);
        
        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
        
        
        }
        
        function calcularAreaCirculo(){
        const input = document.getElementById("InputCirculo");
        const value =input.value;
        
        const area = areaCuadrado(value);
        alert(area);
        
        }



