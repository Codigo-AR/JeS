/*!
 * JeSpañol libreria de JavaScript derivada de jQuery
 * http://Codigo-AR.github.io/JeS
 * 
 * Copyright (c) 2021 JeS
 * Publicado bajo la licencia MIT
 * http://Codigo-AR.github.io/JeS/LICENSE
 * 
 * Date: 2015-04-28T16:19Z
 */

var version = "1.0";
var html = document.querySelector('html');
document.html = html
window.html = html
var body = document.body;
var head = document.head;
var documento = document;
function JeSpañol() {
    return version;
}
var Violation = true
if (Violation == false) {
    window.delete(Violation)

}

if (typeof ethereum !== "undefined" && typeof ethereum.autoRefreshOnNetworkChange !== "undefined") {
    ethereum.autoRefreshOnNetworkChange = false;
}

JeSpañol.js = {
    version: version,
    versión: version,
    licencia: "https://CodigoAR-JeS.github.io/LICENSE",
    licenciaURL: () => {
        window.open('https://CodigoAR-JeS.github.io/LICENSE', '_blank');
    }
}

class array {
    constructor(...contenido) {
        return new Array(...contenido)
    }
}


"use strict";

/*Consola*/

class Consola {
    constructor() {
        this.depurar = this.__proto__.depurar
        this.error = this.__proto__.error
        this.info = this.__proto__.info
        this.mostrar = this.__proto__.mostrar
        this.advertencia = this.__proto__.advertencia
        this.mostrarObjetoEnString = this.__proto__.mostrarObjetoEnString
        this.afirmar = this.__proto__.afirmar
        this.limpiar = this.__proto__.limpiar
        this.contar = this.__proto__.contar
        this.resetearConteo = this.__proto__.resetearConteo
        this.tiempo = this.__proto__.tiempo
        this.tiempoFin = this.__proto__.tiempoFin
        this.tiempoMostrar = this.__proto__.tiempoMostrar
        delete this.__proto__.constructor

        this.contenido = this

        this.__proto__.JeSpañol = JeSpañol
    }

    depurar(...datos) {
        if (datos == null || datos == '') {
            throw new TypeError('No se pudo ejecutar \'depurar\' en \'consola\': se requiere 1 argumento, pero solo hay 0 presente')
        } else { console.debug(...datos) }
    }
    error(...datos) {
        if (datos == null || datos == '') {
            throw new TypeError('No se pudo ejecutar \'error\' en \'consola\': se requiere 1 argumento, pero solo hay 0 presente')
        } else {
            console.error(...datos)
        }
    }

    info(...datos) {
        if (datos == null || datos == '') {
            throw new TypeError('No se pudo ejecutar \'info\' en \'consola\': se requiere 1 argumento, pero solo hay 0 presente')
        } else {
            console.info(...datos)
        }
    }

    mostrar(...datos) {
        if (datos == null || datos == '') {
            throw new TypeError('No se pudo ejecutar \'mostrar\' en \'consola\': se requiere 1 argumento, pero solo hay 0 presente')
        } else {
            console.log(...datos)
        }
    }

    advertencia(...datos) {
        if (datos == null || datos == '') {
            throw new TypeError('No se pudo ejecutar \'advertencia\' en \'consola\': se requiere 1 argumento, pero solo hay 0 presente')
        } else {
            console.warn(...datos)
        }
    }
    mostrarObjetoEnString( /*objeto*/) {
        throw new TypeError('No se pudo ejecutar \'mostrarObjetoEnString\' en \'consola\': la funcion aún está en desarollo')
        /* if (objeto == null || objeto == '') {
            throw new TypeError('No se pudo ejecutar \'mostrarObjetoEnString\' en \'consola\': se requiere 1 argumento, pero solo hay 0 presente')
        } else {
            var i = objeto.replace(/{/g, '').replace(/}/, '').replace(/"/, '');
            return i
        } */
    }

    afirmar(condición) {
        if (condición === false || condición === undefined) {
            consola.error('Afirmación fallida: consola.afirmar');
        };
    }

    limpiar() {
        console.clear();
        return console.info('%cLa consola fue limpiada', 'font-style: italic; color: #969696;');
    }

    contar(nombre = 'Default') {
        console.count(nombre)
    }

    resetearConteo(nombre = 'Default') {
        console.countReset(nombre)
    }

    tiempo(nombre = 'Default') {
        console.time(nombre)
        if (Violation == true) {
            consola.advertencia('[Violation] \'tiempo\' está en deshuso\nSi no quiere ver esta advertencia ponga \'Violation\' en \'false\'')
        }
    }

    tiempoFin(nombre = 'Default') {
        console.timeEnd(nombre)
        if (Violation == true) {
            consola.advertencia('[Violation] \'tiempoFin\' está en deshuso\nSi no quiere ver esta advertencia ponga \'Violation\' en \'false\'')
        }
    }

    tiempoMostrar(nombre = 'Default') {
        console.timeLog(nombre)
        if (Violation == true) {
            consola.advertencia('[Violation] \'tiempoMostrar\' está en deshuso\nSi no quiere ver esta advertencia ponga \'Violation\' en \'false\'')
        }
    }
};
var consola = new Consola()
Object.freeze(consola)
delete Consola

/*ALERTA, CONFIRMAR y CUADROdEdIALOGO*/

function alerta(mensaje, returnarMensaje = false) {
    if (mensaje == null || mensaje == '') {
        throw new TypeError('No se pudo ejecutar \'alerta\' en \'window\': se requiere 1 argumento, pero solo hay 0 presente');
    } else {
        if (returnarMensaje == true) {
            alert(mensaje); return mensaje;
        } else if (returnarMensaje == false) {
            alert(mensaje); return undefined;
        } else {
            throw new TypeError('No se pudo ejecutar \'alerta\' en \'window\': se requiere ur true, false o nada en el 2º parametro');
        }
    }
};

function confirmar(mensaje) {
    if (mensaje == null || mensaje == '') {
        throw new TypeError('No se pudo ejecutar \'confirmar\' en \'window\': se requiere 1 argumento, pero solo hay 0 presente');
    } else {
        var i = confirm(mensaje); return i;
    }
};

function cuadroDialogo(mensaje, valorDefecto = '') {
    if (mensaje == null || mensaje == '') {
        throw new TypeError('No se pudo ejecutar \'cuadroDeDialogo\' en \'window\': se requiere 1 argumento, pero solo hay 0 presente');
    } else {
        var i = prompt(mensaje, valorDefecto); return i;
    }
};

/*PORTAPAPELES*/

function Portapapeles(texto) {
    var div = document.createElement('textarea');
    div.style.position = 'absolute';
    div.style.marginTop = '-1000px';
    div.id = 'Prtppls'; div.textContent = texto;
    body.appendChild(div);
    div = document.querySelector('#Prtppls');
    div.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    div.remove();
};
var Clipboard = Portapapeles;

/*EXISTE*/

function existe(selectorHTML) {
    var existe = !!document.querySelector(selectorHTML);
    return existe
}

/*EJECUTAR ERROR*/

function ejecutar(error) {
    throw error;
};

/*EVENTOS CON TECLA*/

function EventoTecla(CódigoTecla, funcionQueEjecutaLaTecla) {
    if (typeof funcionQueEjecutaLaTecla !== 'function') {
        throw new TypeError('No se pudo ejecutar la funcion \'EventoTecla\': el segundo parametro esperaba una función y no un ' + typeof funcionQueEjecutaLaTecla)
    } else {
        window.addEventListener('keyup', (evento) => {
            if (evento.code == CódigoTecla) {
                funcionQueEjecutaLaTecla()
            }
        })
    }
};

// JeSpañol

var tipoDe = (variable = () => { }) => {
    if (typeof variable == "boolean") {
        return "booleano"
    } else if (typeof variable == "function") {
        return "función"
    } else if (typeof variable == "number") {
        return "número"
    } else if (typeof variable == "string") {
        return "cadena"
    } else if (typeof variable == "symbol") {
        return "simbolo"
    } else if (typeof variable == "undefined") {
        return "indefinido"
    } else if (variable == document) {
        return "documento"
    } else if (variable == window) {
        return "ventana"
    } else if (typeof variable == "object") {
        return "objeto"
    }
}

var JeS = (selector) => {
    if (tipoDe(selector) == "función") {
        window.onunload = selector(window, documento)
    } else if (existe(selector)) {
        return new JeS.fn.str(selector)
    } else if (selector == null || selector == "") {
        throw new TypeError('No se pudo ejecutar \'JeS\' en \'Window\': se requiere 1 argumento, pero solo hay 0 presente');
    }
}

JeS.fn = JeS.__proto__ = {
    str: class {
        constructor(selector) {
            var elems = document.querySelectorAll(selector)
            if (elems.length == 0) {
                this.length = 0
                this.selector = ""
                this.JeSpañol = version
            } else {
                var n = 1
                for (let i = 0; i < elems.length; i++) {
                    const elem = elems[i];
                    this[i] = elem
                    this.length = n++
                }
                this.selector = selector
                this.JeSpañol = version
            }
        }

        añadir(selector) {
            if (tipoDe(selector) == 'objeto') {
                for (let i = 0; i < selector.length; i++) {
                    const elem = selector[i];
                    var n = this.length
                    this[n] = elem
                    n++
                    this.length = n
                }
                return this
            } else if (tipoDe(selector) == 'cadena') {
                var elems = document.querySelectorAll(selector)
                for (var i = 0; i < elems.length; i++) {
                    var n = this.length
                    this[n] = elems[i]
                    n++
                    this.length = n
                }
                return this
            }
        }

        añadirClase(...clases) {
            for (var i = 0; i < this.length; i++) {
                this[i].classList.add(...clases)
            }
            return this
        }

        añadirHijo(elemento, posición) {
            if (tipoDe(elemento) == "cadena" && elemento.includes('<')) {
                for (var i = 0; i < this.length; i++) {
                    if (posición == "primero" || posición == "antes" || posición == 1 || posición == "1" || posición == "1º") {
                        this[i].insertAdjacentHTML('afterbegin', elemento);
                    } else {
                        this[i].insertAdjacentHTML('beforeend', elemento);
                    }
                }
                return this
            } else if (tipoDe(elemento) == "objeto") {
                var n = 1;
                for (var i = 0; i < this.length; i++) {
                    if (posición == "primero" || posición == "antes" || posición == 1 || posición == "1" || posición == "1º") {
                        this[i].parentNode.insertBefore(elemento, this[0]);
                    } else {
                        this[i].parentNode.insertBefore(elemento, this[n]);
                        n++
                    }
                }
                return this
            }
        }

        añadirEvento(tipo, evento) {
            if (tipo == null || tipo == "") {
                throw new TypeError('No se pudo ejecutar \'añadirEvento\' en \'JeS\': se requiere 1 argumento, pero solo hay 0 presente')
            } else if (tipoDe(evento) !== "función" || evento == null) {
                throw new TypeError('No se pudo ejecutar \'añadirEvento\' en \'JeS\': se requiere una función en el segundo argumento')
            } else {
                for (var i = 0; i < this.length; i++) {
                    this[i].addEventListener(tipo, evento)
                }
                return this
            }
        }

        después(elemento) {
            if (tipoDe(elemento) == "cadena" && elemento.includes('<')) {
                for (var i = 0; i < this.length; i++) {
                    this[i].insertAdjacentHTML('afterend', elemento);
                }
                return this
            } else if (tipoDe(elemento) == "objeto") {
                for (var i = 0; i < this.length; i++) {
                    this[i].parentNode.insertBefore(elemento, this[i].nextSibling);
                }
                return this
            }
        }

        antes(elemento) {
            if (tipoDe(elemento) == "cadena" && elemento.includes('<')) {
                for (var i = 0; i < this.length; i++) {
                    this[i].insertAdjacentHTML('beforebegin', elemento);
                }
                return this
            } else if (tipoDe(elemento) == "objeto") {
                for (var i = 0; i < this.length; i++) {
                    this[i].parentNode.insertBefore(elemento, this[i]);
                }
                return this
            }
        }

        atr(nombre, valor) {
            for (var i = 0; i < this.length; i++) {
                this[i].setAttribute(nombre, valor)
            }
            return this
        }

        atrRemover(nombre) {
            for (var i = 0; i < this.length; i++) {
                this[i].removeAttribute(nombre)
            }
            return this
        }

        foco(función = null) {
            if (función == null) {
                this[0].focus()
                return this
            } else if (tipoDe(función) == "función") {
                this[0].addEventListener("focus", función)
            }
        }

        focoQuitar() {
            if (función == null) {
                this[0].blur()
                return this
            } else if (tipoDe(función) == "función") {
                this[0].addEventListener("blur", función)
            }
        }
    },
    createElem: class {
        constructor(nodeElem) {
            this[0] = nodeElem
            this.title = nodeElem.title
            this.html = nodeElem.innerHTML
            this.texto = nodeElem.textContent
            this.JeSpañol = JeSpañol
        }

        añadirClase(...clases) {
            for (var i = 0; i < this.length; i++) {
                this[i].classList.add(...clases)
            }
            return this
        }

        añadirHijo(elemento, posición) {
            if (tipoDe(elemento) == "cadena" && elemento.includes('<')) {
                for (var i = 0; i < this.length; i++) {
                    if (posición == "primero" || posición == "antes" || posición == 1 || posición == "1" || posición == "1º") {
                        this[i].insertAdjacentHTML('afterbegin', elemento);
                    } else {
                        this[i].insertAdjacentHTML('beforeend', elemento);
                    }
                }
                return this
            } else if (tipoDe(elemento) == "objeto") {
                var n = 1;
                for (var i = 0; i < this.length; i++) {
                    if (posición == "primero" || posición == "antes" || posición == 1 || posición == "1" || posición == "1º") {
                        this[i].parentNode.insertBefore(elemento, this[0]);
                    } else {
                        this[i].parentNode.insertBefore(elemento, this[n]);
                        n++
                    }
                }
                return this
            }
        }
    }
}

JeS.crearElemento = (nombre, contenido = "", HTML_o_Texto) => {
    if (nombre == null) {
        throw new TypeError('No se pudo ejecutar \'crearElemento\' en \'JeS\': se requiere 1 argumento, pero solo hay 0 presente')
    } else if (contenido !== "" && HTML_o_Texto == null) {
        throw new TypeError('No se pudo ejecutar \'crearElemento\' en \'JeS\': se requieren 2 argumentos, pero solo hay 1 presente');
    } else {
        var elem = document.createElement(nombre)
        if (HTML_o_Texto == "HTML") {
            elem.innerHTML = contenido
            return new JeS.fn.createElem(elem)
        } else if (HTML_o_Texto == "Texto") {
            elem.textContent = contenido
            return new JeS.fn.createElem(elem)
        } else {
            return new JeS.fn.createElem(elem)
        }
    }
}

var $ = JeS


$((window) => {
    if (window.JeSpañol == undefined) {
        window.JeSpañol = JeSpañol
    }
    if (window.array == undefined) {
        window.array = array
    }
})

var allElems = document.querySelectorAll('*')
for (let i = 0; i < allElems.length; i++) {
    const elems = allElems[i];
    elems.JeSpañol = JeSpañol
    elems.version = version
}