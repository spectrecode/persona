  window.addEventListener("load", function () { 
    var boton = document.getElementById("calculo");
    boton.addEventListener("click", function() {
        var nombre = document.getElementById("nombre").value;
        var edad = parseInt(document.getElementById("edad").value);
        var genero = document.getElementById("genero").value;

		var persona1 = new Persona(nombre, edad, genero);
        document.write(persona1.individuo());
        function Persona(name, age, gender) {
            this.sunombre = nombre;
            this.suedad = edad;
            this.sugenero = genero;
            this.mayorEdad = (this.suedad >= 18);
            this.individuo = function() {
                if (this.mayorEdad) {
                    return "Hola mi nombre es " + this.sunombre + " tengo " + this.suedad + " años y soy mayor de edad";
                } else 
                    return "Hola mi nombre es " + this.sunombre + " tengo " + this.suedad + " años y soy menor de edad";            
            };
        };
    });
});

//mayorEdad = (edad >= 18) ? true : false;