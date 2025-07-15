function carrito(){
    this.productos = [];
    this.total = 0;
    this.agregarProducto = function(nombre,precio){
        this.productos.push(nombre);
        this.total = this.total + precio;
    }
    this.calcularDescuento = function(){
        if (this.total > 100){
            this.total = this.total * 0.90
            console.log("Se aplico un descuento del 10%")
        } else if (this.total > 50 && total <= 100){
            this.total = this.total * 0.95
            console.log("Se aplico un descuento del 5%");
        } else{
            console.log(this.total)
        }
    }
}

let carrito1 = new carrito();
carrito1.agregarProducto("audifonos", 120);
console.log(carrito1.productos);
carrito1.calcularDescuento()

