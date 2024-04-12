// Crear los personajes con HP y daño aleatorios
let personaje1 = {
    hp: Math.floor(Math.random() * 100) + 1,
    daño: Math.floor(Math.random() * 6) + 5
};

let personaje2 = {
    hp: Math.floor(Math.random() * 100) + 1,
    daño: Math.floor(Math.random() * 6) + 5
};


// Mostrar los HP iniciales
alert(`Personaje 1 HP: ${personaje1.hp}\nPersonaje 2 HP: ${personaje2.hp}`);
let finished = false;
// Escuchar las teclas 'x' y 'n'
document.addEventListener('keydown', function(event) {
    if(finished){
        return;
    }
    if (event.key === 'x') {
        // Personaje 1 ataca a Personaje 2
        personaje2.hp -= personaje1.daño;
        if (personaje2.hp <= 0) {
            document.getElementById('monje-rojo').src=document.getElementById('monje-azul').src;
            setTimeout(function(){
                alert('Personaje 1 ha ganado la batalla');
                finished=true;
            },300);

        }
    } else if (event.key === 'n') {
        // Personaje 2 ataca a Personaje 1
        personaje1.hp -= personaje2.daño;
        if (personaje1.hp <= 0) {
            document.getElementById('monje-azul').src=document.getElementById('monje-rojo').src;
            setTimeout(function(){
                alert('Personaje 2 ha ganado la batalla');
                
            finished=true;
            },300);
        }
    }

    // Actualizar las barras de vida
    let barraVidaP1 = document.querySelector('#hp-personaje1');
    let barraVidaP2 = document.querySelector('#hp-personaje2');

    barraVidaP1.style.width = personaje1.hp + '%';
    barraVidaP1.textContent = personaje1.hp;

    barraVidaP2.style.width = personaje2.hp + '%';
    barraVidaP2.textContent = personaje2.hp;
});