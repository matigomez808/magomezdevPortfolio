
let lst = []

class Story {
  constructor(title, text, prompts) {
    this.title = title;
    this.text = text;
    this.prompts = prompts;
    this.palabras = [];
  }
  promptUser() {
    
  }
}


export const dino = {
  titulo: `El dinosaurio, de Augusto Monterroso`,
  cuentoOG : `Cuando despertó, el dinosaurio todavía estaba allí.`,
  cuentoMod: `Cuando ${lst?.[0] || prompts[0]}, el ${lst?.[1] || prompts[1]} todavía estaba allí.`,
  prompts :[`Verbo en pasado`, `Sustantivo masculino`],
};

export const iran = {
  titulo: `Un sueño, de Jorge Luis Borges`,
  cuentoOG : `En un desierto lugar del Irán hay una no muy alta torre de piedra, sin puerta ni ventana. En la única habitación (cuyo piso es de tierra y que tiene la forma de círculo) hay una mesa de maderas y un banco. En esa celda circular, un hombre que se parece a mi escribe en caracteres que no comprendo un largo poema sobre un hombre que en otra celda circular escribe un poema sobre un hombre que en otra celda circular... \n El proceso no tiene fin y nadie podrá leer lo que los prisioneros escriben.`,
  cuentoMod : `En un ${lst?.[0] || prompts[0]} lugar del Irán hay una no muy alta torre de ${lst?.[1] || prompts[1]},sin ${lst?.[2] || prompts[2]} ni ventana. En la única habitación (cuyo piso es de tierra y que tiene la forma de círculo) hay una mesa de maderas y un ${lst?.[3] || prompts[3]}. En esa celda circular, un hombre que se parece a ${lst?.[4] || prompts[4]} escribe en caracteres que no comprende un largo poema sobre un ${lst?.[4] || prompts[4]} que en otra celda circular escribe un poema sobre un ${lst?.[4] || prompts[4]} que en otra celda circular… El proceso no tiene fin y nadie podrá leer lo que los  ${lst?.[5] || prompts[5]} escriben.`,
  prompts: [`Adjetivo`, `Sustantivo`, `Sustantivo`, `Sustantivo`, `Sustantivo`, `Sustantivo plural`]
};

/* export const caballo = {
  cuentoOG: 'Numeración incorrecta, de Isabel González. \n "Un día me compraré un caballo de éstos. Rosa y con alas", dice la niña y señala, en el libro abierto sobre sus muslos, la foto de un flamenco. El hombre, alentadopor tanta inocencia, se quita la chaqueta, estrecha su acercanza y escarba losbordes de la hoja sesgada mientras le explica que alguien arrancó una página entredefinición e imagen, que después del doce no viene el quince y que imagínate siGenghis Khan hubiera dominado Mongolia sobre un ave de tan frágiles patas. Comosi la niña no supiera. Como si no apretara en su puño la hoja extirpada. Como silas cosas no pudieran ser de otra forma.',
  cuentoMod: ''
};

export const fantasma = {
  cuentoOG: 'Fantasma, inédito de Patricia Esteban Erlés. \n El hombre que amé se ha convertido en fantasma. Me gusta ponerle mucho suavizante, plancharlo al vapor y usarlo como sábana bajera las noches que tengo una cita prometedora.',
  cuentoMod: ''
};
export const jodo = {
  cuentoOG: 'Calidad y cantidad, de Alejandro Jodorowsky. \n No se enamoró de ella, sino de su sombra. La iba a visitar al alba, cuando su amada era más larga.',
  cuentoMod: ''
};
 */

/*
  BY-GEMINI
  1. Ciencia ficción:

Título: La última transmisión

Microrrelato:

El astronauta Leonora observó la Tierra desde la ventana de la estación espacial. Un destello verde cruzó el cielo: la última señal de vida desde su planeta natal. Un virus indetectable había exterminado a la humanidad en cuestión de semanas. Ahora, Leonora era la única superviviente, orbitando un mundo vacío.

2. Fantasía:

Título: El susurro del bosque

Microrrelato:

Elena se adentró en el bosque siguiendo un susurro que solo ella podía oír. La niebla la envolvía como un velo mientras las ramas de los árboles susurraban su nombre. Al final del camino, encontró una criatura luminosa de ojos color zafiro. Era el espíritu del bosque, que la había elegido para ser su guardiana.

3. Misterio:

Título: La sombra en la pared

Microrrelato:

El detective Márquez observaba la sombra en la pared del apartamento vacío. No era una simple mancha, sino una figura humanoide que se movía con una gracia espectral. Márquez encendió la luz, pero la sombra persistió. Era una presencia invisible, un testigo silencioso del crimen que se había cometido en esa misma habitación.

4. Romance:

Título: El encuentro bajo la lluvia

Microrrelato:

Sofía y Tomás se encontraron por casualidad bajo la lluvia torrencial. Ambos buscaban refugio en la misma cafetería, y sus miradas se cruzaron en la puerta. La conversación fluyó como el agua entre ellos, y en cuestión de horas, se enamoraron bajo el aguacero, como si el destino mismo los hubiera unido.

5. Terror:

Título: La muñeca de porcelana

Microrrelato:

La muñeca de porcelana observaba a Clara desde la repisa. Sus ojos negros brillaban con una intensidad malsana. Clara se despertaba en medio de la noche con la sensación de que la muñeca la vigilaba, y sus sueños se llenaban de terror. Una noche, la muñeca se movió por sí sola, confirmando sus peores pesadillas.

6. Humor:

Título: El gato detective

Microrrelato:

Sherlock Bones, un gato atigrado con una pajarita roja, olfateaba la escena del crimen: un jarrón roto en la sala de estar. Su agudo instinto felino lo llevó a la culpable: la perrita Lola, quien intentaba ocultar un trozo de pescado bajo el sofá. Sherlock la miró con severidad, y ella, con la cabeza gacha, aceptó su culpabilidad.

7. Histórico:

Título: La carta del soldado

Microrrelato:

En las trincheras de la Primera Guerra Mundial, el soldado Miguel escribió una carta a su amada Elena. Le describía el horror de la guerra y la esperanza de volver a verla algún día. La carta nunca llegó a su destino, pero Miguel la guardó en su bolsillo como un amuleto de supervivencia.

8. Western:

Título: El duelo en el desierto

Microrrelato:

El pistolero Wyatt se enfrentaba a su rival en un duelo al mediodía bajo el sol abrasador del desierto. El polvo se levantaba con cada disparo, y la tensión era palpable. Un solo hombre saldría vivo de este encuentro, y solo el destino decidiría quién sería.

9. Realista:

Título: La decisión difícil

Microrrelato:

Ana se encontraba en una encrucijada. Tenía que elegir entre dos ofertas de trabajo, una en su ciudad natal y otra en el extranjero. Ambas opciones tenían sus pros y sus contras, y la decisión la atormentaba. Cada camino le prometía una vida diferente, y ella no sabía cuál era el correcto.

10. Fábula:

Título: La tortuga y la liebre

Microrrelato:

En una carrera entre una tortuga y una liebre, la liebre confiaba en su velocidad y se echó a descansar a mitad de camino. La tortuga, sin embargo, avanzó con paso lento pero constante. Cuando la liebre despertó, la tortuga ya había cruzado la meta, demostrando que la perseverancia y la constancia son más importantes que la velocidad.
*/