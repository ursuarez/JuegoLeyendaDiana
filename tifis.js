var tablero, direccion;

var fondo = {
	imagenURL: "img/fondo.png",
	imagenOK: false
};

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var tifis = {
	x: 0,
	y: 0,
	velocidad: 10,
	
	frenteURL: "img/diana-frente.png",
	frenteOK: false,

	atrasURL: "img/diana-atras.png",
	atrasOK: false,

	derechaURL: "img/diana-der.png",
	derechaOK: false,

	izquierdaURL: "img/diana-izq.png",
	izquierdaOK: false
};

var liz = {
	x: 350,
	y: 100,
	lizURL: "img/liz.png",
	lizOK: false

};

function inicio(){
	//alert("Arranca correctamente");
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");
	
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo();

	liz.imagen = new Image();
	liz.imagen.src = liz.lizURL;
	liz.imagen.onload = confirmarLiz();

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente();

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras();

	tifis.derecha = new Image();
	tifis.derecha.src = tifis.derechaURL;
	tifis.derecha.onload = confirmarDerecha();

	tifis.izquierda = new Image();
	tifis.izquierda.src = tifis.izquierdaURL;
	tifis.izquierda.onload = confirmarIzquierda();


	document.addEventListener("keydown", teclado)
	
}

function teclado(datos){
	var codigo = datos.keyCode;
	if (codigo == teclas.UP){
		tifis.y -= tifis.velocidad;
	}

	if (codigo == teclas.DOWN){
		tifis.y += tifis.velocidad;
	}

	if (codigo == teclas.RIGHT){
		tifis.x += tifis.velocidad;
	}


	if (codigo == teclas.LEFT){
		tifis.x -= tifis.velocidad;
	}

	direccion = codigo;
	dibujar();
}


function confirmarFondo(){
	fondo.imagenOK = true;
	dibujar();
}


function confirmarFrente(){
	tifis.frenteOK = true;
	dibujar();
}

function confirmarAtras(){
	tifis.atrasOK = true;
	dibujar();
}

function confirmarDerecha(){
	tifis.derechaOK = true;
	dibujar();
}

function confirmarIzquierda(){
	tifis.izquierdaOK = true;
	dibujar();
}
function confirmarLiz(){
	liz.lizOK = true;
	dibujar();
}



function dibujar(){
	
	if (fondo.imagenOK == true) {
		tablero.drawImage(fondo.imagen, 0, 0);	
	}
	
	var tifiDibujo = tifis.frente;
	if (tifis.frenteOK && tifis.atrasOK && tifis.derechaOK && tifis.izquierdaOK) {
		if (direccion == teclas.UP){
			tifiDibujo = tifis.atras;
		}
		if (direccion == teclas.DOWN){
			tifiDibujo = tifis.frente;
		}
		if (direccion == teclas.RIGHT){
			tifiDibujo = tifis.derecha;
		}
		if (direccion == teclas.LEFT){
			tifiDibujo = tifis.izquierda;
		}
		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);	
	}
	
	if (liz.lizOK){
		tablero.drawImage(liz.imagen, liz.x, liz.y);
	}

}