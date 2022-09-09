function registrarNombre() {
    alert("Fair Play insumos deportivos")
    let nombre = prompt("Ingrese su nombre ");
    while(nombre === ""){
        nombre = prompt("Ingrese su nombre ");
    }
}

function nuestrosProductos(){
    let producto;
    do {
 producto = parseInt(prompt("Que producto llevara? : \n1)Mancuernas\n2)Discos\n3)Zapatillas"))} while(producto!=1 && producto!=2 && producto!=3)
    switch(producto){
        case 1:
            return "Mancuernas";
        case 2:
            return "Discos";
        case 3:
            return "Zapatillas"
    }
}

function mostrarPrecio(producto){
    if(producto==="Mancuernas"){
        return 3000;
    }
    else if (producto==="Discos"){
        return 2500;
    }
    else if (producto==="Zapatillas") {
        return 15000;
    }
    
}

function cobrar(nombre,precio){
    alert("Usted lleva el siguiente producto " +nombre+"\nPrecio:$"+precio)
    let pago = parseInt(prompt("Con cuanto pagas?"))
    if(pago> precio){
        alert("Gracias por comprar en Fair Play  Su vuelt es 😎" + (pago - precio))
        
    }
    else if(pago === precio){
        alert("Gracias por su comprar en Fair Play 🦾 ")
    }
    else{
        alert("El monto es insuficiente ")
    }
}



registrarNombre();
let productoNombre = nuestrosProductos();
let precioProducto = mostrarPrecio(productoNombre);

console.log(precioProducto);
cobrar(productoNombre,precioProducto);

const deporte = ["basquet", "camisetas", "zapatillas", "pelotas", "medias", "coderas", "rodilleras"];

deporte.shift()
console.log(deporte)
deporte.reverse()
console.log(deporte)