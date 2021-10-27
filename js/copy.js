$(
    () => {
        $('#copy').añadirEvento('click', () => {
            Portapapeles('<!-- PRUEBA JS -->')
            alerta('Copiado al portapapeles')
        })
    }
)