//import fs from "fs";
const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const crear = (descripcion) => {
    cargar();
    let porHacer = {
        descripcion: descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const cargar = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargar();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargar();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = descripcion => {
    cargar();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}