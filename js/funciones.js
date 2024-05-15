function rectangulo(altura, ancho) {
    let area= altura * ancho
    return area 
}

console.log(rectangulo(8,9));
console.log(rectangulo(10,8));



function triangulo(base, altura) {
    let area= (base * altura)/2
    return area
}



console.log(triangulo(2,3));

function largoDelArray(array) {
    return array.length;
}

let dulces= ["coockies", "cinnamons", "brownies", "croassaints"]
console.log(largoDelArray(dulces));



function candidadDeLetras(palabra) {
    return palabra.length
}

let word= "chocolinas"
console.log(candidadDeLetras(word));



function dolarHoy(precioPesosArgentinos){
    let factorCambio = 1000
        return precioPesosArgentinos * factorCambio
}
let enDolares = dolarHoy(50)
console.log(enDolares)



function precioFinal(precio) {
    let precioIva = precio * 1.21
    return precioIva
}

let precioProducto = 5000
console.log(precioFinal(precioProducto));



function mitad(numero) {
    return numero / 2
}

console.log(mitad(50));



function diaSegunNumero(array, numero){
    let resultadoArray = array;
    let numeroDia = numero;
    return resultadoArray[numeroDia]
}

let resultado = diaSegunNumero(['19/08/24', '10/08/24', '11/04/24', '3/02/24'], 1)
console.log(resultado)

//ejecutando funciones

function siguiente(numero) {
    let anterior =numero + 1
    return anterior
}

let valores= siguiente(5)
console.log(valores);


function cuadriple(numero) {
    let cuadriple = numero * 4
    return cuadriple;
}

let masDeCuatro = cuadriple(5)
console.log(masDeCuatro);


function siguienteDelCuadriple(numero) {
    let siguienteDelCuadriple = siguiente(cuadriple(numero))
    return siguienteDelCuadriple
}

let sigueinteDeCuatro = siguienteDelCuadriple (8)
console.log(sigueinteDeCuatro);


