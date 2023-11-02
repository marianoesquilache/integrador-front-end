let selectorCategoria = document.getElementById("selectorCategoria");
let pTotal = document.getElementById("pTotal");
let buttonResumen = document.getElementById("buttonResumen");
let buttonBorrar = document.getElementById("buttonBorrar");
let textoParrafo = pTotal.textContent;
console.log(textoParrafo); 

let precioDescuento;

selectorCategoria.addEventListener('change', function() {
    
    // Asigna el valor seleccionado a la variable
    
    categoriaSeleccionada = selectorCategoria.value;
    
    console.log('Categoría seleccionada: ' + categoriaSeleccionada);

    switch(categoriaSeleccionada){
        case "1":
            precioDescuento = 200 - (200 * 0.80);
            break;
        case "2":
            precioDescuento = 200 - (200 * 0.50);
            break;
        case "3":
            precioDescuento = 200 - (200 * 0.10);
            break;
        default:
            precioDescuento = 200;
            break;    
    }
    
    // Ahora puedes utilizar la variable "categoriaSeleccionada" en tu código.
});

buttonResumen.addEventListener('click',function(){
    let inputCantidad = document.getElementById("inputCantidad");
    let cantidad = inputCantidad.value;

    let total = precioDescuento * cantidad

    console.log(total);



    pTotal.textContent += total;
});

buttonBorrar.addEventListener('click',function(){
    
    pTotal.textContent = textoParrafo;
});





