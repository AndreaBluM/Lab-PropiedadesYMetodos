function reproductor(){
    this.estado = "detenido";
    this.play = function(){
        if(this.estado == "pausado" || this.estado == "detenido"){
            this.estado = "reproduciendo"
            console.log("Reproduciendo musica")
        }
        else{
            console.log("Ya esta reproduciendo musica")
        }    
    }
    this.pausar = function(){
        if(this.estado == "reproduciendo"){
            this.estado = "pausado"
            console.log("Se ha pausado la musica");   
        } else{
            console.log("No hay musica reproduciendose");
        }
    }
    this.detener = function(){
        this.estado = "detenido"
        console.log("Musica detenida")
    }
}
                
let reproductor1 = new reproductor()
reproductor1.play()
console.log(reproductor1.estado)
reproductor1.pausar()