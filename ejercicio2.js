function listaCompras(){
    this.producto = [];
    this.agregar = function(producto){
        this.producto.push(producto)
    };
    this.mostrar = function(){
        for(i = 0; i < this.producto.length; i++){
            console.log(this.producto[i])
        }
    }
}

let lista = new listaCompras()
lista.agregar("Banano")
lista.agregar("Mango")
lista.agregar("Durazno")
lista.mostrar()