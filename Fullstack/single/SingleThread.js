'use strinct'

function singleThread(){
    console.log('...............................................')
    console.log('           El Proceso de NODE.JS               ')
    console.log('ID del proceso...................' + process.pid)
    console.log('Titulo del proceso...............' + process.title)
    console.log('Directorio de node.js...............' + process.execPath)
    console.log('Directorio Actual...............' + process.cwd())
    console.log('Version de Node.js...............' + process.version)
    console.log('Plataforma (S.O)...............' + process.platform)
    console.log('Arquitectura (S.O)...............' + process.arch)
    console.log('Tiempo activo de Node.js...............' + process.uptime)
    console.log('Argumento del proceso...............' + process.argv)
}
singleThread()