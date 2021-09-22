"use strict";

// Consola

var Consola = {
    depurar: (...datos) => {
        if (datos == null | datos == ''){
            return console.error('Introduzca un mensaje en la función consola.depurar()')
        }else {
            console.debug(...datos)
        }
    },
    error: (...datos) => {
        if (datos == null | datos == ''){
            return console.error('Introduzca un dato en la función consola.error()')
        }else {
            console.error(...datos)
        }
    },
    info: (...datos) => {
        if (datos == null | datos == ''){
            return console.error('Introduzca un dato en la función consola.info()')
        }else {
            console.info(...datos)
        }
    },
    mostrar: (...datos) => {
        if (datos == null | datos == ''){
            return console.error('Introduzca un dato en la función consola.mostrar()')
        } else {
            console.log(...datos)
        }
    },
    advertencia: (...datos) => {
        if (datos == null | datos == ''){
            return console.error('Introduzca un dato en la función consola.advertencia()')
        }else {
            console.advertencia(...datos)
        }
    },
    mostrarObjetoEnString: (objeto) => {
        if (objeto == null || objeto == '') {
            return console.error('Introduzca un objeto en la función consola.mostrarObjetoEnString()')
        } else {
            var i = objeto.replace(/{/g, '').replace(/}/, '').replace(/"/, '');
            return i
        }
    },
    afirmar: (condición) => {
        if (condición === false || condición === undefined) {
            return console.error('%cAfirmación fallida: consola.afirmar', 'font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,"Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"');
        };
    },
    limpiar: () => {
        console.clear();
        return console.info('%cLa consola fue limpiada', 'font-style: italic; color: #969696;');
    },
    contenido: () => {
        return consola;
    },
    contar: (nombre = 'Default') => {
        console.count(nombre)
    },
    resetearConteo: (nombre = 'Default') => {
        console.countReset(nombre)
    },
    tiempo: (nombre = 'Default') => {
        console.time(nombre)
    },
    tiempoFin: (nombre = 'Default') => {
        console.timeEnd(nombre)
    },
    tiempoMostrar: (nombre = 'Default') => {
        console.timeLog( nombre)
    }
};

var consola = Object.freeze(Consola)

var Consola = {
    afirmar: () => {
        return consola.error('Consola no está definido');
    },
    limpiar: () => {
        return consola.error('Consola no está definido');
    },
    contenido: () => {
        return consola.error('Consola no está definido');
    },
    contar: () => {
        return consola.error('Consola no está definido');
    },
    resetearConteo: () => {
        return consola.error('Consola no está definido');
    },
    depurar: () => {
        return consola.error('Consola no está definido');
    },
    error: () => {
        return consola.error('Consola no está definido');
    },
    info: () => {
        return consola.error('Consola no está definido');
    },
    mostrar: () => {
        return consola.error('Consola no está definido');
    },
    tiempo: () => {
        return consola.error('Consola no está definido');
    },
    tiempoFin: () => {
        return consola.error('Consola no está definido');
    },
    tiempoMostrar: () => {
        return consola.error('Consola no está definido');
    },
    advertencia: () => {
        return consola.error('Consola no está definido');
    }
};

// JeSpañol

var JeS = {
    tipoDe: (variable = ()=>{}) => {
        return typeof variable
    },
    $: (selectorHTML) => {
        if (selectorHTML == null || selectorHTML == '') {
            return consola.error('Introduzca un selectorHTML en la función JeS.$()');
        } else {
            var i = document.querySelector(selectorHTML);
            if (i == null) {
                return consola.error('No se encontró una etiqueta \'' + selectorHTML + '\' en la función JeS.$()')
            } else {
                return i
            }
        }
    },
    $$: (etiquetaHTML, posiciónDeEtiqueta = 0) => {
        if (etiquetaHTML == null || etiquetaHTML == '') {
            return consola.error('Introduzca una etiquetaHTML en la función JeS.$$()')
        } else {
            var i = document.getElementsByTagName(etiquetaHTML);
            var a = posiciónDeEtiqueta
            if (i[a] == null) {
                return consola.error('No se encontró una etiqueta <' + etiquetaHTML + '> en la posición ' + a);
            } else {
                return i[a]
            }
        }
    }
};

var { $, $$ } = JeS;

// WINDOW

function alerta(mensaje, returnarMensaje = false) {
    if (mensaje == null || mensaje == '') {
        consola.error('Introduzca un mensaje en la función alerta()');
    } else {
        if (returnarMensaje == true) {
            alert(mensaje);
            return mensaje;
        } 
        else if (returnarMensaje == false) {
            alert(mensaje);
            return undefined;
        } else  {
            consola.error('Introduzca un ' + true + ', ' + false + ' o nada en el parámetro _returnarMensaje de la función alerta()');
        }
    }
};

function confirmar(mensaje) {
    if (mensaje == null || mensaje == '') {
        consola.error('Introduzca un mensaje en la función confirmar()');
    } else {
        var i = confirm(mensaje);
        return i;
    }
};

function cuadroDialogo(mensaje, valorDefecto = '') {
    if (mensaje == null || mensaje == '') {
        consola.error('Introduzca un mensaje en la función cuadroDialogo()');
    } else {
        var i = prompt(mensaje, valorDefecto);
        return i;
    }
}

var cachés = {
    eliminar: (nombreCaché) => {
        if (nombreCaché == null || nombreCaché == '') {
            consola.error('Introduzca un nombre de caché en el parámetro nombreCaché de la función cachés.eliminar()');
        } else {
            caches.delete(nombreCaché);
        }
    },
    tiene: (nombreCaché) => {
        if (nombreCaché == null || nombreCaché == '') {
            consola.error('Introduzca un nombre de caché en el parámetro nombreCachés de la función cachés.tiene()');
        } else {
            caches.has(nombreCaché);
        }
    },
    teclas: () => {
        caches.keys();
    },
    match: (petición, _opciones) => {
        if (petición == null || petición == '') {
            consola.error('Introduzca un petición en el parámetro petición de la función cachés.match()');
        } else {
            caches.match(petición, _opciones);
        }
    }
};

var caché = {
    eliminar: (nombreCaché) => {
        if (nombreCaché == null || nombreCaché == '') {
            consola.error('Introduzca un nombre de caché en el parámetro nombreCaché de la función caché.eliminar()');
        } else {
            cache.delete(nombreCaché);
        }
    },
    tiene: (nombreCaché) => {
        if (nombreCaché == null || nombreCaché == '') {
            consola.error('Introduzca un nombre de caché en el parámetro nombreCaché de la función caché.tiene()');
        } else {
            cache.has(nombreCaché);
        }
    },
    teclas: () => {
        cache.keys();
    },
    match: (petición, _opciones) => {
        if (petición == null || petición == '') {
            consola.error('Introduzca un petición en el parámetro petición de la función cachés.match()');
        } else {
            cache.match(petición, _opciones);
        }
    }
};

function Portapapeles(texto) {
    var div = document.createElement('textarea')
    div.style.position = 'absolute'
    div.style.marginTop = '-1000px'
    div.id = 'Prtppls'
    div.textContent = texto
    document.body.appendChild(div)
    div = $('#Prtppls')
    div.focus()
    document.execCommand('selectAll')
    document.execCommand('copy')
    div.remove()
}

Clipboard = Portapapeles