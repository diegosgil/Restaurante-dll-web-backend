
//Importar los servicios
const {leerDocumentos, agregarDocumento, modificarDocumento, eliminarDocumento} = require('../services/mongodb.service');


//Controlador de usuarios

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const crearUsuario = async(req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Usuarios agregado correctamente."
        //Agregar a la base de datos 
        let informacion = req.body
        let resultado = await agregarDocumento("usuarios", informacion)
        console.log(resultado);
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error agregando el usuario."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const modificarUsuario = async(req, res) => {
    let respuesta = {}
    try {
        let _id = req.params["id"]   //Accedemos a las propiedades de un JSON
        respuesta.ok = true
        respuesta.message = "Usuarios modificado correctamente."
        //Modificar usuario a la base de datos 
        let informacion = req.body
        let resultado = await modificarDocumento("usuarios", {_id}, informacion)
        console.log(resultado);
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error modificando el usuario."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const eliminarUsuario = async(req, res) => {
let respuesta = {}
    try {
        let _id = req.params["id"]   //Accedemos a las propiedades de un JSON
        respuesta.ok = true
        respuesta.message = "Usuarios eliminado correctamente."
        //Eliminar usuario a la base de datos 
        let resultado = await eliminarDocumento("usuarios", {_id})
        console.log(resultado);
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error eliminando el usuario."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarUsuario = async(req, res) => {
let respuesta = {}
    try {
        let _id = req.params["id"]   //Accedemos a las propiedades de un JSON
        respuesta.ok = true
        respuesta.message = "Usuarios consultado correctamente."
        //Consultar usuario a la base de datos 
        let resultado = await leerDocumentos("usuarios", {_id})
        console.log(resultado);
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultado el usuario."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarUsuarios = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Usuarios consultados correctamente."
        //Consulta a la base de datos de usuarios
        let resultado = await leerDocumentos("usuarios")
        console.log(resultado)
        respuesta.info = resultado
        res.send(respuesta)

    } catch (error) {
        console.log(error)
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando un usuario."
        respuesta.info = error
        res.status(500).send(respuesta)

    }
}

module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios
}


