console.log("Objetos Literales")

let misDatos={
    nombre: "Briana",
    apellido: "Mikkelsen-loth",
    dni: 46048841,
    favFoods: ["sushi", "wok de verduras", "arroz con atun"],
    age: 18,
    saludar: function() {
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.age} años. Mi primera comida favorita es ${this.favFoods[0]}`
    }
}
console.log(misDatos.saludar());



let auto={
    marca:"Toyota",
    modelo:"Hilux",
    anio: "2024",
    color:"Blanco",
    posicion:0,
    avanzar (n) {
        this.posicion += n;
    },
    retroceder (n){
        this.posicion -= n;
    }
}
auto.avanzar(100);
auto.retroceder(50)
console.log(auto.posicion);



let nuevoAuto={
    marca:"Ferrari",
    modelo:"488 GTB",
    anio: "2019",
    color:"Violeta",
    posicion:0,
    moverse (n) {
        this.posicion += n;
    } 
}

nuevoAuto.moverse(697)
nuevoAuto.moverse(-97)
console.log(nuevoAuto.posicion);



let ironMan={
    nombre: "Iron Man",
    team: "Avengers",
    powers: ["Volar", "Lanzar misiles", "Disparar láser"],
    energy: 100,
    getPower (parametro) {
        this.energy -= 50
            return `Personaje elegido:${this.nombre}.
            Poder elegido es: ${this.powers[0]}. 
            Energía restante: ${this.energy}.
            Estado: Critico y pertene al team de los ${this.team}`;
    }
}

console.log(ironMan.getPower(2)); 

let hulk = {
    nombre: "Hulk",
    team: "Avengers",
    powers: ["Aplastar", "`Gritar`", "Golpear"],
    energy: 100,
    getPower (parametro) {
        this.energy -= 20;
        return `Personaje elegido: ${this.nombre}.
        Poder elegido es: ${this.powers[2]}. 
        Energía restante: ${this.energy}.
        Estado: en mejores condiciones y pertene al team de los ${this.team}`;
    }
    }

console.log(hulk.getPower(3)); 