
#Cipher: OLSW

OLSW es una página que cifra y descifra mensajes utilizando el método de [Cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar).

## Todo lo que necestias para comenzar y pre-requisitos
Para poder trabajar con este repositorio debes:
1. Asegúrate de tener un memo editor de texto en condiciones (Atom, Visual Code, Sublime Text o cualquier otro de tu preferencia).
2. Para ejecutar los comandos necesitas una shell UNIX Shell (que es un programita que interpreta líneas de comando (command-line interpreter)), así como tener git instalado. Si usas un sistema operativo "UNIX-like" (como GNU/Linux o MacOS), ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar [Git bash](https://gitforwindows.org/).
3. Haz tu propio fork_and_knife fork de este repositorio de tu cohort.
4. Clona tu fork a tu computadora (copia local).
5. Instala las dependencias del proyecto utilizando el comando npm install en la terminal (Git bash). Esto asume que has instalado Node.js (que incluye npm).
6. Si todo ha ido bien, deberías poder ejecutar las traffic_light pruebas unitarias (unit tests) con el comando npm run test.
¡Estás ist@ para comenzar a trabajar! 

## Ejecutando las pruebas
Este proyecto contiene una carpeta llamada "test", donde se encuentran los doscumentos necesarios para realizar las siguientes pruebas:
- Cipher debe ser un objeto
- encode debe de ser una función
Para la función encode:
- Al ingresar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", con un desplazamiento o(offset) de 33, debe retornar: "HIJKLMNOPQRSTUVWXYZABCDEFG".
- Al ingresar: "abcdefghijklmnopqrstuvwxyz", con un offset de 33, debe retornar "hijklmnopqrstuvwxyzabcdefg".
- Al ingresar: " !@", con un offset de 33, debe retornar: " !@".
Para la función decode:
- Al ingresar: "HIJKLMNOPQRSTUVWXYZABCDEFG", con un desplazamiento o(offset) de 33, debe retornar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".
- Al ingresar: "hijklmnopqrstuvwxyzabcdefg", con un offset de 33, debe retornar "abcdefghijklmnopqrstuvwxyz".
- Al ingresar: " !@", con un offset de 33, debe retornar: " !@".

Dichas pruebas se utilizan para evaluar que la función que escribas realmente ejecute lo que se necesita para codificar o decodificar un texto.

### Pruebas de estilo de codificación
Además de las pruebas que verifican que nuestras funciones hagan lo que queremos, este repositorio contiene pruebas que evalúan el estilo en que se escribe el código de JavaScript, HTML, CSS, y las mismas pruebas. Dicho estilo está basado en:
- chai
- eslint
- HTML hint
- package.json
- mocha

## Construído con
Las librerías y páginas externas utilizadas para la creación de este proyecto fueron las siguientes:
- Vanilla JavaScript
- HTML 5
- CSS 3
- [IcoMoon](https://icomoon.io/)
- [GoogleFonts](https://fonts.google.com/)
- [Adobe Color](https://color.adobe.com/es/create/color-wheel/)
- [FreePik](https://www.freepik.es/)

## Contribuyendo
En caso de requerir una contribución a este proyecto, favor de escribirle a los autores.

## Autores
- [Diego Velez](https://github.com/diegovelezg)
- [Silvana Suarez](https://github.com/shirley-startary)
- [Lupo Montero](https://github.com/lupomontero)
- [Jonhks](https://github.com/Jonhks)
- [Loúrdes Vilchez](https://github.com/developerVilchez)
- [Gonzalo Parra](https://github.com/gaposx)
- [Paulina Zedillo](https://github.com/Pau-za)

## Expresiones de Gratitud
Agradezco enormemente a mis compañeras Elsy, Gaby, Lorena, Fabiola, Diana, Elenor, y Ely por haberme escuchado, ayudado, dado ánimos, y distraerme siempre que lo necesité. Gracias a ustedes no morí en el intento durante este proceso, y siempre sentí que, aunque no estuviera logrando algo, era temporal, porque entre todas encontraríamos una solución. ¡Gracias, totales! <3



------------------------------------------------------------------------------------------------------------------------------------------------

# Usuarios de OLSW

## ¿Quiénes son?

**OLSW** es una página de cifrado y descifrado de mensajes que va dirigida a mujeres. El nombre **OLSW** se obtuvo de cifrar con un desplazamiento de siete lugares, con base en el [Cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar), la palabra **HELP**, que significa **AYUDA** en inglés. Este es el propósito de la página, ayudar a las mujeres.

Durante el 2018, en México se cometieron, en promedio, nueve feminicidios cada 24 h, y el 60% de las mujeres había vivido alguna situación de violencia, de acuerdo a la [Organización de las Naciones Unidas, ONU](https://www.efe.com/efe/america/sociedad/asesinan-a-nueve-mujeres-cada-dia-en-mexico-denuncia-la-onu/20000013-3821244#). El [feminicidio](https://www.gob.mx/conavim/articulos/que-es-el-feminicidio-y-como-identificarlo?idiom=es) es la forma más extrema de violencia contra las mujeres, pero no es la única, existen otras, como la violencia sexual en el espacio urbano.

En la [ENDIREH](http://www2.unwomen.org/-/media/field%20office%20mexico/documentos/publicaciones/2017/ciudades%20y%20espacios%20p%C3%BAblicos%20seguros.pdf?la=es&vs=330) del 2017 se reportó una prevalencia de la violencia sexual hacia las mujeres en el espacio urbano en la Ciudad de México del 50%, cuando a nivel Nacional, fueron 32 mujeres por cada 100 quienes reportaron haber vivido dicho tipo de violencia. Las prácticas violentas más recurrentes fueron: 
- el acoso callejero: frases ofensivas de carácter sexual que molestan y ofenden a las mujeres (73.7%),
- los tocamientos impropios (58.2%),
- y el 14% de las mujeres sintieron miedo de ser atacadas sexualmente.

![ENDIREH-2017](https://github.com/Pau-za/cdmx-2019-01-bc-core-am-cipher/blob/master/src/images/ENDIREH%202017.PNG)

La ONU, en su publicación sobre [La violencia feminicida en México](http://www2.unwomen.org/-/media/field%20office%20mexico/documentos/publicaciones/2017/10/violenciafeminicidamx%2007dic%20web.pdf?la=es&vs=5302) reconoce la impunidad que acompaña a los actos de violencia contra las mujeres en México, y esto se traduce en la sistematización de dicha violencia. Por lo tanto, las mujeres se han visto obligadas a buscar estrategias alternativas para generar espacios seguros. En este sentido, una herramienta muy importante ha sido la internet. Recientemente ha surgido una gran variedad de [plataformas digitales](https://www.eltiempo.com/tecnosfera/novedades-tecnologia/iniciativas-digitales-para-enfrentar-la-violencia-de-genero-155522) con el objetivo común de aportar a la seguridad en los espacios públicos, privados y personales, de las mujeres.

Bajo las condiciones actuales de violencia hacia las mujeres, **OLSW** surge como una opción para enviar mensajes seguros, ya que se cifran mediante el método de Cifrado César. De esta manera  pueden enviar un mensaje a una o más personas de su confianza, asegurándose de que terceras personas no accedan a su contenido. Dichos mensajes pueden ser utilizados para pedir auxilio, o alertar sobre algún peligro potencial. Asimismo, **OLSW** provee la función de descifrar cualquier mensaje que se haya cifrado en la misma página. Únicamente el o la usuaria tendrá que asegurarse de insertar el mismo número de desplazamiento que se utilizó originalmente para cifrar el mensaje. Toda esta información se entrega a la usuaria al momento de mostrar el mensaje cifrado o descifrado.

# Proceso y decisiones del Diseño de OLSW

## Primer sprint
Mi primer boceto del diseño lo dibujé, y utilicé Marvel para mostrar la forma en que el usuario navegaría por mi [página](https://marvelapp.com/ahhjf67/screen/52722615). Este prototipo lo probé con seis usuarias potenciales. En este primer momento de las pruebas, no hubo comentarios que me indicaran que debía de hacerle cambios a la navegación de la página. Sin embargo, me di cuenta de que tenía que dar una explicación clara sobre el objetivo de la página, por lo que decidí incluir instrucciones dentro de la página.

A continuación, hice la página utilizando elementos del DOM para comunicar el mensaje que introdujera la usuaria con las funciones de codificado y decodificado de los mensajes. Inicialmente la página comenzaba con un texto que explicaba la existencia de **OLSW**, y ejemplos de situaciones en que las usuarias podían hacer uso de la misma. De ahí las usuarias podían indagar más sobre el Cifrado César mediante un botón que desplegaba otro texto corto, para comprender mejor la forma en que trabajaba la página. Posteriormente las usuarias podían regresar a la página principal y elegir comenzar  con la aplicación. En seguida aparecían tres botones con las opciones de: Codificar, Decodificar, Volver al Inicio. Y hasta ese momento las usuarias podían codificar o decodificar sus mensajes. 

![Version-1](https://github.com/Pau-za/cdmx-2019-01-bc-core-am-cipher/blob/master/src/images/versi%C3%B3n_texto_OLSW.png)

Para evaluar la experiencia de usuario durante esta fase envié la liga de mi página a mis seis encuestadas desde la fase anterior. Esta vez recibí comentarios distintos que ayudaron a enriquecer el proyecto: 
- El texto el inicio de la página entorpecía la navegación en la página, y en caso de emergencia no sería muy útil.
- A todas les pareció una página muy interesante, que sí utilizarían.
- El proyecto cobraría más funcionalidad y agilidad si tuviera un botón que enviara a la página de whatsapp, o facebook para enviar el mensaje en ese momento.
- La mayoría comentó que no era muy intuitivo el qué hacer con el mensaje codificado.

Con base en dichas observaciones y comentarios fue que decidí realizar los siguientes cambios para ser probados en la siguiente fase.

## Segundo sprint
Para esta fase, decidí ocultar la información de la página de inicio, y poner únicamente tres botones, uno que permitiera acceder a la información sobre **OLSW** y el Cifrado César, y los otros dos botones para que las usuarias decidieran entre **Codificar** y **Decodificar** su mensaje. También agregué una imagen que indicara que el producto va dirigido a todas las mujeres, y que es muy importante que exista [sororidad](https://es.wikipedia.org/wiki/Sororidad) entre nosotras. Con base en dicha imagen elegí la paleta de colores para la página. Finalmente, agregué una leyenda que indicara, una vez que apareciera el texto codificado, que este debía ser enviado a los contactos de confianza de la usuaria.

![versión-2](https://github.com/Pau-za/cdmx-2019-01-bc-core-am-cipher/blob/master/src/images/version_dinamica_OLSW.jpg)

Para conocer la experiencia de las usuarias en esta fase, decidí realizar un [formulario de Google](https://docs.google.com/forms/d/e/1FAIpQLSdp8lk4utX8fixKJ6-TudDjKHjFDI1YvQPENmoj2-sNQ16fBg/viewform), y envié la liga (que contenía la liga de mi página) a mis contactos mujeres, esta vez no solo me enfoqué en mi círculo cercano, sino en una gran parte de las mujeres que conozco.

El cuestionario fue contestado por 16 mujeres, y las respuestas que obtuve fueron las siguientes:
- El 100% de las usuarias comprendieron el objetivo de la página.
- Algunas de las sugerencias que hicieron para que la página mejorara fueron: 
  - Simplificar la tipografía.
  - Usar colores más claros.
  - Utilizar menos letra y poner más imágenes.
  - Hacer una opción para que el mensaje se pueda enviar por whatsapp directamente desde la página.
  - Hacer que el mensaje que escribe el usuario se pueda ver junto con el mensaje codificado/decodificado.
  - Hubo errores en la decodificación del texto que previamente había sido codificado.
Para leer más sobre la información obtenida de las encuestas da click [aquí](https://docs.google.com/spreadsheets/d/1m0YcfCcbzBLmkIWovkZfNgOwUWduIxvvsuLZAmyyAAA/edit?usp=sharing).

![Respuesta-2](https://github.com/Pau-za/cdmx-2019-01-bc-core-am-cipher/blob/master/src/images/Respuesta2.PNG)

![Respuesta-5](https://github.com/Pau-za/cdmx-2019-01-bc-core-am-cipher/blob/master/src/images/Respuesta5.PNG)

Con base en los comentarios recibidos modifiqué la tipografía. Elegí colores más claros. Aumenté el tamaño de fuente. Decidí poner el mensaje que explica qué hacer con el mensaje resultante de codificar, a la parte donde la usuaria elige **codificar mensaje**.

El resultado final lo puedes revisar en esta [liga](https://pau-za.github.io/cdmx-2019-01-bc-core-am-cipher/src/).




------------------------------------------------------------------------------------------------------------------------------------------------

# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. Algunas ideas de ejemplo:

- Crear claves seguras para el email.
- Encriptar/cifrar una tarjeta de crédito.
- Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
- Mensajería secreta para parejas.


## Consideraciones generales

- Este proyecto se debe resolver de manera individual.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
- Tiempo para completarlo: 2 semanas divididas en 2 sprints (1 entrega cada viernes)

## Objetivos de aprendizaje

En este proyecto aprenderás a construir una aplicación web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, aprenderás a:

- Pintar elementos de formulario en la pantalla usando **HTML** y **CSS**.
- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo** (bucles, condicionales, ...).
- Actualizar la pantalla con los resultados (**manipular el DOM**).
- **Implementar funciones** dada una descripción de su comportamiento.
- Verificar tu implementación con **pruebas unitarias**.
- Entender las **necesidades del usuario** y cómo proponer una solución.
- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

## Parte Obligatoria

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.

#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests(pruebas ) para `cipher.encode()` y `cipher.decode()`.

## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El **boilerplate** incluye algunos tests (comentados al principio del archivo `cipher.spec.js`) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también este caso por tu cuenta.

Por otra parte, complementando la definición de tu producto, puedes plantear un modelo de negocio para tu aplicación, en el que se explique y justifique cómo podrías obtener ingresos a través de ella.

## Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto **NO** está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm run
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre: qué version de JavaScript/ECMAScript, el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

## Evaluación

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo  completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

### Habilidades Técnicas Front-end

| Habilidad |
|-----------|
| **Computer Science (CS)** |
| Lógica |
| Arquitectura |
| **System Control Managmen(SCM)t** |
| Git |
| GitHub |
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| Dont Repeat YourSelf (DRY) |


### Habilidades Técnicas UX

| Habilidad |
|-----------|
| User Centricity |

***

## Pistas sobre cómo comenzar a trabajar en el proyecto

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/), 
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux como tu Sistema Operativo.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/Laboratoria/cdmx-2019-01-bc-core-am-cipher) de tu cohort, tus _coaches_ te compartirán un _link_ a un repositorio y te 
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.
7. A codear se ha dicho! :rocket:

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Pruebas con usuarios (User Testing) e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Pruebas nitarias (Unit test)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- GitHub y GitHub Pages.
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist
Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria
* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [x] Cifra/descifra minúsculas
* [x] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [x] Permite usar un `offset` negativo.
* [x] Modelo de negocio.

