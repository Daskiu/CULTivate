const array_opciones = [
  "Visita del Gran Líder: Un jugador puede duplicar el número de seguidores en una fila/columna específica.",
  "Donación Milagrosa: Recibe un recurso adicional al lanzar los dados en el próximo turno.",
  "Bendición del Culto: Todos los jugadores reciben un seguidor adicional.",
  "Infiltración Exitosa: Intercambia un seguidor con otro jugador sin su consentimiento.",
  "Recursos Extraordinarios: El jugador puede elegir cualquier recurso o carta de acción del mazo.",
  "Fervor de los Seguidores: Duplicas el número de seguidores en una fila o columna.",
  "Visión Profética: Mira la mano de un jugador y roba una carta de su elección.",
  "Deserción Masiva: Todos los jugadores pierden un seguidor.",
  "Evento de Rebelión: Todos los jugadores pierden un seguidor.",
  "Intervención del Gobierno: Se bloquean dos casillas aleatorias en cada tablero.",
  "Traición Interna: Pierdes una carta de acción al azar.",
  "Confusión Colectiva: Todos los jugadores deben barajar sus manos y repartirlas aleatoriamente entre sí.",
  "Espionaje Fallido: Pierdes una carta de acción por cada seguidor en tu tablero.",
  "Caos en la Mente del Líder: El jugador que gira la ruleta intercambia toda su mano de cartas con otro jugador.",
  "Poder Oscuro: El jugador debe decidir si sacrifica uno de sus seguidores para ganar una acción adicional.",
  "Cambio de Liderazgo: Todos los jugadores pasan sus tableros a la izquierda por una ronda.",
  "Confusión de Identidad: Los jugadores deben intercambiar uno de sus seguidores con el jugador a la derecha.",
  "Desafío de Recursos: Todos los jugadores lanzan los dados nuevamente; quien saque el menor número pierde un seguidor.",
  "Redistribución del Poder: Los jugadores con más seguidores deben dar un seguidor a los que tienen menos.",
  "Intervención del Consejo: Los jugadores deben girar la ruleta una vez más y el nuevo evento afecta a todos por igual.",
  "El Fin de los Tiempos: Si se gira este evento, el juego termina inmediatamente y se cuenta quién tiene más seguidores.",
  "El Gran Cisma: Los jugadores se dividen en equipos, compartiendo recursos y estrategias hasta que uno gane.",
  "Traición Última: El jugador que gira la ruleta debe elegir a otro jugador para intercambiar tableros por el resto del juego.",
];

let canvas = document.getElementById("idCanvas");
let context = canvas.getContext("2d");
let center = canvas.width/2;

for (var i = 0; i < array_opciones.length; i++) {
    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, center-20,i*2*Math.PI/array_opciones.length, (i+1)*2*Math.PI/
        array_opciones.length);
    context.lineTo(center, center);
    context.fillStyle = random_color();
    context.fill();

    context.save();
    context.translate(center, center);
    context.rotate(3*2*Math.PI/(5*array_opciones.length)+i*2*Math.PI/array_opciones.length);
    context.translate(-center, -center);
    context.font = "13px Sans Serif";
    context.textAlign = "Right";
    context.fillStyle = "white";
    context.fillText (array_opciones[i], canvas.width-30, center);
    context.restore();
}

let pos_ini = 0;
let click = 0;
let movement;

function girar () {
    if(click==0){
        let canvas = document.getElementById("idCanvas");
        movement = setInterval(function(){
        pos_ini+=10;
        canvas.style.transform = 'rotate('+pos_ini+' deg)';
    }, 10);
    click=1;
    document.getElementById("idEstado")="Detener"
    } else {
        clear(movement);
        click=0;
        document.getElementById("idEstado")="Girar"
    }  
}

function random_color(){
    let ar_digit = ['2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '';
    let i = 0;
    while (i<6) {
        let pos = Math.round(Math.random()*ar_digit.length-1);
        color = color+''+ar_digit[pos];
        i++;
    }
    return '#'+color;
}