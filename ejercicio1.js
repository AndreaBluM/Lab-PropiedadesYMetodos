
function libros(titulo,autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function(){
        if (this.prestado == false){
            this.prestado = true;
            console.log("El prestamo fue exitoso");
            
        } else{
            console.log("El libro: " + this.titulo + " ya se encuentra prestado");   
        }
    }
}

let prestamo1 = new libros("principito","oscar")
console.log(prestamo1.prestado);
prestamo1.prestar()
console.log(prestamo1.prestado);
prestamo1.prestar()
